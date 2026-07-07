import { create } from "zustand";

export const useNotificationStore = create((set, get) => ({
  list: [],           // Danh sách chứa tất cả thông báo hệ thống
  currentEdit: null,  // Thông báo đang được chọn để chỉnh sửa trên Form

  // Hành động 1: Lưu/Gửi (Thêm thông báo mới vào danh sách)
  saveNotification: (data) => set((state) => ({ 
    list: [...state.list, { ...data, id: Date.now(), status: "Đang soạn" }] 
  })),

  // Hành động 2: Xóa (Chuyển trạng thái sang "Đã xóa")
  deleteNotification: (id) => set((state) => ({
    list: state.list.map(item => item.id === id ? { ...item, status: "Đã xóa" } : item)
  })),

  // Hành động 3: Lấy cái gần nhất (Đọc hiểu logic: Lọc danh sách, lấy phần tử cuối cùng)
  loadLatest: () => {
    const allItems = get().list;
    const latest = allItems[allItems.length - 1]; // Lấy cái cuối cùng vừa nạp vào mảng
    if (latest) set({ currentEdit: latest });     // Đổ dữ liệu cái gần nhất này vào Form
  }
}));

 