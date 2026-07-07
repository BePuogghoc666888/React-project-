 import React, { useState, useRef } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import { Pagination } from "swiper/modules";
 
 
 import "swiper/css";
 import "swiper/css/pagination";
 import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const MyMockup = ({ device, children }: { 
  device: 'iphone' | 'ipad' | 'mac' | 'iphone-16' | 'iphone-16-pro-max'; 
  children: React.ReactNode 
}) => {

  const sizes = {
    iphone: { width: "375px", height: "812px", radius: "40px" },
    ipad: { width: "768px", height: "1024px", radius: "24px" },
    mac: { width: "1024px", height: "640px", radius: "12px" },
    "iphone-16-pro-max": { width: "440px", height: "956px", radius: "50px" },
    "iphone-pro-max": { width: "430px", height: "932px", radius: "48px" },
  };

  return (
    <div
      style={{
        width: sizes[device]?.width || '375px',
        height: sizes[device]?.height || '812px',
        borderRadius: sizes[device]?.radius || '40px',
        border: '12px solid #1a1a1a',
        overflow: "hidden",
        margin: '20px auto',
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        background: "#fff",
        transition: "all 0.3s ease", // Hiệu ứng mượt mà khi đổi máy
      }}
    >
      {children}
    </div>
  );
};
 const Test = () => {
   const [openId, setOpenId] = useState(null);
 
   const listData = [
     {
       id: "item-1",
       title: "Tiêu đề Item 1",
       content: "Nội dung chi tiết của item số 1.",
     },
     {
       id: "item-2",
       title: "Tiêu đề Item 2",
       content: "Nội dung chi tiết của item số 2.",
     },
     {
       id: "item-3",
       title: "Tiêu đề Item 3",
       content: "Nội dung chi tiết của item số 3. Nội dung dài...",
     },
   ];
 
   const nvien = [
     {
       id: "01",
       avt: "https://api.dicebear.com/7.x/avataaars/svg?seed=A",
       name: "Lê Thảo Nhi",
       major: "Travel Blogger",
       contentCV:
         "SIM Local giúp tôi kết nối dễ dàng khi đi du lịch nước ngoài. Dịch vụ nhanh chóng, tiện lợi, phủ sóng rộng.",
       start: 5,
     },
     {
       id: "02",
       avt: "https://api.dicebear.com/7.x/avataaars/svg?seed=B",
       name: "Trần Văn Nam",
       major: "Kỹ sư phần mềm",
       contentCV:
         "Với SIM Local, tôi không còn phải lo lắng về việc chuyển đổi SIM hay chi phí roaming đắt đỏ mỗi khi đến một quốc gia mới. SIM Local cung cấp nhiều gói cước linh hoạt...",
       start: 5,
     },
     {
       id: "03",
       avt: "https://api.dicebear.com/7.x/avataaars/svg?seed=C",
       name: "Đặng Hoàng Minh",
       major: "Hướng dẫn viên du lịch",
       contentCV:
         "SIM Local là người bạn đồng hành không thể thiếu trong mỗi chuyến đi của tôi. Rất tiện lợi và đáng tin cậy.",
       start: 5,
     },
     {
       id: "02",
       avt: "https://api.dicebear.com/7.x/avataaars/svg?seed=B",
       name: "Trần Văn Nam",
       major: "Kỹ sư phần mềm",
       contentCV:
         "Với SIM Local, tôi không còn phải lo lắng về việc chuyển đổi SIM hay chi phí roaming đắt đỏ mỗi khi đến một quốc gia mới. SIM Local cung cấp nhiều gói cước linh hoạt...",
       start: 5,
     },
     {
       id: "03",
       avt: "https://api.dicebear.com/7.x/avataaars/svg?seed=C",
       name: "Đặng Hoàng Minh",
       major: "Hướng dẫn viên du lịch",
       contentCV:
         "SIM Local là người bạn đồng hành không thể thiếu trong mỗi chuyến đi của tôi. Rất tiện lợi và đáng tin cậy.",
       start: 5,
     },
   ];
 
   const swiperRef = useRef(null);
 
   const [activeIndex, setActiveIndex] = useState(0); // Lưu vị trí slide đang hiển thị
 
   return (
       <div className=" max-w-6xl  p-6  space-y-12">
         {/* SECTION 1: ACCORDION (ẨN HIỆN) */}
         <div className="space-y-4">
           {listData.map((item) => {
             const isOpen = openId === item.id;
             return (
               <div
                 key={item.id}
                 className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                   isOpen ? "border-red-500 shadow-sm" : "border-gray-200"
                 }`}
               >
                 <button
                   onClick={() => setOpenId(isOpen ? null : item.id)}
                   className={`w-full p-6 text-left flex items-center justify-between cursor-pointer ${
                     isOpen ? "bg-[#F6F7FA]" : "bg-white"
                   }`}
                 >
                   <div className="text-base font-semibold text-gray-800">
                     {item.title}
                   </div>
                   <div className="text-gray-500 text-sm flex items-center justify-center w-5 h-5">
                     {isOpen ? <MinusOutlined /> : <PlusOutlined />}
                   </div>
                 </button>
 
                 <div
                   className={`grid transition-all duration-300 ease-out ${
                     isOpen
                       ? "grid-rows-[1fr] opacity-100"
                       : "grid-rows-[0fr] opacity-0"
                   }`}
                 >
                   <div className="overflow-hidden">
                     <div className="px-6 pb-6 text-gray-700">
                       <p className="text-sm leading-relaxed text-gray-500">
                         <strong className="text-red-500 font-bold">
                           Phần in đậm quan trọng: {item.content}
                         </strong>
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
 
         <div
           className="bg-[#2A72F4] rounded-[32px] p-8 md:p-12 flex flex-col 
       lg:flex-row gap-8 items-center overflow-visible relative
       
       "
         >
           <div className=" lg:w-[20%] flex flex-col justify-between text-white ">
             <div className="space-y-4">
               <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                 Khách hàng nói về Local Travel
               </h2>
               <p className="text-white/80 text-dm leading-relaxed">
                 Xem thử những chia sẻ chân thật nhất từ khách hàng đã trải
                 nghiệm Local Travel!
               </p>
             </div>
 
             <div className="mt-6 hidden lg:block w-32 h-32 relative">
               <div className="absolute inset-0 bg-white/10 rounded-2xl flex items-center justify-center text-4xl">
                 ⭐⭐⭐
               </div>
             </div>
           </div>
 
           <div className="flex-1 w-full overflow-hidden -mr-[9999px] pr-[9999px] ">
             <div className=" w-[220px] flex flex-row gap-6 pb-4 overflow-visible ">
               <Swiper
                 spaceBetween={24}
                 slidesPerView="auto"
                 modules={[Pagination]}
                 onBeforeInit={(swiper) => {
                   swiperRef.current = swiper;
                 }}
                 onSlideChange={(swiper) => {
                   setActiveIndex(swiper.activeIndex);
                 }}
                 className="w-full !overflow-visible"
               >
                 {nvien.map((nv) => (
                   <SwiperSlide key={nv.id} className="flex !w-[240px] ">
                     <div className=" bg-amber-200 rounded-2xl p-6 flex flex-col  ">
                       <div>
                         <div className="flex items-center gap-1 mb-2">
                           <div>
                             <p className="font-bold text-gray-900 text-[10px]  ">
                               {nv.name}
                             </p>
                             <p className="text-[10px] text-gray-400 font-medium">
                               {nv.major}
                             </p>
                           </div>
                         </div>
 
                         <div className=" h-[80px] w-[160px] overflow-x-auto scrollbar-none text-gray-600 text-xs mb-2 ">
                           {nv.contentCV}
                         </div>
                       </div>
 
                       <div className="flex gap-1 text-amber-400 text-base">
                         {Array.from({ length: Number(nv.start) }).map(
                           (_, index) => (
                             <span key={index}>★</span>
                           ),
                         )}
                       </div>
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
             </div>
           </div>
 
           <div className="absolute bottom-1 right-8 flex flex-row flex-wrap items-center gap-6">
             <div className="absolute bottom-6 right-8 flex justify-between flex-row items-center gap-6 z-10">
               <div className="flex gap-1.5 ">
                 {nvien.map((item, index) => {
                   const isActive = activeIndex === index;
                   return (
                     <span
                       key={item.id}
                       onClick={() => swiperRef.current?.slideTo(index)}
                       className={`     rounded-full bg-white transition-all duration-300 ${
                         isActive ? "w-4" : "w-1.5 bg-white/40"
                       } h-1.5`}
                     ></span>
                   );
                 })}
               </div>
 
               <div className="flex gap-2">
                 <button
                   onClick={() => swiperRef.current?.slidePrev()}
                   className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors text-sm"
                 >
                   ←
                 </button>
                 <button
                   onClick={() => swiperRef.current?.slideNext()}
                   className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#2A72F4] flex items-center justify-center transition-colors shadow text-sm font-bold"
                 >
                   →
                 </button>
               </div>
             </div>
           </div>
          <div>
            <MyMockup device="iphone-16">
              <div style={{ padding: '20px' }}>App của bạn ở đây</div>
            </MyMockup>
          </div>

         </div>
       </div>
   );
 };
 
 export default Test;
 