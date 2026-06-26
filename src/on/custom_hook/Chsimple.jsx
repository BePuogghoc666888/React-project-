import { useState, useCallback } from 'react';

// có useCallBack
const useBooleanFull = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, setTrue, setFalse, toggle, setValue };
};

// k có useCallBack
const useToggleNoCallback = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((prev) => !prev);

  return [value, { setTrue, setFalse, toggle, setValue }];
};


// true || false
const useBooleanBasic1 = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse, setValue];
};

// bật tắt
const useToggleBasic2 = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  
  return [value, toggle];
};

function Chsimple() {
  const { value: isOpen, setTrue: openModal, setFalse: closeModal } = useBooleanFull(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Tổng Hợp 4 Dạng Custom Hook Boolean</h2>
      
      <button onClick={openModal}>Mở Modal</button>

      {isOpen && (
        <div style={{ marginTop: '15px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px', width: '250px' }}>
          <p>Nội dung hiển thị của Modal 📦</p>
          
          <button onClick={closeModal}>Đóng</button>
        </div>
      )}
    </div>
  );
}

export default Chsimple;