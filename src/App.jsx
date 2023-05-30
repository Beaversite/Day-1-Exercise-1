import { useState } from "react";

function App() {

  // function สำหรับเพิ่ม todo เมื่อปุ่ม Add ถูกกด
  const addTodo = () => {

  }

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <label>
          Title
          <input
            className="textField"
            type="text"
            placeholder="Hit the sack."
          />
        </label>
        <div className="toolbar">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>
        <hr />

        {/* เมื่อ todos มีค่าเท่ากับ 0 ให้แสดงผลว่า No todos found */}
        {}

        {/* นำ todos มา loop โดยใช้ method map ที่เป็น built-in method มาแสดงผลตามรูป Exercise 1.3 ข้อ 4 */}
        {}
      </div>
    </div>
  );
}

export default App;
