export const getStore = async (req, res) => {
  //role must be merchant
  try {
    if (req.user.role.name != "merchant") {
      return res.status(403).json({ message: "Access denied" });
    }
    const store = await storeModel.findOne({ merchant: req.user.id });
    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }
    res.status(200).json({ store });
  } catch (error) {
    console.error("Error fetching store details:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateStore = async (req, res) => {
  try {
    if (req.user.role.name !== "merchant") {
      return res.status(403).json({ message: "Access denied" });
    }
    const { name, description, logoUrl } = req.body;

    // Find store associated with this merchant
    const store = await storeModel.findOne({ merchant: req.user.id });

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // Update fields if provided
    if (name) store.name = name;
    if (description) store.description = description;
    if (logoUrl) store.logoUrl = logoUrl;

    await store.save();
    res.status(200).json({ message: "Store updated successfully", store });
  } catch (error) {
    console.error("Error updating store:", error);
    res.status(500).json({ message: "Server error" });
  }
};
