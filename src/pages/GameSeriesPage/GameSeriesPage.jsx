import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./GameSeriesPage.scss"

export default function GameSeriesPage() {
    const [localGameSeries, setLocalGameSeries] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + "gameseries").then((res) => {
            // console.log(res);
            // setLocalGameSeries(res.data.amiibo);
            const filteredAmiibos = uniqueArray(res.data.amiibo, 'name');
            setLocalGameSeries(filteredAmiibos);

        });
    }, []);


    return (
        <div>
            <h1>Game Series Page</h1>
            <div className="row">
                {localGameSeries.map((gameSerie, i) => (
                    <div key={i} className="col-12 col-md-6  col-lg-4 c-title">
                        <p>{gameSerie.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
const uniqueArray = (array, key) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        ))
    )
};