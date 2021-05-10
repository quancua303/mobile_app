import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import CategoryData from '../Data/Category_Data';
import api from './../productAPI/callAPI';
import Select from 'react-select';
import Header from './Header';

function Admin() {
    const [productList, setProductList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);

    //getAllProducts
    const getProduct = async () => {
        const response = await api.get("/products");
        return response.data;
    };


    useEffect(() => {
        const getAllProducts = async () => {
            const allProducts = await getProduct();
            if (allProducts) setProductList(allProducts);
        };

        getAllProducts();
    }, []);

    //deleteProduct
    const deleteProduct = async (idProduct) => {
        alert(idProduct);
        await api.delete(`/products/${idProduct}`);
        const newList = productList.filter((product) => {
            return product.id !== idProduct;
        });

        setProductList(newList);
    };


    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(0);

    //UpdateProductBtn
    const editProductbtn = (idProduct) => {
        if (view === false) {
            setView(true)
        }
        {
            productList.filter(product => product.id === idProduct).map(filterProduct => (
                setName(filterProduct.name),
                setPrice(filterProduct.Price),
                setId(filterProduct.id),
                setCategory(filterProduct.Category_Id)
            ))
        }
    };

    //updateProduct
    const updateProduct = async (event) => {
        event.preventDefault();
        const request = {
            name: event.target.Name.value,
            Price: event.target.Price.value,
            Category_Id: category,
        }
        const response = await api.put(`/products/${id}`, request);
        setProductList(productList.map((product) => {
            return product.id === id ? { ...response.data } : product;
        }));
        setView(false);
    }



    //addProduct
    const addProduct = async (event) => {
        event.preventDefault();
        const request = {
            name: event.target.productName.value,
            Price: event.target.price.value,
            Category_Id: category,
        }
        const response = await api.post("/products", request);
        const newList = productList.concat(response.data)
        setProductList(newList);
        setShow(false);
    }


    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //get current product
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

    const addProductbutton = () => {
        if (show === false) {
            setShow(true)
        } else setShow(false)
    }


    //getSetCategory
    const [category, setCategory] = useState(CategoryData.value)
    const ddlHandler = (e) => {
        setCategory(e.value);
    }


    return (
        <>
            <Header/>
            <div className="container-xl h-screen mt-3">
                <div classNameName="table-responsive">
                    <div class="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>Product <b>Details</b></h2></div>
                                <div className="col-sm-4">
                                    <div className="search-box row">
                                        <div className="col-11"><input type="text" className="form-control" placeholder="Search by name" /></div>
                                        <div className="col-1 leading-10 border-1 rounded-xl cursor-pointer"><i class="fas fa-search"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><a onClick={addProductbutton} className="border-1 m-2 px-1 rounded-lg cursor-pointer no-underline">Add new product</a></div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category_Id</th>
                                    <th>Rating</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((product, index) => {
                                    return (
                                        <tr>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.Price}</td>
                                            <td>{product.Category_Id}</td>
                                            <td>{product.rating}</td>
                                            <td>
                                                <button onClick={() => editProductbtn(product.id)} className="edit mx-1" title="Edit" data-toggle="tooltip"><i class="fas fa-edit"></i></button>
                                                <button onClick={() => deleteProduct(product.id)} className="delete mx-1"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                        <Pagination productsPerPage={productsPerPage} totalProducts={productList.length} paginate={paginate} />

                        {show ?
                            <form className="mx-auto text-center w-2/3" onSubmit={addProduct} >
                                <h2>Add new Product</h2>
                                <div class="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-signature"></i></span>
                                    <input type="text" className="form-control" placeholder="Product's name" name="productName" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                                    <input type="text" className="form-control" placeholder="Price" name="price" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i class="fas fa-building"></i></span>
                                    <label class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </label>
                                    {/*<select className="border-1">*/}
                                    {/*    {CategoryData.map(cate => {*/}
                                    {/*        return (*/}
                                    {/*            <option key={cate.id} value={cate.id}>{cate.name}</option>*/}
                                    {/*        )*/}
                                    {/*    })}*/}

                                    {/*</select>*/}
                                    <Select className="w-32" options={CategoryData} onChange={ddlHandler} />

                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="far fa-images"></i></span>
                                    <input type="file" class="form-control" aria-describedby="basic-addon1" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Save" className="btn btn-primary login_btn" />
                                </div>
                            </form>
                            : null
                        }

                        {view ?
                            <form className="mx-auto text-center w-2/3" onSubmit={updateProduct}>
                                <h2>Update Product</h2>
                                <div class="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-signature"></i></span>
                                    <input type="text" className="form-control" placeholder="Product's name" value={name} name="Name" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                                    <input type="text" className="form-control" placeholder="Price" value={price} name="Price" onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i class="fas fa-building"></i></span>
                                    <label class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </label>
                                    <Select className="w-32" options={CategoryData} onChange={ddlHandler} />

                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text w-10" id="basic-addon1"><i className="far fa-images"></i></span>
                                    <input type="file" class="form-control" aria-describedby="basic-addon1" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Save" className="btn btn-primary login_btn" />
                                </div>
                            </form>
                            : null
                        }

                    </div>
                </div>
            </div>
        </>
    )
}



export default Admin
