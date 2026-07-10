import React from 'react';
import defaultBellImage2  from '../assets/image.png';

const PhoneMockup = ({ 
  device = 'iphone-16', 
  isPreview = true, 
  displayType = true, 
  hasAction = true, 
  title = '', 
  content = '', 
  imageUrl = defaultBellImage2, 
  actionText = 'Xem chi tiết' ,
  watchActionBtn =''
}) => {
  // Ảnh quả chuông vàng mặc định tách riêng để tái sử dụng cho cả 2 màn hình
  const defaultBellImage = defaultBellImage2;

  const timeCurrent = new Date().toLocaleTimeString()

  const renderCleanContent = (htmlText) => {
    if (!htmlText) return "Thêm nội dung mới...";
    return <div dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };

  return (
    /* THỂ NGOÀI - Fix cứng kích thước chuẩn theo yêu cầu của bạn */
    <div className="relative w-[150px] h-[326px] shrink-0 font-sans select-none text-left">
      {/* Nút vật lý */}
      <div className="absolute left-[-1px] top-[22%] w-[2.5px] h-[7%] bg-[#222] rounded-l" />
      <div className="absolute left-[-1px] top-[31%] w-[2.5px] h-[9%] bg-[#222] rounded-l" />
      <div className="absolute left-[-1px] top-[42%] w-[2.5px] h-[9%] bg-[#222] rounded-l" />
      <div className="absolute right-[-1px] top-[34%] w-[2.5px] h-[13%] bg-[#222] rounded-r" />

      {/* THÂN MÁY CHÍNH */}
      <div className="w-full h-full rounded-[24px] border-[4.5px] border-[#121212] overflow-hidden bg-white shadow-md relative flex flex-col">
        
        {/* Dynamic Island & Thanh trạng thái siêu nhỏ */}
        <div className="absolute top-[1px] inset-x-0 h-[16px] px-2 flex justify-between items-center z-10 text-[6.5px] font-medium text-black pointer-events-none">
          <span>{timeCurrent}</span>
          <div className="w-[30%] h-[7px] bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-[2px]" />
          <div className="flex items-center gap-[1px] scale-[0.8]">
            <span>📶</span><span>🪫</span>
          </div>
        </div>
        
        {/* VÙNG HIỂN THỊ NỘI DUNG MÀN HÌNH */}
        <div className="flex-1 overflow-y-auto pt-[18px] pb-2 box-border [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

         {isPreview ? (
            <div className="flex flex-col h-full bg-[#f8f9fa]">
              <div className="flex justify-between items-center px-2 py-1 bg-white border-b border-gray-100 relative">
                <span className="text-[8px] text-gray-500 cursor-pointer">←</span>
                <span className="text-[8px] font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">Thông báo</span>
                <span className="text-[7px] text-gray-400">✔✔</span>
              </div>

              <div className="px-2 py-0.5 bg-white flex flex-col border-b border-gray-50">
                <div className="h-[1.5px] w-6 bg-blue-500 rounded-full" />
              </div>

              <div className="p-1.5 flex flex-col gap-1.5">
                <div className="bg-[#fff5f5] border border-red-50/70 rounded-md p-1.5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-0.5 scale-[0.95] origin-left">
                      {/* Thêm hình chuông thu nhỏ vào trước chữ Ưu đãi giống thiết kế */}
                      <img src={imageUrl || defaultBellImage} alt="Mini icon" className="w-2.5 h-2.5 rounded-full object-contain" />
                      <span className="text-[7px] font-bold text-gray-700 ml-0.5">Ưu đãi</span>
                      <span className="text-[6px] text-gray-400 font-normal ml-0.5">· 10:29 02/06</span>
                    </div>
                    <span className="text-gray-400 text-[6px]">•••</span>
                  </div>
                  <h5 className="text-[7.5px] font-bold text-gray-900 mb-0.5 leading-tight tracking-tight">
                    {title || "Chương trình khuyến mãi tháng 6/2026"}
                  </h5>
                  <div className="text-[6.5px] text-gray-500 line-clamp-3 leading-normal [&_p]:m-0">
                    {renderCleanContent(content)}
                  </div>
                </div>

                {/* Các bản ghi giả lập phía dưới */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-red-800 rounded-md p-1.5 flex flex-col gap-1 opacity-50">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-200 rounded-full" />
                      <div className="w-8 h-1.5 bg-gray-100 rounded" />
                    </div>
                    <div className="w-full h-2 bg-gray-50 rounded" />
                    <div className="w-[70%] h-1.5 bg-gray-50/50 rounded" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
             
            <div className="flex flex-col h-full bg-white text-left relative">
              <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 rounded-full bg-black/10 flex items-center justify-center text-[6px] font-bold text-gray-600 z-10 cursor-pointer hover:bg-black/20">✕</div>

              {/* Khung ảnh Banner lớn */}
              {!displayType  && (
                <div className="w-full h-[85px] bg-[#fcd34d] relative overflow-hidden flex items-center justify-center shrink-0">
                  {/* Nếu có imageUrl thì hiển thị ảnh up lên, không thì dùng ảnh quả chuông mặc định */}
                  <img 
                    src={imageUrl || defaultBellImage} 
                    alt="Banner" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              )}

              <div className="flex-1 p-2 flex flex-col min-h-0">
                <h4 className="text-[9.5px] font-bold text-gray-900 tracking-tight leading-snug mb-1.5">
                  {title || "Chương trình khuyến mãi tháng 6/2026"}
                </h4>
                
                  <div className="flex-1 overflow-y-auto text-[7.5px] text-gray-600 leading-relaxed font-normal break-words [&_p]:mb-1 [&_p]:leading-relaxed [&::-webkit-scrollbar]:hidden">
                  {renderCleanContent(content)}
                 </div>
                
                

                {/* Nút Hành động */}
                {hasAction && ( 
                  <div className="pt-2 shrink-0" >
                    <button type="button" className="w-full py-1 bg-[#e1251b] hover:bg-red-700 text-white border-none rounded-lg text-[7.5px] font-semibold text-center cursor-pointer shadow-sm active:scale-[0.98] transition-transform">
                      {actionText || "Xem chi tiết"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Thanh gạch đáy Home Indicator */}
        <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[30%] h-[1.5px] bg-black/30 rounded-full pointer-events-none" />
      </div>
    </div>
  );
};

export default PhoneMockup;
