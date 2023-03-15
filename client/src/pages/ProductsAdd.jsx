import axios from 'axios';
import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductsAdd = () => {



    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const initialValue = {
        title: '',
        price: '',
        description: ''
    }

    const agregarProducto = (values, { resetForm }) => {
        console.log(values);
        axios.post('http://localhost:8000/api/products', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setFormularioEnviado(true);
        resetForm();
        setTimeout(() => {
            setFormularioEnviado(false)
        }, 5000);
    };

    return (
        <>
            <ProductForm initialValue={initialValue} setForm={agregarProducto} formularioEnviado={formularioEnviado} actionText='Create' />
            <hr />
            <ProductList senal={formularioEnviado} />
        </>
    )
}
export default ProductsAdd;
