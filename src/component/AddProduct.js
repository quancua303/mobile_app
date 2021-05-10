import React from 'react'
import CategoryData from '../Data/Category_Data';

function AddProduct() {

    
    return (
        <>
            <div className="container h-screen">
                <form className="mx-auto text-center w-2/3">
                    <h2>Add new Product</h2>
                    <div class="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-signature"></i></span>
                        <input type="text" className="form-control" placeholder="Product's name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="fas fa-dollar-sign"></i></span>
                        <input type="text" className="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i class="fas fa-building"></i></span>
                        <label class="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                            Category
                        </label>
                        <select className="border-1">
                            {CategoryData.map(cate => {
                                return (
                                    <option key={cate.id} value={cate.id}>{cate.name}</option>
                                    )
                            })}
                            
                        </select>

                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text w-10" id="basic-addon1"><i className="far fa-images"></i></span>
                        <input type="file" class="form-control" aria-describedby="basic-addon1" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary login_btn" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct