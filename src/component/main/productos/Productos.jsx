import { useEffect, useState } from "react"
import data from "../../../back/dataBack.json"
import anuncio from "../../../assets/anuncio.png"
import {Lista} from "./Lista.jsx";

import "./Productos.css"

export const Productos = () => {

    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve) => {
            resolve(data.bebidas)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return (
        <section className="producto">
            <img className="anuncio" src={anuncio} alt="anuncio" />
            <div className="filtro">
                <h1>Productos</h1>
                <div>
                    <label>Filtro de bebidas: </label>
                    <select>
                        <option value="">Precio de: Mayor a Menor</option>
                        <option value="">Precio de: Menor a Mayor</option>
                        <option value="">Alcohol: 0%</option>
                        <option value="">Alcohol: 15%</option>
                        <option value="">Alcohol: 50%</option>
                        <option value="">Alcohol: 100%</option>
                    </select>
                </div>
            </div>
            
            <div className="producto-contenedor">
                <Lista productos = {productos}/>
            </div>
        </section>
    )
};
