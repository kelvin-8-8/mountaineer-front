import React, { useState } from 'react';

const CartItem = ({ item, onDelete }) => (
  // 購物車內的每個商品項目元件
  <div className="flex items-center justify-between p-2 border-b">
    <div className="flex items-center gap-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">數量: {item.quantity}</p>
        <p className="text-sm text-gray-600">價格: ${item.price * item.quantity}</p>
      </div>
    </div>
    <button 
      onClick={() => onDelete(item.id)} 
      className="btn btn-ghost btn-sm"
    >
      刪除
    </button>
  </div>
);

const PageTest = () => {
  // 使用 useState 來管理購物車中的商品
  const [cartItems, setCartItems] = useState([]);
  
  // 刪除購物車中的商品
  const handleDeleteItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  // 處理訂單提交
  const handleSubmitOrder = () => {
    if (cartItems.length === 0) {
      alert('購物車是空的！');
      return;
    }
    alert('訂單已送出！');
    setCartItems([]); // 清空購物車
  };

  // 計算總金額
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 原有的裝備列表內容 */}
      <div className="flex justify-end w-full p-4">
        {/* 購物車按鈕 */}
        <label htmlFor="shopping-cart-drawer" className="drawer-button btn btn-primary">
          購物車 ({cartItems.length})
        </label>
      </div>

      {/* Drawer 元件 */}
      <div className="drawer drawer-end">
        <input id="shopping-cart-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-side z-50">
          <label htmlFor="shopping-cart-drawer" className="drawer-overlay"></label>
          
          <div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Drawer 標題 */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">購物車</h2>
              <label htmlFor="shopping-cart-drawer" className="btn btn-sm btn-circle">✕</label>
            </div>
            
            {/* 購物車內容 */}
            <div className="flex flex-col gap-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">購物車是空的</p>
              ) : (
                <>
                  {/* 商品列表 */}
                  <div className="flex flex-col gap-2">
                    {cartItems.map(item => (
                      <CartItem 
                        key={item.id} 
                        item={item} 
                        onDelete={handleDeleteItem}
                      />
                    ))}
                  </div>
                  
                  {/* 總金額顯示 */}
                  <div className="mt-4">
                    <p className="text-lg font-semibold">
                      總計: ${totalAmount}
                    </p>
                  </div>
                  
                  {/* 送出訂單按鈕 */}
                  <button 
                    onClick={handleSubmitOrder}
                    className="btn btn-primary w-full mt-4"
                  >
                    送出訂單
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTest;
