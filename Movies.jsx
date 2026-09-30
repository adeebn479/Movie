import React, { useState } from "react";

export const Movies = () => {

    const [alldata, setAllData] = useState([]);

    const [moviedata, setMoviedata] = useState({
        movie: "",
        genre: "",
        isCom: false
    })

    const [tempdata, setTempdata] = useState([])

    const handlechange = (e) => {

        let { name, value } = e.target;

        setMoviedata({
            ...moviedata,
            [name]: value
        })
    }

    const onhandlesubmit = () => {

        let newdata = [...alldata, moviedata];

        setAllData(newdata)
        setTempdata(newdata)

        setMoviedata({
            movie: "",
            genre: "",
            isCom: false
        })
    }

    const handlestatus = (ind) => {
        let res = [...alldata]
        res[ind].isCom = !res[ind].isCom
        setAllData(res)
        setTempdata(res)
    }

    const onhandlefilter = (data) => {
        let res = []

        if (data == "Favorite") {
            res = tempdata.filter(val => val.isCom == true)
        } else if (data == "Not") {
            res = tempdata.filter(val => val.isCom == false)
        } else {
            return setAllData(tempdata)
        }
        setAllData(res)
    }


    return (
        <div className="all">
            <input className="movie-genre-ip" type="text" name="movie" value={moviedata.movie} onChange={handlechange} placeholder="Enter movie here"/><br /><br />
            <input className="movie-genre-ip" type="text" name="genre" value={moviedata.genre} onChange={handlechange} placeholder="Enter genre here"/><br /><br />
            <button id="addmoviebtn" onClick={onhandlesubmit}>Add Movie</button><br /><br />

            <button className="fiterbtn" onClick={() => onhandlefilter("All")}>All</button>
            <button className="fiterbtn" onClick={() => onhandlefilter("Favorite")}>Favorite</button>
            <button className="fiterbtn" onClick={() => onhandlefilter("Not")}>Not Favorite</button><br /><br />

            {alldata.map((data, index) => (
                <div key={index} className="movies">
                        <span>{data.movie}</span>--
                        <span>{data.genre}</span>--
                        {data.isCom ? <button onClick={() => handlestatus(index)}>Favorite</button> : <button onClick={() => handlestatus(index)}>Not Favorite</button>}
                </div>
            ))}
        </div>
    )
}
