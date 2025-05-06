import multer from "multer";

const storage = multer.memoryStorage(); // Keep in memory
const upload = multer({ storage });

export default upload;
