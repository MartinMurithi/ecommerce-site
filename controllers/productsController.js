const { v4: uuidv4 } = require("uuid");
const cloudinary = require("../config/Cloudinary");
const Product = require("../models/product"); 


const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
     res.status(500).json({ err_name: error.name, error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product does not exist!" });
    }
    
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ err_name: error.name, error: error.message });
  }
};


const postProducts = async (req, res) => {
  const productId = uuidv4();
  const { prod_name, prod_desc, price, stock, category, brand } = req.body;
  const images = req.files;

  try {
    if (!images || images.length === 0) {
      return res.status(400).json({ error: "Images are required" });
    }

    // Upload images to Cloudinary
    const uploadPromises = images.map((image) =>
      cloudinary.uploader.upload(image.path)
    );

    const uploadedImages = await Promise.all(uploadPromises);
    const imageURLS = uploadedImages.map((image) => image.secure_url);

    const newProduct = new Product({
      productId: productId,
      name: prod_name,
      description: prod_desc,
      price,
      stock,
      category,
      images: imageURLS,
      brand,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { prod_name, prod_desc, price, stock, category, brand } = req.body;
  const id = req.params.id;
  const images = req.files;

  if (!images || images.length === 0) {
    return res.status(400).json({ error: "Images are required" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product does not exist" });
    }

    const uploadPromises = images.map(async (image) => {
      try {
        const result = await cloudinary.uploader.upload(image.path);
        return result.secure_url;
      } catch (error) {
        console.error(`Error uploading image ${image.path}:`, error.message);
        throw new Error(`Failed to upload image: ${image.path}`);
      }
    });

    const imageURLS = await Promise.all(uploadPromises);

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name: prod_name,
        description: prod_desc,
        price,
        stock,
        category,
        images: imageURLS,
        brand,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product does not exist and cannot be deleted!" });
    }

    try {
      const cloudinaryImages = product.images;
      const deletionPromises = cloudinaryImages.map((imageUrl) => {
      
        const publicId = imageUrl.split("/").pop().split(".")[0];
        return cloudinary.uploader.destroy(publicId);
      });

      await Promise.all(deletionPromises);
    } catch (error) {
      console.error("Error deleting images from Cloudinary:", error.message);
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      message: `Product has been deleted successfully!`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found to delete." });
    }

    // Deleting images from Cloudinary
    const deletionPromises = products.map((product) => {
      const cloudinaryImages = product.images;
      return cloudinaryImages.map((imageUrl) => {
        const publicId = imageUrl.split("/").pop().split(".")[0];
        return cloudinary.uploader.destroy(publicId);
      });
    });

    // Flatten the deletion promises and wait for all of them to resolve
    await Promise.all(deletionPromises.flat());

    await Product.deleteMany();

    res.status(200).json({
      message: "All products and associated images deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const queryProducts = async (req, res) => {
  const { query } = req.query;
  console.log(query);

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const products = await Product.find({
      prod_name: { $regex: query, $options: "i" }, // 'i' for case-insensitive search
    });

    console.log(products);

    if (products.length === 0) {
      return res.status(404).json({ count: products.length, message: "Product not available" });
    } else {
      return res.status(200).json({ count: products.length, products: products });
    }
  } catch (error) {
    return res.status(500).json({ error: error.name, message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProducts,
  deleteProduct,
  updateProduct,
  deleteAllProducts,
  queryProducts,
};
