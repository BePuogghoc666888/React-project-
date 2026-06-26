import { Outlet, NavLink } from "react-router-dom";
import { Home, Info, Users, ShoppingCart, Package } from "lucide-react";

export default function Layout() {
  const activeClass = ({ isActive }) => 
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium select-none ${
      isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
      {/* Header / Navbar */}
      <header className="bg-white shadow-xs border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
          
          {/* Logo - Thu nhỏ chữ trên mobile */}
          <h1 className="text-lg md:text-xl font-bold text-gray-800 tracking-wide shrink-0">
            ReactDataRouter
          </h1>
          
          {/* Menu - Tự động thu gọn chữ, chỉ giữ icon trên mobile */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            <NavLink to="/" className={activeClass}>
              <Home size={18} /> <span className="hidden md:inline">Trang chủ</span>
            </NavLink>
            <NavLink to="/about" className={activeClass}>
              <Info size={18} /> <span className="hidden md:inline">Giới thiệu</span>
            </NavLink>
            <NavLink to="/users" className={activeClass}>
              <Users size={18} /> <span className="hidden md:inline">Người dùng</span>
            </NavLink>
            <NavLink to="/produce" className={activeClass}>
              <Package size={18} /> <span className="hidden md:inline">Sản phẩm</span>
            </NavLink>
            <NavLink to="/cart" className={activeClass}>
              <ShoppingCart size={18} /> <span className="hidden md:inline">Giỏ hàng</span>
            </NavLink>
            <NavLink to="/Chsimple" className={activeClass}>
              <Package size={18} /> <span className="hidden md:inline">Custom hook</span>
            </NavLink>
          </nav>

        </div>
      </header>

      {/* Vùng nội dung chính */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
