import React, { useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const NumberInput = ({ number, setNumber, max, maxHint = true }) => {
  const [inputValue, setInputValue] = useState(number); // 新增的state變量
  const timerRef = useRef(null);

  function incrementNumber(params) {
    setNumber((prev) => Math.min(prev + 1, max));
    setInputValue(Math.min(number + 1, max));
  }

  function descrementNumber(params) {
    setNumber((prev) => Math.max(prev - 1, 1));
    setInputValue(Math.max(number - 1, 1));
  }

  function handleInputChange(event) {
    setInputValue(event.target.value); // 立刻顯示輸入值

    const inputNumber = parseInt(event.target.value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (inputNumber <= 0) {
        setNumber(1);
        setInputValue(1); // 立刻顯示輸入值
      } else if (inputNumber > max) {
        setNumber(max);
        setInputValue(max);
      } else if (!isNaN(inputNumber)) {
        setNumber(inputNumber);
      }
    }, 300);
  }

  // ...剩餘部分代碼保持不變
  return (
    <div style={{ textAlign: "center", width: "150px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #767676",
          borderRadius: "10px",
          height: "30px",
          padding: "0 10px",
        }}
      >
        <AiOutlineMinus
          onClick={number > 1 ? descrementNumber : null}
          style={
            number > 1
              ? { cursor: "pointer", color: "#fff" }
              : { cursor: "not-allowed", color: "#767676" }
          }
          fontSize="20px"
        />
        <input
          style={{
            fontSize: "14px",
            fontWeight: "500",
            background: "transparent",
            border: 0,
            width: "40px",
            textAlign: "center",
            color: "#fff",
          }}
          value={inputValue} // 將value改為實時輸入值
          onChange={handleInputChange}
        />
        <AiOutlinePlus
          onClick={number < max ? incrementNumber : null}
          style={
            number < max
              ? { cursor: "pointer", color: "#fff" }
              : { cursor: "not-allowed", color: "#767676" }
          }
          fontSize="20px"
        />
      </div>
      {maxHint && <p style={{ margin: "5px auto" }}>數量限制: {max}</p>}
    </div>
  );
};

export default NumberInput;
