const Product = require("../models/productModel");
exports.createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res.status(400).json({
        message: "Please provide all the fields",
      });
    }

    const newProduct = await Product.create({
      name,
      price,
      image,
    });
    res.status(201).json({
      message: "New product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Product fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Please provide product ID",
      });
    }
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "please provide product ID",
      });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        image,
        price,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
