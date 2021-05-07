import React from 'react'
import '../../css/users/add-recipes.css'
function AddRecipes() {
    return (<form className="add-recipes">
        {/* Header */}
        <div className="container-fluid">
            <div className="container">
                <section className="row">
                    <div className="add-recipes-title">
                        <h1>Write your recipes</h1>
                        <div className="line"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="input-gallery">
                                <div className="main-image">
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="image-gallery">
                                    <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/2.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/3.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/4.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/1.png" alt="blog-list" className="img-fluid" />
                                    {/* <img src="/assets/blog/blog-lists/2.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/3.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/3.png" alt="blog-list" className="img-fluid" />
                                    <img src="/assets/blog/blog-lists/3.png" alt="blog-list" className="img-fluid" /> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="ex: Nasi Goreng Tenis" />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder=" Nasi goreng tenis adalah resep turun temurun dari keluarga kelurahan dan
                                    memiliki cita rasa yang unik. Kebanyakan orang ancur bilang ini memiliki rasa sip,
                                    tapi lebih sip lagi kalau tidak usah dimasak.">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        {/* Detail-recipes */}
        <div className="container-fluid detail-recipes">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Detail Recipe</h2>
                    <div className="line"></div>
                    <div className="form-group recipe-categories">
                        <input type="text" className="form-control" placeholder="ex: Healthy, Lunch, Fish" />
                    </div>
                    <div className="form-group recipe-cook-time">
                        <select name="" id="" className="form-control">
                            <option value="">Cook Time</option>
                            <option value="5-15">5-15 Minutes</option>
                            <option value="15-30">15-30 Minutes</option>
                            <option value="30"> &gt; 30 Minutes</option>
                        </select>
                    </div>
                    <div className="form-group recipe-serve-plate">
                        <select name="" id="" className="form-control">
                            <option value="">Serve Plate(s)</option>
                            <option value="1-2">1-2</option>
                            <option value="3-5">3-5</option>
                            <option value="5"> &gt; 5</option>
                        </select>
                    </div>
                </section>
            </div>
        </div>

        {/* Ingredients */}
        <div className="container-fluid ingredients">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Ingredients</h2>
                    <div className="line"></div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="ex: Onion" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="ex: Olive Oil" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="ex: Fresh Meat" />
                    </div>
                    <button type="button" class="btn add-more">Add more</button>
                </section>
            </div>
        </div>

        <div className="container-fluid steps">
            <div className="container">
                <section className="row">
                    <h2 className="mt-3">Steps</h2>
                    <div className="line"></div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Make sure you are not normal people" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="After that, kick out normal people from your home or neighborhood" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Make sure those normal people wouldnt get a food, degree or something good for their life. Let them be a lone wolf." />
                    </div>
                    <button type="button" class="btn add-more">Add more</button>
                </section>
            </div>
        </div>
    </form>)
}

export default AddRecipes
