import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewProduct = () => {
    const [images, setImage] = useState("");
    const handleImage = e => {
        const image = e.target.files[0];
        console.log(image)
        const formData = new FormData();
        formData.append("image", image);
        const url = "https://api.imgbb.com/1/upload?key=fb58dd2c280601bbcd0dc45f6e9fc74d";
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.data.display_url) {
                    toast("Image upload successfull");
                    setImage(result.data.display_url);
                }
                else {
                    toast("Try again fatching problems");
                }
            })
    }
    const handelesubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const textarea = e.target.textarea.value;
        const revew = e.target.revew.value;
        const price = e.target.price.value;
        const title = e.target.title.value;
        const handleImage = e.target.fileName.value;
        console.log(name, textarea, revew, handleImage);
        fetch('http://localhost:5000/newproduct', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                title: title,
                description: textarea,
                quantity: revew,
                price: price,
                image: images,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast.success("add product successfully !!")
                    e.target.reset();
                }
            });
    }
    return (
        <div className='sm:w-80 lg:w-96' >
            <form
                onSubmit={handelesubmit}
                className=' mx-5 p-2 shadow rounded'>
                <p>Product Name</p>
                <input type="text" name='name' placeholder="product name" className="input input-bordered input-accent w-full max-w-xs" maxLength="20" required /> <br />
                <p>Product title</p>
                <input type="text" name='title' placeholder="product name" className="input input-bordered input-accent w-full max-w-xs" maxLength="120" required /> <br />
                <p><label htmlFor="w3review">Write a description:</label></p>
                <textarea id="w3review" className='w-50 p-2 rounded text-black ' name="textarea" placeholder='write a meaningful description ' rows="6" cols="40" maxLength="400" required /><br />
                <p> Quantity :</p>
                <input type="number" placeholder="select" className="input input-bordered input-accent w-full max-w-xs" min="500" max="2000" name='revew' required /><br />
                <p> Price :</p>
                <input type="number" placeholder="select" name="price" className="input input-bordered input-accent w-full max-w-xs" required /><br />
                <p>Product</p>

                <input onChange={handleImage}
                    type="file"
                    name='fileName' placeholder="image"
                    className="input  input-bordered input-accent py-1 w-full max-w-xs"
                    required /> <br />

                <button type='submit' className="btn btn-outline btn-success py-3 my-2 btn-center">Submit</button>
            </form>

        </div>
    );
};
export default NewProduct;