import React from "react";
import "./AmiiboItem.scss";

export default function AmiiboItem(props) {
  const amiiboDetail = props.amiibo;

  return (
    <div className="c-item">
      <div className="c-item__img">
        <img className="c-item__img-img" src={amiiboDetail.image} />
      </div>
      <div className="c-item__text">
        <p>Nombre: {amiiboDetail.name}</p>
        <p>Juego: {amiiboDetail.gameSeries}</p>
        <p>Serie: {amiiboDetail.amiiboSeries}</p>
      </div>
    </div>
  );
}
