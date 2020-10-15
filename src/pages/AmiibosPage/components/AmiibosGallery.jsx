import React from "react";
import './AmiibosGallery.scss';
import { useParams, Link } from 'react-router-dom';



export default function AmiibosGallery(props) {
  return (
    <div className="c-gallery">
      <div className="row">
        {props.amiibos.map((amiibo, i) => 
          <div className="col-12 col-md-6  col-lg-4" key={i}>
          <figure className="c-gallery__item">
          <Link to={'amiibos/'+ amiibo.tail}>
            <img src={amiibo.image} alt="" className="c-gallery__img"/>
            <h4 className="c-gallery__name">{amiibo.name}</h4>
            </Link>
            </figure>
          </div>
        )}
      </div>
    </div>
  );
}
