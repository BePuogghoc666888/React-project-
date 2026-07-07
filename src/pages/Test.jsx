import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useForm } from "react-hook-form";

import "swiper/css";
import "swiper/css/pagination";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import PhoneMockup from "../on/PhoneMockup";
import fullData from "../data/test.json";
// import section from "../pages/section";

const Test = () => {
  const [openId, setOpenId] = useState(null);

  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0); // Lưu vị trí slide đang hiển thị

  const handleResetForm = () => resizeTo();
  // btn, xoá, chỉnh sửa, gửi thông báo (chưa cần)
  // đang soạn, đã xoá, gần nhất ( khi nhấn vào sẽ trả về cái gần nhất, đọc hiểu k code )
  // kiểu hiển thị, boolaen 
  // nội dung, B T i U trái giữa phải 
  // hình ảnh 
  // btn, nút hàng động, selection, xem chi tiết 
  // link điều hướng, giữ nguyên
  // chọn đối tượng, 4 d.tượng 

  // Khởi tạo React Hook Form với các giá trị mặc định giống như ảnh thiết kế
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      displayType: "all",
      title: "Chương trình khuyến mãi tháng 6/2026",
      content: `Chương trình khuyến mãi tháng 6 năm 2026 đã chính thức bắt đầu! Chúng tôi rất vui mừng thông báo rằng tất cả các sản phẩm trong cửa hàng sẽ được giảm giá 20%, bao gồm cả những mẫu mới nhất vừa ra mắt.\n\n💖 Đây là cơ hội tuyệt vời để bạn sở hữu những sản phẩm yêu thích với mức giá ưu đãi. Đặc biệt, nếu...`,
      actionBtn: "Xem chi tiết",
      redirectLink: "mylocal.vn",
    },
  });

  // Lắng nghe tất cả các ô nhập liệu real-time để truyền xuống hai điện thoại
  const watchType = watch("displayType");
  const watchTitle = watch("title");
  const watchContent = watch("content");
  const watchActionBtn = watch("actionBtn");
  const watchRedirectLink = watch("redirectLink");

  const onSubmit = (data) =>
    console.log("Dữ liệu gửi lên dữ liệu hệ thống:", data);

  return (
    <>
      <div className=" max-w-7xl mx-auto p-6  space-y-12">
        {/* SECTION 1: ACCORDION (ẨN HIỆN) */}
        <div className="space-y-4">
          {fullData.listData.map((item) => {
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
            lg:flex-row gap-8 items-center overflow-visible  relative
            w-full max-w-[1320px]  mx-auto min-h-[727px]
          "
        >
          <div className=" lg:w-[20%] flex flex-col justify-between text-white ">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold  leading-tight">
                Khách hàng nói về Local Travel
              </h2>
              <p className="text-white/80 text-dm leading-relaxed">
                Xem thử những chia sẻ chân thật nhất từ khách hàng đã trải
                nghiệm Local Travel!
              </p>
            </div>

            <div className="mt-6 w-32 h-32 relative">
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
                }} // lưu quyền điều khiển
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                }} // cập nhật vị trí slide mới
                className="w-full  !overflow-visible"
              >
                {fullData.nvien.map((nv) => (
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
                {fullData.nvien.map((item, index) => {
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
        </div>

        <div className="w-full max-w-[1320px] min-h-[727px] mx-auto min-h-screen bg-gray-100 p-2 md:p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-gray-800">Kênh hiển thị</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[1256px] min-h-[703px] mx-auto p-4 flex flex-col gap-4 bg-gray-200 rounded-lg shadow-sm"
          >
            {/* KHUNG CHỨA NỘI DUNG CHÍNH */}
            <div className="w-full flex-1 flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl border">
              {/* BÊN TRÁI: Khung chứa 2 điện thoại xem trước */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold text-gray-800">
                  Bản xem trước
                </h3>

                {/* Điều chỉnh độ rộng w-[380px] để chứa vừa vặn 2 điện thoại nằm ngang thoải mái */}
                <div className="w-[380px] h-[518px] bg-white border border-blue-400 rounded-lg p-4 flex items-center justify-center shrink-0">
                  <div className="flex gap-3 justify-center items-center w-full">
                    {/* Điện thoại 1 - Xem trước ngoài màn hình khóa */}
                    <PhoneMockup
                      device="iphone-16"
                      title={watchTitle}
                      content={watchContent}
                    />

                    {/* Điện thoại 2 - Xem trước chi tiết trong ứng dụng (Nhận thêm text nút hành động và loại hiển thị) */}
                    <PhoneMockup
                      isPreview={false}
                      device="iphone-16"
                      title={watchTitle}
                      content={watchContent}
                      actionText={watchActionBtn}
                      displayType={watchType}
                      hasAction={true}
                    />
                  </div>
                </div>
              </div>

              {/* BÊN PHẢI: Khối cấu hình điền nội dung */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Header cài đặt */}
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-sm font-bold text-gray-800">
                    Cài đặt nội dung
                  </h3>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="px-3 py-1.5 text-xs border rounded-md text-red-400 bg-red-50/50"
                    >
                      Dán nội dung
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1.5 text-xs border rounded-md text-red-500 bg-white shadow-sm font-medium"
                    >
                      Sao chép nội dung
                    </button>
                  </div>
                </div>

                {/* Kiểu hiển thị (Radio Buttons) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 text-left">
                    Kiểu hiển thị
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`border rounded-xl p-3 flex items-center gap-2 cursor-pointer transition-all ${watchType === "type1" ? "border-red-400 bg-white" : "border-gray-200 bg-gray-50/50"}`}
                    >
                      <input
                        type="radio"
                        value="type1"
                        {...register("displayType")}
                        className="accent-red-500"
                      />
                      <span
                        className={`text-xs font-medium ${watchType === "type1" ? "text-gray-700" : "text-gray-400"}`}
                      >
                        Nội dung & Hình ảnh
                      </span>
                    </label>
                    <label
                      className={`border rounded-xl p-3 flex items-center gap-2 cursor-pointer transition-all ${watchType === "type2" ? "border-red-400 bg-white" : "border-gray-200 bg-gray-50/50"}`}
                    >
                      <input
                        type="radio"
                        value="type2"
                        {...register("displayType")}
                        className="accent-red-500"
                      />
                      <span
                        className={`text-xs font-medium ${watchType === "type2" ? "text-gray-700" : "text-gray-400"}`}
                      >
                        Chỉ nội dung
                      </span>
                    </label>
                  </div>
                </div>

                {/* Nhập tiêu đề thông báo */}
                <div className="flex flex-col justify-end">
                  <label className="text-xs font-semibold text-left  text-gray-700 mb-1">
                    Tiêu đề thông báo *
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    placeholder="Nhập tiêu đề..."
                    className="w-full border rounded-lg p-2 text-xs bg-gray-50 outline-none focus:border-red-400"
                  />
                </div>

                {/* Ô soạn thảo Nội dung & Khung tải ảnh */}
                <div className="grid grid-cols-2 gap-4 h-[240px]">
                  <div className="flex flex-col h-full">
                    <label className="text-xs font-semibold text-gray-700 mb-1 text-left">
                      Nội dung *
                    </label>
                    <textarea
                      {...register("content")}
                      placeholder="Nhập nội dung thông báo tại đây..."
                      className="w-full h-full border rounded-lg p-3 bg-white shadow-sm text-xs text-gray-700 resize-none outline-none focus:border-red-400"
                    />
                  </div>

                  {/* Tải hình ảnh (Sẽ ẩn mờ đi hoặc ẩn hẳn nếu chọn chế độ "Chỉ nội dung") */}
                  <div className="flex flex-col h-full transition-opacity duration-300">
                    <label className="text-xs  text-left font-semibold text-gray-700 mb-1">
                      Hình ảnh *
                    </label>
                    <div
                      className={`w-full h-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 text-center ${watchType === "type2" ? "bg-gray-100 opacity-50 pointer-events-none" : "bg-white"}`}
                    >
                      <span className="text-xs text-gray-400">
                        Chọn tệp hoặc kéo thả vào đây
                      </span>
                      <button
                        type="button"
                        className="mt-2 px-4 py-1.5 bg-red-500 text-white rounded-full text-xs font-medium shadow-sm"
                      >
                        Tải tệp lên
                      </button>
                    </div>
                  </div>
                </div>

                {/* Khu vực cấu hình Nút hành động & Link điều hướng */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <button className="radio"></button>
                    <label className="text-xs font-semibold text-gray-700  text-left mb-1">
                      Nút hành động
                    </label>
                    <input
                      type="text"
                      {...register("actionBtn")}
                      placeholder="Ví dụ: Xem chi tiết, Nhận quà..."
                      className="w-full border rounded-lg p-2 text-xs bg-gray-50 outline-none focus:border-red-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold  text-left text-gray-700 mb-1">
                      Link điều hướng
                    </label>
                    <input
                      type="text"
                      {...register("redirectLink")}
                      placeholder="Nhập đường dẫn liên kết (Ví dụ: )..."
                      className="w-full border rounded-lg p-2 text-xs bg-gray-50 outline-none focus:border-red-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER: Nút điều hướng biểu mẫu */}
            <div className="w-full border-t pt-3 flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm">
              <button
                type="button"
                className="px-4 py-2 border rounded-lg text-xs font-medium text-gray-600 bg-gray-50"
              >
                Quay lại
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-4 py-2 border rounded-lg text-xs font-medium text-gray-600"
                >
                  Lưu nháp
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-medium shadow-sm"
                >
                  Tiếp theo &rarr;
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Test;
