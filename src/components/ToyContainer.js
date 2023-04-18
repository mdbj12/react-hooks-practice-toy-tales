import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toy, handleDelete}) {
  return (
    <div id="toy-collection">
      {
        toy.map((toys) => {
          return (<ToyCard key={toys.id} toys={toys} handleDelete={handleDelete} />)
        })
      }
    </div>
  );
}

export default ToyContainer;
