import React, { useState, useEffect } from 'react';
import { ProductData } from '../ProductData';
import axios from 'axios';
import Header from './Header';


function Detail({ match }) {

    const [product, setProduct] = useState([]);

    useEffect(async () => {
        const result = await axios.get(`https://6090eb7c3847340017021f71.mockapi.io/mobile/products/${match.params.id}`,
        );
        setProduct(result.data)
    });

    const [selectedImage, setSelectedImage] = useState(/*listProduct[(match.params.id)].Imagecover*/);
    const [comment, setComment] = useState('');
    const [account_name, setAccountName] = useState('guest');


    console.log('comment', comment)
    function handleSubmit(event) {
        ProductData.Comment.push({ comment })
        event.preventDefault()
    }

    function handleChange(event) {
        const value = event.target.value;
        setComment(value)
    }

    return (
        <>
            <Header />
            <div class="container h-screen">
                {/*{listProduct.filter(product => product.id == match.params.id).map(filterProduct => (*/}
                    <div className="row mt-3">
                        <div className="col-3">
                        <img className="showImage w-64 border-1 p-2 rounded-md" src={product.Imagecover} alt="" />

                            <div className="container">
                                <div className="row">
                                    {/*{ProductData.filter(product => product.id = 2).map(filterProduct =>(*/}
                                    {/*<div className="col flex mt-4 cursor-pointer ...">*/}
                                    {/*    {filterProduct.image.map((anh, index) => {*/}
                                    {/*        return (*/}
                                    {/*            <div className="border-1 rounded-md p-1 mx-1"><img src={anh.image} alt="" onClick={() => setSelectedImage(anh.image)} /> </div>*/}
                                    {/*        )*/}
                                    {/*    })}*/}
                                    {/*    */}{/*<img className='image' src={filterProduct.image} alt="nat" onClick={() => setSelectedImage(filterProduct.image)} />*/}

                                    {/*</div>*/}
                                    {/*))}*/}
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                        <p>Name: {product.name}</p>
                        <p>Price: ${product.Price}</p>
                        <p>Rating: {showRatings(product.rating)}</p>
                            <div>
                                <p>Comment</p>
                                {/*<div>*/}
                                {/*    {filterProduct.Comment.map((a, index) => {*/}
                                {/*        return (*/}
                                {/*            <div>{a.account_name} : {a.comment} </div>*/}
                                {/*        )*/}
                                {/*    })}*/}
                                {/*</div>*/}
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Enter your comment here" value={comment} onChange={handleChange} />
                                            <button className="btn btn-outline-secondary" type="submit">Save</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                {/*))}*/}
            </div>

        </>
    )
}
function showRatings(rating) {
    var result = [];
    for (var i = 0; i < rating; i++) {
        result.push(<i class="fa fa-star text-yellow-300"></i>);
    }
    for (var j = 0; j < (5 - rating); j++) {
        result.push(<i class="fa fa-star-o text-yellow-300"></i>);
    }
    return result;
}

export default Detail