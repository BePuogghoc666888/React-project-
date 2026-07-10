import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import "swiper/css";
import "swiper/css/pagination";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import PhoneMockup from "../on/PhoneMockup";
import fullData from "../data/test.json";
// import section from "../pages/section";
import { useNotificationStore } from "../on/state/useNotificationStore";

const ImageUploadSection = ({ watchDisplayType, watchImage, setValue }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setValue("image", reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`flex flex-col text-left h-full transition-opacity duration-300 ${watchDisplayType === "text_only" ? "opacity-30 pointer-events-none" : "opacity-100"}`}
    >
      <label className="text-sm font-normal text-gray-900 mb-1">
        Hình ảnh *
      </label>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragActive(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragActive(false);
          processFile(e.dataTransfer.files?.[0]);
        }}
        className={`flex-1 border border-dashed rounded-xl bg-white flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-200 ${isDragActive ? "border-red-500 bg-red-50/40 scale-[0.99]" : "border-gray-200 hover:border-gray-400"}`}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => processFile(e.target.files?.[0])}
        />
        {watchImage ? (
          <img
            src={watchImage}
            alt="Preview"
            className="max-h-[140px] object-contain mx-auto rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center text-center pointer-events-none">
            <p className="text-sm text-gray-400 m-0">
              {isDragActive
                ? "Thả file vào đây ngay!"
                : "Chọn tệp hoặc kéo thả vào đây"}
            </p>
            <span className="mt-3 px-4 py-1.5 bg-red-500 text-white rounded-full text-xs font-medium shadow-sm inline-block">
              Tải tệp lên
            </span>
          </div>
        )}
      </label>
    </div>
  );
};

