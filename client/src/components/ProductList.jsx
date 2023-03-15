import '../stylesheets/ProductForm.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const ProductList = ({ senal }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/products`);
            setProductos(respuesta.data);
        }

        getProducts();
    }, [senal])

    const productoEliminado = (idProducto) => {
        setProductos(productos.filter( p => p._id !== idProducto));
    }

    return (
        <div className='container'>
            <h3>Lista de Productos</h3>
            <ul>
                {
                    productos.map((producto, index) => <li key={index}><Link to={`/${producto._id}`}>{producto.title}</Link><Link to={`/update/${producto._id}`} className="btn btn-info mb-2">Editar</Link> <DeleteButton idProducto={producto._id} productoEliminado={productoEliminado}>Eliminar</DeleteButton></li>)
                }
            </ul>
        </div>
    )
}

export default ProductList;