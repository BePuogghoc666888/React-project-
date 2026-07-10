import React from 'react';

const PhoneMockup = ({ 
  device = 'iphone-16', 
  isPreview = true, // true: Màn hình danh sách (trái), false: Màn hình chi tiết (phải)
  title = 'Chương trình khuyến mãi tháng 6/2026', 
  content = 'Chương trình khuyến mãi tháng 6/2026 đã chính thức bắt đầu! Chúng tôi rất vui mừng thông báo rằng tất cả các sản phẩm trong cửa hàng sẽ được giảm giá 20%, bao gồm cả những mẫu mới nhất vừa ra mắt.\n\nĐây là cơ hội tuyệt vời để bạn sở hữu những sản phẩm yêu thích với mức giá ưu đãi. Đặc biệt, nếu bạn mua hàng với tổng giá trị trên 5 triệu đồng, bạn sẽ nhận được một món quà tặng hấp dẫn từ chúng tôi...', 
  time = '10:29 02/06/2026',
  actionText = 'Xem chi tiết' 
}) => {
  
  const sizes = {
    'iphone': { radius: '24px' },
    'iphone-16': { radius: '24px' },
    'iphone-16-pro-max': { radius: '25px' }
  };

  const current = sizes[device] || sizes['iphone-16'];

  // Giữ nguyên CSS thuần của khung máy cũ và gom gọn các vùng style chính
  const styles = {
    wrapper: { position: 'relative', width: '150px', height: '330px', shrink: 0 },
    hardwareButton: { position: 'absolute', backgroundColor: '#333' },
    mainFrame: {
      width: '100%',
      height: '100%',
      borderRadius: current.radius,
      border: '6px solid #1a1a1a',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
      position: 'relative',
      background: '#ffffff', 
    },
    screenContainer: { height: '100%', paddingTop: '20%', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif', boxSizing: 'border-box' },
    
    // CSS Khối danh sách thông báo (Màn hình trái)
    listHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 6px', borderBottom: '1px solid #f3f4f6' },
    activeItem: { backgroundColor: '#fff5f5', border: '1px solid #fee2e2', borderRadius: '6px', padding: '6px' },
    
    // CSS Khối chi tiết Pop-up (Màn hình phải)
    detailCard: { flex: 1, backgroundColor: '#ffffff', margin: '4px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', paddingBottom: '8px', overflowY: 'auto' },
    yellowBanner: { width: '100%', height: '75px', backgroundColor: '#fbc02d', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' },
    ctaButton: { width: '100%', padding: '5px 0', backgroundColor: '#e53935', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '8px', fontWeight: 'bold', textAlign: 'center', marginTop: 'auto', cursor: 'pointer' }
  };

  return (
    <div style={styles.wrapper}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Giữ nguyên vị trí nút vật lý cũ */}
      <div style={{ ...styles.hardwareButton, left: '-1.2px', top: '25%', width: '4px', height: '8%', borderRadius: '4px 0 0 4px' }} />
      <div style={{ ...styles.hardwareButton, left: '-1.2px', top: '35%', width: '4px', height: '10%', borderRadius: '4px 0 0 4px' }} />
      <div style={{ ...styles.hardwareButton, left: '-1.2px', top: '48%', width: '4px', height: '10%', borderRadius: '4px 0 0 4px' }} />
      <div style={{ ...styles.hardwareButton, right: '-1.4px', top: '38%', width: '4px', height: '15%', borderRadius: '0 4px 4px 0' }} />

      {/* KHUNG THÂN MÁY CHÍNH */}
      <div style={styles.mainFrame}>
        
        {/* Giữ nguyên kích thước Dynamic Island cũ */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[35%] h-[4.5%] bg-black rounded-[20px] z-[999]" />
        
        {/* MÀN HÌNH HIỂN THỊ */}
        <div style={styles.screenContainer} className="overflow-y-auto scrollbar-none bg-[#f8f9fa]">
          
          {/* CHẾ ĐỘ 1: DANH SÁCH THÔNG BÁO (MÀN HÌNH TRÁI) */}
          {isPreview ? (
            <div className="flex flex-col h-full bg-white">
              <div style={styles.listHeader}>
                <span className="text-[9px] font-semibold text-gray-400 cursor-pointer">←</span>
                <span className="text-[9px] font-bold text-gray-800">Thông báo</span>
                <span className="text-[9px] text-gray-400 cursor-pointer">✔✔</span>
              </div>

              {/* Bộ lọc phụ dạng xương (Skeleton) */}
              <div className="flex gap-1.5 px-1.5 py-1 bg-white">
                <div className="w-6 h-2 bg-gray-200 rounded-full" />
                <div className="w-8 h-2 bg-gray-100 rounded-full" />
                <div className="w-6 h-2 bg-gray-100 rounded-full" />
              </div>

              {/* Vùng danh sách tin nhắn */}
              <div className="flex-1 overflow-y-auto p-1 space-y-1.5 bg-[#fdf2f2]/30">
                {/* Tin nhắn đang kích hoạt */}
                <div style={styles.activeItem} className="shadow-sm">
                  <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-3 h-3 bg-[#ef4444] rounded-full flex items-center justify-center text-[6px] text-white font-bold">🎁</div>
                    <span className="text-[7.5px] font-medium text-gray-500">Ưu đãi</span>
                    <span className="text-[7px] text-gray-400">• {time}</span>
                  </div>
                  <h4 className="text-[8.5px] font-bold text-gray-900 mb-0.5 line-clamp-1 leading-tight">{title}</h4>
                  <p className="text-[7.5px] text-gray-600 line-clamp-2 leading-snug m-0">{content}</p>
                </div>

                {/* Các dòng tin nhắn cũ lặp lại dạng Skeleton */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-md p-1.5 opacity-50 space-y-1 border border-gray-100">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-2.5 h-2.5 bg-gray-200 rounded-full" />
                      <div className="w-10 h-1.5 bg-gray-200 rounded" />
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* CHẾ ĐỘ 2: CHI TIẾT THÔNG BÁO POP-UP (MÀN HÌNH PHẢI) */
            <div className="flex flex-col h-full bg-[#f6f6f6] relative">
              {/* Nút đóng X */}
              <button className="absolute top-1.5 left-1.5 w-3.5 h-3.5 bg-black/10 rounded-full flex items-center justify-center text-[7px] font-bold text-gray-700 z-50 border-none cursor-pointer">✕</button>

              <div style={styles.detailCard}>
                {/* Banner Chuông Vàng thu nhỏ tương ứng tỷ lệ khung máy cũ */}
                <div style={styles.yellowBanner}>
                  <div className="absolute w-24 h-24 bg-white/10 rounded-full -top-6" />
                  <div className="relative text-center z-10 flex items-center justify-center">
                    <span className="text-2xl">🔔</span>
                    <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-[5px] font-bold text-white w-2 h-2 rounded-full flex items-center justify-center">1</span>
                  </div>
                  <div className="absolute bottom-1 w-1/2 h-0.5 bg-black/10 rounded-full blur-[0.5px]" />
                </div>

                {/* Khối văn bản nội dung chi tiết */}
                <div className="p-1.5 flex-1 flex flex-col">
                  <h3 className="text-[9px] font-extrabold text-gray-900 mt-0.5 mb-1 leading-tight">
                    {title}
                  </h3>
                  <p className="text-[7.5px] text-gray-700 leading-normal whitespace-pre-line m-0 flex-1 line-clamp-[6]">
                    {content}
                  </p>
                  
                  {/* Nút Xem chi tiết */}
                  <button type="button" style={styles.ctaButton} className="hover:opacity-90 transition-opacity">
                    {actionText}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
