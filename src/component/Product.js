import { ProductData } from '../ProductData';
import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import Pagination from './Pagination';
import axios from 'axios'

const Product = ({ setcate }) => {
    console.log(setcate)
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    const [listProduct, setListProducts] = useState([]);
    useEffect(async () => {
        const result = await axios.get('https://6090eb7c3847340017021f71.mockapi.io/mobile/products');
        setListProducts(result.data)
    }, []);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //get current product
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    //const [category, setCategory] = useState(1);
    const product = listProduct.filter(product => product.Category_Id == setcate);

    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    



    return (
        <div className="Products">

            <div className="container" >
                <p className="text-4xl" >
                    Mobile Phone
                </p>
            </div>
            <div className="container">
                <div class="row">
                    {currentProducts.map((productFilter, index) => {
                        return (
                            <div className="col-sm" >
                                <div className="card" key={productFilter.id}>
                                    <img src={productFilter.Imagecover} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 class="card-title"><Link to={`/detail/${productFilter.id}`}>{productFilter.name}</Link></h5>
                                        <ul className="rating">
                                            <li>
                                                {showRatings(productFilter.rating)}

                                            </li>
                                        </ul>
                                        <p class="card-text">Price: ${productFilter.Price}</p>
                                        <a href="#" class="btn btn-primary">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                <br />

            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate} />
        </div>
    );
};
export function showRatings(rating) {
    var result = [];
    for (var i = 0; i < rating; i++) {
        result.push(<i class="fa fa-star text-yellow-300"></i>);
    }
    for (var j = 0; j < (5 - rating); j++) {
        result.push(<i class="fa fa-star-o text-yellow-300"></i>);
    }
    return result;
}

export default Product

