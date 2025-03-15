"use client";
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { Product } from "@/lib/type";
import styles from "./productManagement.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";
import Image from "next/image";
import { CirclePlus, Edit2 } from "lucide-react";
import FlashSaleModalForm from "../flashSale-management/FlashSaleModalForm";

const ProductManagement = () => {
  // Fetch all products
  const { data: products } = useFindAllProductQuery({});

  // State for modal and editing product
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isFlashSaleModalOpen, setIsFlashSaleModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [existingProduct, setExistingProduct] = useState<Product>();

  // Open modal for Add/Edit
  const handleAddProductOpenModal = (product?: Product) => {
    setIsAddProductModalOpen(true);
  };
  const handleEditOpenModal = (product?: Product) => {
    setEditingProduct(product || null); // Set product for editing or null for new product
    setIsEditProductModalOpen(true);
  };

  // hadle add flase sale
  const handleAddFlasSale = (product: Product) => {
    setExistingProduct(product);
    setIsFlashSaleModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setEditingProduct(null); // Reset editing product when closing
    setIsAddProductModalOpen(false);
    setIsEditProductModalOpen(false)
    setIsFlashSaleModalOpen(false)
    setEditingProduct(null); // Reset editing product when closing
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Product Management</h1>

      {/* Add Product Button */}
      <button
        onClick={() => handleAddProductOpenModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Product
      </button>

      {/* Table Start */}
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className={styles.table_head}>Thumbnail</TableHead>
            <TableHead className={styles.table_head}>Name</TableHead>
            <TableHead className={styles.table_head}>Stock</TableHead>
            <TableHead className={styles.table_head}>IsFlash Sale </TableHead>
            <TableHead className={styles.table_head}>Discount</TableHead>
            <TableHead className={styles.table_head}>Price</TableHead>
            <TableHead className={styles.table_head}>Edit</TableHead>
            <TableHead className={styles.table_head}>Add FlashSale</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products?.data?.map((product: Product) => (
            <TableRow key={product?.id}>
              <TableCell>
                <Image
                  src={product?.productThumbnail}
                  alt="image"
                  className="w-14"
                  width={500}
                  height={100}
                />
              </TableCell>
              <TableCell>{product?.name}</TableCell>
              <TableCell>{product?.stock}</TableCell>
              <TableCell>{product?.isDeleted ? "True" : "False"}</TableCell>
              <TableCell>{product?.regularDiscount}</TableCell>
              <TableCell>{product?.price}</TableCell>
              <TableCell>
                <Edit2
                  onClick={() => handleEditOpenModal(product)}
                  className="text-green-500 cursor-pointer"
                  size={18}
                />
              </TableCell>
              <TableCell>
                <CirclePlus
                  onClick={() => handleAddFlasSale(product)}
                  className="text-green-500 cursor-pointer"
                  size={18}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Table End */}

      {/* Modal for Adding/Editing Product */}
      <ProductForm
        isOpen={isAddProductModalOpen || isEditProductModalOpen}
        
        onClose={handleCloseModal}
        editingProduct={editingProduct}
      />
      {/* add flasSale */}
      <FlashSaleModalForm
        isOpen={isFlashSaleModalOpen}
        onClose={handleCloseModal}
        existingProduct={existingProduct}
      />
    </div>
  );
};

export default ProductManagement;
