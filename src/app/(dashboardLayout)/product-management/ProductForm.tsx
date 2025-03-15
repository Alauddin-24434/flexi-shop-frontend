import { Product } from "@/lib/type";
import { useGetAllcategoryChildrenQuery } from "@/redux/features/category/categoryApi";
import { useCreateProdutMutation } from "@/redux/features/products/productsApi";

import { useFindAllShopsQuery } from "@/redux/features/shop/shopApi";
import { useEffect, useState } from "react";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;

  editingProduct: Product | null;
}


const ProductForm = ({ isOpen, onClose,  editingProduct }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(5);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [shopId, setShopId] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [regularDiscount, setRegularDiscount] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

  const [createProduct,{data}] = useCreateProdutMutation();
  console.log(data)
  const { data: categories } = useGetAllcategoryChildrenQuery({});
  const { data: shops } = useFindAllShopsQuery({});

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || "");
      setPrice(editingProduct.price);
      setDescription(editingProduct.description || "");
      setCategoryId(editingProduct.categoryId || "");
      setStock(editingProduct.stock);
      setShopId(editingProduct.shopId || "");
      setTags(editingProduct.tags || []);
      setRegularDiscount(editingProduct.regularDiscount );
      setThumbnail(null);
      setAdditionalImages([]);
    }
  }, [editingProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("stock", stock.toString());
    formData.append("shopId", shopId);
    formData.append("tags", JSON.stringify(tags)); // Include tags
    formData.append("regularDiscount", regularDiscount.toString()); // Include discount

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    additionalImages.forEach((image) => {
      formData.append("additionalImages", image);
    });

    await createProduct(formData);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl"
          encType="multipart/form-data"
        >
          {/* dynamic name edit product or Add new product  */}
          <h2 className="text-2xl font-bold text-gray-700 text-center">{editingProduct ? "Edit Product" : "Add New Product"}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Category</option>
                  {categories?.data?.map((category: any) => (
                    <option key={category?.id} value={category?.id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Shop</label>
                <select
                  value={shopId}
                  onChange={(e) => setShopId(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Shop</option>
                  {shops?.data?.map((shop: any) => (
                    <option key={shop.id} value={shop.id}>
                      {shop.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                   
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                <input
                  type="number"
                  value={regularDiscount}
                  onChange={(e) => setRegularDiscount(Number(e.target.value))}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Stock</label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <input
                  type="text"
                  value={tags.join(", ")}
                  onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter tags separated by commas"
                />
              </div>

           

              <div>
                <label className="block text-sm font-medium text-gray-700">Thumbnail Image</label>
                <input
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setAdditionalImages(e.target.files ? Array.from(e.target.files) : [])}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
              Cancel
            </button>
            <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default ProductForm;
