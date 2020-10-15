import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AmiibosGallery from "./components/AmiibosGallery";
import AmiibosSearch from "./components/AmiibosSearch/AmiibosSearch";
import NavComponent from "../../shared/components/NavComponent/NavComponent";
import './AmiibosPage.scss';
import '../../shared/styles/titles/TitlesStyle.scss';

let allAmiibos = [];

export default function AmiibosPage() {
  // PETICIÓN API CON FETCH EN JS NATIVO
  // useEffect(() => {

  //     fetch('https://www.amiiboapi.com/api/amiibo')
  //         .then(res => res.json())
  //         .then(res => console.log(res));
  // }, []) //array vacío. Para cuando se carga por primera vez el componente

  const [allAmiibos, setAmiibos] = useState([]);
  const [filteredAmiibos, setFilteredAmiibos] = useState([]);

  console.log('total', allAmiibos);
  console.log('filtered', filteredAmiibos);

  //PETICIÓN API CON AXIOS:
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACK_URL + "amiibo/").then((res) => {
      const amiibosLocal = res.data.amiibo;
      // allAmiibos = amiibosLocal;
      setFilteredAmiibos(amiibosLocal);
    });
  }, []);

  const filterAmiibos = (values) => {
    console.log(values);
    const filteredLocalAmiibos = [];

    for (const amiibo of allAmiibos) {
      if (amiibo.name.includes(values.name)) {
        filteredLocalAmiibos.push(amiibo);
      }
    }
    setFilteredAmiibos(filteredLocalAmiibos);

  };



  return (
    <div className="c-amiibosP">
      <p className="b-title__text">AmiibosPage</p>
      {/* <AmiibosSearch fnSubmit={filterAmiibos} /> */}
      <AmiibosGallery amiibos={filteredAmiibos} />
      <NavComponent/>
    </div>
  );
}
