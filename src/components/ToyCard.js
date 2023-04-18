import React, {useState} from "react";

function ToyCard({toys, handleDelete}) {
  const [likes, setLikes] = useState(toys.likes)

  function handleLikes(){
    setLikes(likes + 1)
    fetch(`http://localhost:3001/toys/${toys.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes})
    })
    .then(res => res.json())
    .then(data => (data))
  }

  function del(){
    fetch(`http://localhost:3001/toys/${toys.id}`,{
      method: "DELETE"
    }).then(res=> res.json())
    .then(() => handleDelete(toys.id)
    )
  }

  return (
    <div className="card">
      <h2>{toys.name}</h2>
      <img
        src={toys.image}
        alt={toys.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={del} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
