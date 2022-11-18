import React, { useEffect, useState } from "react";
import "../App.css";
const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [listArr, setListArr] = useState(getData());

  // =========================== local storage here =======================
function getData(){
  const data = JSON.parse(localStorage.getItem('list'));
  if(data){
    return JSON.parse(localStorage.getItem("list"));
  }
  else{
    return []
  }
}

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listArr));
  }, [listArr]);

  const addItem = () => {
    if (!inputVal) {
    } else {
      setListArr([...listArr, inputVal]);
      setInputVal("");
    }
  };

  //delete Item
  const deleteItem = (id) => {
    // setListArr(listArr.filter((val)=>{
    //   val.id != id
    // })).map(()=>{

    // })
    alert(id);
    let newArr = listArr.filter((val, ind) => {
      return ind != id;
    });
    setListArr(newArr);
  };
  // delete All
  const DeleteAll = () => {
    setListArr([]);
  };
  return (
    <div>
      <input
        type={"text"}
        placeholder="please enter your todo"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button onClick={addItem}>Add Todo</button>
      <button onClick={DeleteAll}>Delete All</button>

      <ul>
        {listArr.map((val, ind) => {
          return (
            <div key={ind}>
              <li>
                <h3>
                  {val} <button onClick={() => deleteItem(ind)}>Delete</button>
                </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
