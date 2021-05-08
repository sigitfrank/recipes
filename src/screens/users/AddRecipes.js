import React, { useState } from 'react'
import '../../css/users/add-recipes.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
function AddRecipes() {
    const [imageBase64, setImageBase64] = useState([])

    const getBase64 = file => {
        let baseURL = "", reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            setImageBase64(e.target.result)
        }
    }

    const imageGallery = (files) => {
        const { meta, fileWithMeta } = files
        getBase64(fileWithMeta.file)
        console.log(imageBase64)
        return <>
            <img onClick={() => fileWithMeta.remove()} src={meta.previewUrl} alt="preview-recipe-img" className="img-fluid preview-recipe-img" />
        </>
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (<form className="add-recipes" onSubmit={handleFormSubmit}>
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
                            <div className="primary-gallery">
                                <Dropzone
                                    accept="image/*"
                                    PreviewComponent={imageGallery}
                                    maxFiles={1}
                                    inputContent="Drop main image"
                                />
                            </div>
                            <div className="secondary-gallery">
                                <Dropzone
                                    accept="image/*"
                                    PreviewComponent={imageGallery}
                                    maxFiles={8}
                                    inputContent="Drop additional images"
                                    inputWithFilesContent={files => `${8 - files.length} more left`}
                                />
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
                    <button type="button" className="btn add-more">Add more</button>
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
                    <button type="button" className="btn add-more">Add more</button>
                </section>
            </div>
        </div>
    </form >)
}

export default AddRecipes
