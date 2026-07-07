import React from 'react';

  const PhoneMockup = ({ 
    device = 'iphone-16', 
    isPreview = true, 
    displayType = 'all', // 'all' hoặc 'text_only'
    hasAction = true, 
    title = '', 
    content = '', 
    imageUrl = '', 
    actionText = 'Xem chi tiết' ,
    time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false }) 

  }) => {
    const sizes = {
      'iphone': { radius: '24px' },
      'iphone-16': { radius: '24px' },
      'iphone-16-pro-max': { radius: '25px' }
    };
  
   

  const current = sizes[device] || sizes['iphone-16'];
  // const defaultBanner = "https://unsplash.com";
  
  

  return (
    /* THẺ NGOÀI */
    <div className="relative w-[150px] h-[330px] shrink-0">
     
      {/* Nút vật lý */}
      <div className="absolute left-[-1.2px] top-[25%] w-[4px] h-[8%] bg-[#333] rounded-[4px_0_0_4px]" />
      <div className="absolute left-[-1.2px] top-[35%] w-[4px] h-[10%] bg-[#333] rounded-[4px_0_0_4px]" />
      <div className="absolute left-[-1.2px] top-[48%] w-[4px] h-[10%] bg-[#333] rounded-[4px_0_0_4px]" />
      <div className="absolute right-[-1.4px] top-[38%] w-[4px] h-[15%] bg-[#333] rounded-[0_4px_4px_0]" />

      {/* KHUNG THÂN MÁY CHÍNH (GIỮ CSS THUẦN) */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: current.radius,
        border: '6px solid #1a1a1a',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
        position: 'relative',
        background: isPreview ? 'linear-gradient(to bottom, #f59e0b, #d97706)' : '#ffffff', 
      }}>
        
        {/* Dynamic Island */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[4.5%] bg-black rounded-[20px] z-[999]" />
        
        {/* Màn hình hiển thị */}
        <div className="h-full overflow-y-auto pt-[20%] box-border font-sans [@media(any-hover:hover)]:scrollbar-none">
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {/* CHẾ ĐỘ 1: XEM TRƯỚC THÔNG BÁO */}
          {isPreview ? (
            <div className="px-2">
              <div className="text-center text-white text-[10px] font-medium mb-[2px]">
                Thông báo
              </div>
              <div className="text-center text-white text-[24px] font-light mb-3 tracking-[-0.5px]">
                {time}
              </div>
              
              {/* Bong bóng Notification */}
              <div className="bg-white/90 rounded-xl p-2 backdrop-blur-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] flex gap-[6px] items-start">
                {/* Icon App */}
                <div className="w-4 h-4 bg-[#ef4444] rounded shrink-0 flex items-center justify-center text-white text-[9px] font-bold">
                  Lv
                </div>
                
                {/* Nội dung text */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-[1px]">
                    <span className="text-[9px] font-semibold text-gray-800">LCS App</span>
                    <span className="text-[8px] text-gray-500">bây giờ</span>
                  </div>
                  <div className="text-[10px] font-bold text-black mb-[1px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {title || "Chương trình khuyến mãi tháng 6/2026"}
                  </div>
                  <div className="text-[9px] text-gray-700 line-clamp-3 leading-[1.2]">
                    {content || "Chương trình khuyến mãi mới tháng 6 năm 2026 đã chính thức bắt đầu! Chúng tôi rất vui mừng thông báo..."}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* CHẾ ĐỘ 2: CHI TIẾT THÔNG BÁO */
            <div className="flex flex-col h-full bg-blue">
              {/* Header giả lập */}
              <div className="flex items-center px-[10px] pb-[6px] border-b border-gray-100 relative">
                <span className="text-xs font-bold text-gray-400 cursor-pointer">&larr;</span>
                <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold text-gray-800">
                  Chi tiết 
                </span>
              </div>

              {/* Vùng nội dung cuộn */}
              <div className="flex-1 overflow-y-auto p-[10px] flex flex-col gap-2">
                <h4 className="text-[11.5px] font-extrabold text-gray-900 m-0 leading-[1.3]">
                  {title || "Chương trình khuyến mãi tháng 6/2026"}
                </h4>
                
                <div className="text-[9.5px] text-gray-600 leading-[1.35] whitespace-pre-wrap break-words m-0">
                  {content || "Chương trình khuyến mãi mới tháng 6 năm 2026 đã chính thức bắt đầu! Chúng tôi rất vui mừng thông báo..."}
                </div>

                {/* Banner ảnh */}
                <div className="w-full rounded-md overflow-hidden mt-1">
                  <img 
                    src="https://unsplash.com" // Cập nhật link ảnh thật để hiển thị thử
                    alt="Banner" 
                    className="w-full h-auto block" 
                  />
                </div>

                {/* Nút Kêu gọi hành động */}
                <button type="button" className="w-full py-[6px] bg-[#ef4444] text-white border-none rounded-md text-[9.5px] font-semibold text-center mt-auto cursor-pointer">
                  Xem chi tiết
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