const Test = () => {
  const [openId, setOpenId] = useState(null);

  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0); // Lưu vị trí slide đang hiển thị

  // Cấu hình toolbar mới cho ReactQuill
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
    ],
  };

  // Khởi tạo React Hook Form với các giá trị mặc định giống như ảnh thiết kế
  const { register, handleSubmit, watch, control, reset, setValue } = useForm({
    defaultValues: {
      displayType: "all",
      title: "Chương trình khuyến mãi tháng 6/2026",
      content: `Chương trình khuyến mãi tháng 6 năm 2026 đã chính thức bắt đầu! Chúng tôi rất vui mừng thông báo rằng tất cả các sản phẩm trong cửa hàng sẽ được giảm giá 20%, bao gồm cả những mẫu mới nhất vừa ra mắt.\n\n💖 Đây là cơ hội tuyệt vời để bạn sở hữu những sản phẩm yêu thích với mức giá ưu đãi. Đặc biệt, nếu...`,
      image: "",
      hasAction: true, // Biến boolean bắt buộc phải có cho checkbox
      actionBtn: "Xem chi tiết",
      redirectLink: "mylocal.vn",
    },
  });

  // Lắng nghe tất cả các ô nhập liệu real-time để truyền xuống hai điện thoại
  const watchType = watch("displayType");
  const watchTitle = watch("title");
  const watchContent = watch("content");
  const watchImage = watch("image"); // Lắng nghe thêm biến image để preview real-time
  const watchActionBtn = watch("actionBtn");
  const watchRedirectLink = watch("redirectLink");
  const watchHasAction = watch("hasAction"); 

  const onSubmit = (data) =>
    console.log("Dữ liệu gửi lên dữ liệu hệ thống:", data);

  // Lấy các hàm xử lý dữ liệu từ Zustand Store đã import
  const { saveNotification, loadLatest } = useNotificationStore();

  // CHỨC NĂNG 1: Nút Xóa (Clear Form về trạng thái trống rỗng)
  const handleClearForm = () => {
    reset({
      displayType: "all",
      title: "",
      content: "",
      image: "",
      hasAction: false,
      actionBtn: "",
      redirectLink: "",
    });
  };

  // CHỨC NĂNG 2: Nút Chỉnh sửa (Đọc hiểu logic: Kích hoạt chế độ chỉnh sửa)
  const handleEdit = () => {
    console.log(
      "Hệ thống mở khóa các ô Input để bắt đầu chỉnh sửa bản ghi này.",
    );
  };

  // CHỨC NĂNG 3: Nhóm trạng thái (Đang soạn, Đã xóa, Gần nhất)
  const handleFilterStatus = (statusType) => {
    console.log(`Lọc danh sách hệ thống theo trạng thái: ${statusType}`);
    // Đọc hiểu: Khi click vào trạng thái nào (Ví dụ: "Đang soạn", "Đã xóa"), UI danh sách sẽ lọc bản ghi tương ứng
  };

  // CHỨC NĂNG 4: Nhấn nút "Gần nhất" (Gọi hàm từ Zustand Store để đổ ngược data vào Form)
  const handleGetLatest = () => {
    loadLatest(); // Hàm này chạy xong sẽ cập nhật dữ liệu mới nhất vào Zustand
  };

  return (
    <>
      {/*  */}
      <div className=" max-w-7xl mx-auto bg-amber-200 p-6 space-y-12">
        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4 w-full shadow-sm">
          {/* Khối bên trái: Tiêu đề và Trạng thái */}
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-bold text-gray-700 tracking-wide">
              CHI TIẾT THÔNG BÁO
            </h2>
            <span className="px-2 py-0.5 text-[10px] font-semibold text-purple-600 bg-purple-50 rounded-md border border-purple-100">
              Đang soạn
            </span>
          </div>

          {/* Khối bên phải: Cụm 3 nút hành động */}
          <div className="flex items-center gap-2">
            {/* Nút Xóa */}
            <button
              type="button"
              onClick={handleClearForm}
              className="px-3 py-1.5 text-[11px] font-medium border border-gray-200 text-gray-500 bg-white hover:bg-gray-50 rounded-lg transition"
            >
              Xóa
            </button>

            {/* Nút Chỉnh sửa */}
            <button
              type="button"
              onClick={handleEdit}
              className="px-3 py-1.5 text-[11px] font-medium border border-red-200 text-red-500 bg-white hover:bg-red-50 rounded-lg transition"
            >
              Chỉnh sửa
            </button>

            {/* Nút Gửi thông báo */}
            <button
              type="submit"
              className="px-3 py-1.5 text-[11px] font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition shadow-sm"
            >
              Gửi thông báo
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1320px] min-h-[727px] rounded-xl mx-auto min-h-screen bg-gray-100 p-2 md:p-6 flex flex-col gap-6">
          <h2 className="text-xl text-left font-bold text-gray-800">
            Kênh hiển thị
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[1256px] min-h-[703px] mx-auto p-4 flex flex-col gap-4 bg-gray-200 rounded-lg shadow-sm"
          >
            {/* KHUNG CHỨA NỘI DUNG CHÍNH */}
            <div className="w-full flex-1 flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl border">
              {/* BÊN TRÁI: Khung chứa 2 điện thoại xem trước */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm text-left font-bold text-gray-800">
                  Bản xem trước
                </h3>

                {/* Điều chỉnh độ rộng w-[380px] để chứa vừa vặn 2 điện thoại nằm ngang thoải mái */}
                <div className="w-[380px] h-[492px] bg-white border border-blue-400 rounded-lg p-4 flex items-center justify-center shrink-0">
                  <div className="flex gap-3 justify-center items-center w-full">
                    {/* Điện thoại 1 - Xem trước ngoài màn hình khóa */}
                    <PhoneMockup
                      device="iphone-16"
                      title={watchTitle}
                      content={watchContent}
                      displayType={watchType === 'type2'} // 

                    />

                    {/* Điện thoại 2 - Xem trước chi tiết trong ứng dụng (Nhận thêm text nút hành động và loại hiển thị) */}
                    <PhoneMockup
                      isPreview={false}
                      device="iphone-16"
                      title={watchTitle}
                      content={watchContent}
                      actionText={watchActionBtn}
                      imageUrl={watchImage}
                      displayType={watchType === 'type2'} // 
                      hasAction={watchHasAction}
                    />
                  </div>
                </div>
              </div>

              {/* BÊN PHẢI: Khối cấu hình điền nội dung */}
              <div className="flex-1 flex flex-col gap-4 ">
                {/* <div className="flex justify-between items-center w-full">
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
                </div> */}

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
                        defaultChecked
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
                    className="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 outline-none focus:border-red-400 shadow-sm"
                  />
                </div>

                <div className="p-6">
                  {/* // */}
                  <div className="grid grid-cols-2 gap-4 h-[240px] ">
                    {/* CỘT TRÁI: TEXT EDITOR */}
                    <div className="flex flex-col text-left h-full min-h-0">
                      <label className="text-sm font-normal text-gray-900 mb-1">
                        Nội dung *
                      </label>
                      <div className="flex-1 rounded-xl border border-gray-200 shadow-sm flex flex-col bg-white overflow-hidden">
                        <Controller
                          name="content"
                          control={control}
                          render={({ field }) => (
                            <ReactQuill
                              theme="snow"
                              value={field.value}
                              onChange={field.onChange}
                              modules={quillModules}
                              placeholder="Nhập nội dung thông báo tại đây..."
                              className="flex-1 flex flex-col overflow-hidden [&_.ql-container]:overflow-y-auto [&_.ql-container]:flex-1 [&_.ql-container::-webkit-scrollbar]:hidden [&_.ql-container]:[scrollbar-width:none] [&_.ql-container]:[-ms-overflow-style:none]"
                            />
                          )}
                        />
                      </div>
                    </div>

                    {/* CỘT PHẢI: KHUNG TẢI ẢNH - Thêm class khóa chức năng khi là type2 */}
                    <div 
                      className={`h-full transition-all duration-300 ${
                        watchType === "type2" 
                          ? "pointer-events-none opacity-40 select-none brightness-95" 
                          : ""
                      }`}
                    >
                      <ImageUploadSection
                        watchDisplayType={watchType}
                        watchImage={watchImage}
                        setValue={setValue}
                        isDisabled={watchType === "type2"}  
                      />
                    </div>
                  </div>
                </div>

                {/* Khu vực cấu hình Nút hành động & Link điều hướng */}
                <div className="grid grid-cols-2 gap-4">
                  {/* CỘT 1: CẤU HÌNH NÚT HÀNH ĐỘNG */}
                  <div className="flex flex-col gap-2">
                    {/* Hàng chứa Nút gạt Toggle và Nhãn */}
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <div className="relative">
                        <input
                          type="checkbox"
                          {...register("hasAction")}
                          className="sr-only peer"
                        />
                        {/* Thanh nền của nút gạt */}
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        Nút hành động
                      </span>
                    </label>

                    {/* Thanh select lựa chọn hành động */}
                    {watch("hasAction") && ( 
                      <div className="relative w-full">
                        <select
                          {...register("actionBtn") }
                          className="w-full border border-gray-200 rounded-xl p-2.5 text-xs text-gray-500 bg-white outline-none appearance-none pr-8 shadow-sm"
                        >
                          <option value="Xem chi tiết">Xem chi tiết</option>
                          <option value="Mua ngay">Mua ngay</option>
                          <option value="Đăng ký">Đăng ký</option>
                        </select>
                        {/* Icon mũi tên xuống ở góc phải */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://w3.org"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CỘT 2: LINK ĐIỀU HƯỚNG */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center h-5">
                      <label className="text-xs font-semibold text-gray-700">
                        Link điều hướng
                      </label>
                    </div>
                    <input
                      type="text"
                      {...register("redirectLink")}
                      placeholder="mylocal.vn"
                      className="w-full border border-gray-200 rounded-xl p-2.5 text-xs bg-white outline-none focus:border-red-400 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* FOOTER: Nút điều hướng biểu mẫu */}
          <div className="w-full border pt-3 flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm">
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
          <div className="bg-amber-50 p-6 rounded-xl border border-gray-100 max-w-6xl">
            {/* Tiêu đề vùng chọn */}
            <div className="mb-4 text-left">
              <h2 className="text-base font-bold text-gray-900">
                Đối tượng nhận thông báo
              </h2>
              <span className="text-xs text-gray-500 mt-1 block">
                Chọn đối tượng
              </span>
            </div>

            {/* Lưới danh sách lựa chọn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 1: Tất cả người dùng */}
              <label className="flex items-start gap-3 p-4 rounded-xl border border-blue-500 bg-blue-50/30 cursor-pointer transition hover:bg-blue-50/50 text-left">
                <input
                  type="radio"
                  name="target_type"
                  value="all"
                  defaultChecked
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-gray-800">
                    Tất cả người dùng LCS App
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Gửi đến toàn bộ người dùng app
                  </span>
                </div>
              </label>

              {/* Option 2: Chọn theo vai trò */}
              <label className="flex items-start gap-3 p-4 rounded-xl  border border-gray-200 bg-gray-50/30 cursor-pointer transition hover:bg-gray-100/50 text-left">
                <input
                  type="radio"
                  name="target_type"
                  value="role"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-gray-800">
                    Chọn theo vai trò
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Bao gồm: LCS NPP/ LCS ASIM/ Saleman
                  </span>
                </div>
              </label>

              {/* Option 3: Chọn thủ công */}
              <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/30 cursor-pointer transition hover:bg-gray-100/50 text-left">
                <input
                  type="radio"
                  name="target_type"
                  value="manual"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-gray-800">
                    Chọn thủ công
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Tìm kiếm và tích chọn từng người dùng LocalShop
                  </span>
                </div>
              </label>

              {/* Option 4: Import File */}
              <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/30 cursor-pointer transition hover:bg-gray-100/50 text-left">
                <input
                  type="radio"
                  name="target_type"
                  value="import"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-gray-800">
                    Import File
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Tải lên file Excel (.xlsx) danh sách người dùng app
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
