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
            <h1>Productos</h1>
            <div className="producto-contenedor">
                <Lista productos = {productos}/>
            </div>
        </section>
    )
};
