import React, { useState } from "react";

const FlashSaleModalForm = ({ isOpen, onClose, existingProduct }) => {
  if (!isOpen) return null;

  console.log("ex", existingProduct)
  const [productId, setProductId] = useState(existingProduct?.id);
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Validate input fields
    if (!productId || !discount || !startDate || !endDate) {
      alert("All fields are required!");
      return;
    }

    console.log("Flash Sale Data:", { productId, discount, startDate, endDate });
    // TODO: Submit data to API or backend

    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add Flash Sale</h2>

        {/* Flash Sale Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block font-semibold">Product Name: {existingProduct?.name}</label>
            
          </div>

          <div>
            <label className="block font-semibold">Discount (%)</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount percentage"
              className="w-full p-2 border rounded"
              min="1"
              max="100"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Start Date</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">End Date</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Submit & Close Buttons */}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Flash Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlashSaleModalForm;
