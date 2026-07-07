import { myComponents } from './listComponent';

// Hiển thị component ra màn hình bằng .map()
{myComponents.map((item) => (
  <div key={item.id}>
    <h3>{item.name}</h3>
    {item.element} {/* Gọi trực tiếp component ra dùng */}
  </div>
))}
