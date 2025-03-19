import React from "react";
import { useState } from "react";
import mg from "../assets/megusta.jpg";

const Comentario = ({ avatar, nombre, texto }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } 
  };

  return (
    <div className="comentario">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="contenido">
        <p className="nombre">{nombre}</p>
        <p className="texto">{texto}</p>
        {!liked ? (
          <button className="like-button" onClick={handleLike}>
            <img src={mg} alt="Me Gusta" className="mg" /> ({likes})
          </button>
        ) : (
          <span>
            <img src={mg} alt="Me Gusta" /> ({likes})
          </span>
        )}
      </div>
    </div>
  );
};

export default Comentario;

