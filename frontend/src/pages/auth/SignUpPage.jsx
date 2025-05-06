import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios.js"
import Navbar from "../../components/landingpage/Navbar.jsx";
import { useAuth } from "../../../../../../Users/vikal singh/Desktop/landthreesixty/client/src/context/AuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
const SignUpPage = () => {
  const navigate = useNavigate();
  const {login}=useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/v1/auth/register", formData);

      const { token, user } = response.data;

       login(token, user)
       
      // Redirect based on role
      if (user.role === "customer") {
        navigate("/customer/dashboard");
      } else if (user.role === "merchant") {
        navigate("/merchant/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
     <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-md p-3"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-md p-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-md p-3"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full border rounded-md p-3"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="merchant">Merchant</option>
          </select>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white rounded-md py-3 hover:bg-teal-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;
