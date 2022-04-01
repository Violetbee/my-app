import React from "react";

function Form({ value, setValue, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setValue(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: value, completed: false, id: Math.random() * 1000 },
    ]);
    setValue("");
  };
  return (
    <div>
      <form className="input">
        <input
          placeholder="Lütfen bir yapılacak ekleyiniz"
          type="text"
          onChange={inputTextHandler}
          value={value}
        />
        <button onClick={submitTodoHandler} type="submit" className="btn">
          Ekle
        </button>
      </form>
    </div>
  );
}
export default Form;
