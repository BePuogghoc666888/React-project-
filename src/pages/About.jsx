import React, { useState } from 'react';

export default function About() {
  const codeString = `import React, { useState } from 'react';

function TimKiemTen() {
  const [tuKhoa, setTuKhoa] = useState('');
  const danhSach = ['An', 'Bình', 'Cường', 'Dũng'];

  // Lọc danh sách, sử dụng toLowerCase() để so sánh chính xác
  const ketQuaLoc = danhSach.filter((ten) =>
    ten.toLowerCase().includes(tuKhoa.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nhập tên cần tìm..." 
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)} 
      />
      <ul>
        {ketQuaLoc.map((ten, index) => (
          <li key={index}>{ten}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimKiemTen;`;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto space-y-6">
      {/* Phần giới thiệu */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Về dự án này</h2>
        <p className="text-gray-600 leading-relaxed">
          Đây là ứng dụng minh họa cách tổ chức mã nguồn chuẩn công nghiệp. Dữ
          liệu được quản lý tập trung và phân tách rõ ràng theo mô hình khai báo
          mới của React Router, giúp tối ưu hiệu năng tải dữ liệu trước khi hiển
          thị màn hình (<code className="bg-gray-100 px-1 rounded text-sm">Render-as-You-Fetch</code>).
        </p>
      </div>

      <hr className="border-gray-100" />

      {/* Phần lý thuyết */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Kiến thức bổ trợ</h3>
        
        <div className="bg-gray-50 p-4 rounded-xl space-y-3 text-gray-700 text-sm leading-relaxed">
          <div>
            <strong className="text-indigo-600">1. Hàm includes() dùng để làm gì?</strong>
            <p className="mt-1">
              Kết quả trả về luôn là kiểu Đúng/Sai (<code className="text-red-500">true</code> hoặc <code className="text-red-500">false</code>). 
              Dùng để tìm kiếm cực kỳ nhanh chóng mà không cần viết các vòng lặp phức tạp.
            </p>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <strong className="text-indigo-600">2. Hai trường hợp sử dụng chính</strong>
            <p className="mt-1">
              <strong>A. Tìm kiếm trong mảng (Array.includes()):</strong> Kiểm tra xem một giá trị có nằm trong danh sách không.
            </p>
            
            <div className="mt-2 bg-gray-900 text-gray-200 p-3 rounded-lg font-mono text-xs overflow-x-auto">
              <span className="text-gray-500">// Ví dụ: Kiểm tra xem "Cam" có trong giỏ trái cây không.</span>{'\n'}
              <span className="text-blue-400">const</span> fruits = [<span className="text-green-400">'Táo'</span>, <span className="text-green-400">'Cam'</span>, <span className="text-green-400">'Xoài'</span>];{'\n'}
              fruits.includes(<span className="text-green-400">'Cam'</span>); <span className="text-gray-500">// Kết quả: true</span>{'\n'}
              fruits.includes(<span className="text-green-400">'Nho'</span>); <span className="text-gray-500">// Kết quả: false</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Code mẫu */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">Mã nguồn mẫu</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-sm overflow-x-auto whitespace-pre-wrap shadow-inner">
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
}