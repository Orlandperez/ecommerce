import { useEffect, useState } from "react";
import data from "../../../back/dataBack.json";
import anuncio from "../../../assets/anuncio.png";
import { Lista } from "./Lista.jsx";

import "./Productos.css";

export const Productos = () => {
  
    const [productos, setProductos] = useState([]);
    const [filtro, setFiltro] = useState(""); 


    const pedirProductos = () => {
        return new Promise((resolve) => {
            resolve(data.bebidas);
        });
    };


    useEffect(() => {
        pedirProductos().then((res) => {
            setProductos(res);
        });
    }, []);

   
    const filtrarProductos = () => {
        if (filtro === "") return productos;

        switch (filtro) {
            case "precio-desc":
                return [...productos].sort((a, b) => b.precio - a.precio);
            case "precio-asc":
                return [...productos].sort((a, b) => a.precio - b.precio);
            case "0":
            case "15":
            case "50":
            case "100":
                return productos.filter((producto) => producto.alcohol === parseInt(filtro));
            default:
                return productos;
        }
    };


    const productosFiltrados = filtrarProductos();

    return (
        <section className="producto">
            <img className="anuncio" src={anuncio} alt="anuncio" />
            <div className="filtro">
                <h1>Productos</h1>
                <div>
                    <label>Filtro de bebidas: </label>
                    <select onChange={(e) => setFiltro(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="precio-desc">Precio de: Mayor a Menor</option>
                        <option value="precio-asc">Precio de: Menor a Mayor</option>
                        <option value="0">Alcohol: 0%</option>
                        <option value="15">Alcohol: 15%</option>
                        <option value="50">Alcohol: 50%</option>
                        <option value="100">Alcohol: 100%</option>
                    </select>
                </div>
            </div>
            
            <div className="producto-contenedor">
                <Lista productos={productosFiltrados} />
            </div>
        </section>
    );
};
