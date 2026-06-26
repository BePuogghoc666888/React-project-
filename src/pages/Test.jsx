import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

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
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12">
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

      <div className="bg-[#2A72F4] rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center overflow-visible relative">
        <div className="w-full lg:w-[30%] flex flex-col justify-between text-white ">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Khách hàng nói về Local Travel
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Xem thử những chia sẻ chân thật nhất từ khách hàng đã trải nghiệm
              Local Travel!
            </p>
          </div>

          <div className="mt-6 hidden lg:block w-32 h-32 relative">
            <div className="absolute inset-0 bg-white/10 rounded-2xl flex items-center justify-center text-4xl">
              ⭐⭐⭐
            </div>
          </div>
        </div>

        <div className=" flex flex-none gap-6 pb-4 ">
          {nvien.map((nv) => (
            <div
              key={nv.id}
              className="flex w-[220px] bg-white rounded-2xl p-6 flex flex-col justify-between "
            >
              <div>
                <div className="flex  items-center gap-3 mb-4">
                  <img
                    className="w-10 h-10  bg-gray-100 "
                    src={nv.avt}
                    alt={nv.name}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm ">
                      {nv.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {nv.major}
                    </p>
                  </div>
                </div>

                <div className=" h-[80px] overflow-y-auto text-gray-600 text-sm mb-4 ">
                  {nv.contentCV}
                </div>
              </div>

              <div className="flex gap-1 text-amber-400 text-base">
                {Array.from({ length: Number(nv.start) }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-8 flex items-center gap-6">
          <div className="flex gap-1.5 items-center">
            <span className="w-4 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          </div>

          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors text-sm">
              ←
            </button>
            <button className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#2A72F4] flex items-center justify-center transition-colors shadow text-sm font-bold">
              →
            </button>
          </div>
        </div>
      </div>
      <h1>sss</h1>
      {/* <!-- KHUNG LỚN MÀU XANH: Bỏ 'overflow-hidden' để thẻ được phép tràn tự nhiên ra ngoài --> */}
      <div class="bg-blue-600 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* <!-- KHỐI TRÁI: Tiêu đề --> */}
        <div class="flex flex-col text-white">
          <h2 class="text-2xl font-bold mb-2">
            Khách hàng nói về Local Travel
          </h2>
        </div>

        {/* <!-- KHỐI PHẢI: Vùng chứa các thẻ -->
  <!-- Bỏ 'overflow-x-auto' đi để các thẻ thoải mái tràn tự do ra ngoài khung xanh --> */}
        <div class=" flex gap-4 w-[1200px]">
          {/* <!-- THẺ REVIEW 1 --> */}
          <div class="w-72 h-64 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            {/* <!-- Header thẻ --> */}
            <div class="flex items-center gap-3 mb-3">
              <img class="w-10 h-10 rounded-full" src="avatar.jpg" alt="User" />
              <span class="font-bold text-gray-800 text-sm">Lê Thảo Nhi</span>
            </div>

            {/* <!-- NỘI DUNG CHỮ TRƯỢT LÊN XUỐNG -->
      <!-- h-28: Cố định chiều cao vùng chữ -->
      <!-- overflow-y-auto: Chữ dài quá tự sinh thanh cuộn dọc (lướt lên xuống) --> */}
            <div class="h-28 overflow-y-auto pr-1 text-gray-600 text-xs leading-relaxed mb-3">
              Chữ rất dài ở đây... Cuộn xuống để đọc tiếp. Kéo lên kéo xuống
              thoải mái mà không lo bị tràn ra khỏi thẻ trắng. Thêm chữ vào đây
              để test tính năng trượt dọc nhé!
            </div>

            {/* <!-- Icon 5 sao cố định ở đáy thẻ --> */}
            <div class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>

          {/* <!-- THẺ REVIEW 2 (Nằm cạnh bên và cứ thế tràn thẳng ra rìa màn hình) --> */}
          <div class="w-72 h-64 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div class="flex items-center gap-3 mb-3">
              <img
                class="w-10 h-10 rounded-full"
                src="avatar2.jpg"
                alt="User"
              />
              <span class="font-bold text-gray-800 text-sm">Trần Văn Nam</span>
            </div>
            <div class="h-28 overflow-y-auto pr-1 text-gray-600 text-xs leading-relaxed mb-3">
              Nội dung ngắn thì hiển thị bình thường, nội dung dài thì tự động
              lướt lên xuống được luôn.
            </div>
            <div class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
          {/* <!-- THẺ REVIEW 2 (Nằm cạnh bên và cứ thế tràn thẳng ra rìa màn hình) --> */}
          <div class="w-72 h-64 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div class="flex items-center gap-3 mb-3">
              <img
                class="w-10 h-10 rounded-full"
                src="avatar2.jpg"
                alt="User"
              />
              <span class="font-bold text-gray-800 text-sm">Trần Văn Nam</span>
            </div>
            <div class="h-28 overflow-y-auto pr-1 text-gray-600 text-xs leading-relaxed mb-3">
              Nội dung ngắn thì hiển thị bình thường, nội dung dài thì tự động
              lướt lên xuống được luôn.
            </div>
            <div class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
