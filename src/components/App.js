import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toy, setToy] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToy([...data]))
  }, [])

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(arg1){
    const deleteButton = toy.filter(del => {
      return del.id !== arg1
    })
    setToy(deleteButton)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toy={toy} setToy={setToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toy={toy} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
