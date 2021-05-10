import { ProductData } from '../ProductData';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { showRatings } from './Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function ListProduct() {

    const [listProduct, setListProducts] = useState([]);
    useEffect(async () => {
        const result = await axios.get('https://6090eb7c3847340017021f71.mockapi.io/mobile/products');
        setListProducts(result.data)
    }, []);

    const [strSearch, setStrSearch] = useState('');


    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        setStrSearch(event.target.value)
    }

    const filtered = listProduct.filter(str => str.name.toLowerCase().includes(strSearch));
    return (
        <>
            <Header />
            <div className="container h-full">
                <div className="row">
                    <div className="col-3 border-2 text-center">
                        <h4 className="">Search</h4>
                        <form onSubmit={event => handleSubmit(event)}>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" value={strSearch} placeholder="Type here" aria-describedby="button-addon2" onChange={handleChange} />
                                {/*<button class="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>*/}
                            </div>
                        </form>

                        <div class="left" className="w-full bg-gray-300 rounded-lg">
                            <ul>
                                <li class="mobile"><i class="fas fa-mobile-alt"></i> Mobile</li>
                                <ul class="mobile-son">
                                    <li className="no-underline cursor-pointer" onClick={() => setStrSearch('iphone')}>Apple</li>
                                    <li className="no-underline cursor-pointer" onClick={() => setStrSearch('samsung')}>SamSung</li>
                                    <li className="no-underline cursor-pointer" onClick={() => setStrSearch('xiaomi')}>Xiaomi</li>
                                    <li className="no-underline cursor-pointer" onClick={() => setStrSearch('asus')}>Asus</li>
                                </ul>

                            </ul>
                        </div>
                    </div>
                    <div className="col-9 grid grid-row-4 grid-cols-6 gap-3">
                        {filtered.map((product, index) => {
                            return (
                                <div className="card" key={product.id}>
                                    <img src={product.Imagecover} className="card-img-top h-full" alt="anh san pham" />

                                    {/*{product.image.map((anh, index) => {*/}
                                    {/*    return (*/}
                                    {/*        <div> {anh.image}</div>*/}
                                    {/*        )*/}
                                    {/*})};*/}

                                    <div className="card-body">
                                        <h5 class="card-title text-xs"><Link to={`/detail/${product.id}`}>{product.name}</Link></h5>
                                        <ul className="rating p-0">
                                            <li>
                                                {showRatings(product.rating)}
                                            </li>
                                        </ul>
                                        <p class="card-text">Price: ${product.Price}</p>
                                        <a href="#" class="btn btn-primary">Add to cart</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ListProduct