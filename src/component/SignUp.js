
function SignUp() {
    return (
        <>
            <div className="signup h-screen">
                <div className="container content-center h-full">
                    <div className="d-flex justify-content-center h-100 m">
                        <div className="card h-auto mb-auto mt-auto w-80">
                            <div className="card-header text-white">
                                <h3>Sign Up</h3>

                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group my-1 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Full Name" />

                                    </div>
                                    
                                   
                                    <div className="input-group form-group my-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email" />

                                    </div>

                                    <div className="input-group form-group my-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i class="fas fa-mobile"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Phone number" />

                                    </div>
                                    <div className="input-group form-group my-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" class="form-control" placeholder="Username" />
                                    </div>
                                    <div className="input-group form-group my-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" class="form-control" placeholder="password" />
                                    </div>

                                    <div className="input-group form-group my-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w-10"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="confirm-password" />
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="submit" value="Save" className="btn btn-primary float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp