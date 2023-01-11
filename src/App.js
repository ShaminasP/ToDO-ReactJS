import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  function remove(id) {
    const newtoDo = toDos.filter((e) => e.id !== id);
    setToDos(newtoDo);
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>What's the plan for today ? 🌝☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(value);
                    setToDos(
                      toDos.filter((x) => {
                        if (x.id === value.id) {
                          x.status = e.target.checked;
                        }
                        return x;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                   onClick={() =>remove(value.id)}
                
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
