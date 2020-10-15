import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import AmiiboItem from '../../../shared/components/AmiiboItem/AmiiboItem';
import '../../../shared/styles/titles/TitlesStyle.scss';
import NavComponent from '../../../shared/components/NavComponent/NavComponent';
import './AmiibosDetailPage.scss';

export default function AmiibosDetailPage(){

    const tail = useParams().tail;
    const [amiibo, setAmiibo] = useState({});


    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'amiibo?tail=' + tail).then((res) => {
            const amiibo = res.data.amiibo[0]
            setAmiibo(amiibo);
        });
    }, []);

    return(
        <div className="c-detail">
            <h1 className="b-title__text">Amiibo Detail</h1>
            <AmiiboItem amiibo={amiibo}/>
            <NavComponent/>
        </div>
    )

}