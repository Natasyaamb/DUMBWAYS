import React from 'react';

const Basket = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <button className="text-xl">←</button>
        <h1 className="text-xl font-bold">Basket</h1>
        <div className="w-6"></div>
      </div>

      <div className="px-4 py-6">
        <h2 className="mb-2 text-lg font-semibold">Order Item (s)</h2>
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span>Ayam Dada Besar Voucher</span>
            <div className="flex items-center">
              <button className="w-8 h-8 text-gray-600 bg-gray-300 rounded-full">-</button>
              <span className="mx-4">1</span>
              <button className="w-8 h-8 text-white bg-yellow-400 rounded-full">+</button>
            </div>
          </div>
          <button className="text-sm text-green-600">Edit</button>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-lg font-semibold">Payment Details</h2>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>SC</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>PB1</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Addition</span>
              <span>Rp 0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <button className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg">Submit Order</button>
        <p className="mt-2 text-sm text-center text-red-600">Submitted order cannot be cancelled</p>
      </div>
    </div>
  );
};

export default Basket;
