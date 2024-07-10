import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-md">
        {/* <div className="flex justify-between items-center mb-4">
          <span className="text-black text-xl font-medium">9:41</span>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
        </div> */}
        <div className="text-center mb-4">
          <div className="text-black text-lg font-medium">
            Ayam Kampux at Setiabudi One
          </div>
          <div className="text-gray-500 text-sm">
            18, Jl. H. R. Rasuna Said No.18, RT.18/RW.2, Kuningan, Karet Kuningan,
            Setiabudi, South Jakarta City, Jakarta 12920
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="flex justify-center items-center mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-green-600 text-xl font-medium">
            Your order has been successfully sent to kitchen
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Order ID</span>
            <span className="text-black font-medium">663947569</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Queue Number</span>
            <span className="text-black font-medium">A6</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Phone Number</span>
            <span className="text-black font-medium">+6282132017582</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Table</span>
            <span className="text-black font-medium">10</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Order Type</span>
            <span className="text-black font-medium">Dine In</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Order Time</span>
            <span className="text-black font-medium">2023-01-04 14:26:00</span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-4 mb-4">
          <div className="mb-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Qty</span>
              <span className="text-gray-500">Item</span>
              <span className="text-gray-500">Price</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black font-medium">1</span>
              <span className="text-black font-medium">Ayam Dada Besar Voucher</span>
              <span className="text-black font-medium">Rp 0</span>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="flex justify-between">
              <span className="text-black font-medium">Grand Total</span>
              <span className="text-black font-medium">Rp 0</span>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mb-4">
          Pay at Cashier
        </div>
        <div className="text-center mb-4">
          <img src= "https://i.pinimg.com/564x/aa/33/05/aa33051122786760db5479d9a10b1611.jpg"
            alt="Cashier" className="w-32 h-32 mx-auto" />
          <div className="text-black text-lg font-medium mt-2">
            Please come to cashier
          </div>
          <div className="text-gray-500 text-sm">
            Prevent the spread of Corona virus by using e-payment (non-cash)
          </div>
        </div>
        <button className="w-full bg-yellow-500 text-white p-2 rounded-md font-medium">
          Continue Browsing
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
