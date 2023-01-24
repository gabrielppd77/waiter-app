import { Router } from "express";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", (req, res) => {
  res.send("get products");
});

// Create product
router.post("/products", (req, res) => {
  res.send("post product");
});

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("get products by category");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("get orders");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("create order");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("patch order");
});

// Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("delete order");
});
