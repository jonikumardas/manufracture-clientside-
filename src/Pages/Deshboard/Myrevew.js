import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Myrevew = () => {
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
                if (result) {
                    toast("Data is success");
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
        const handleImage = e.target.fileName.value;
        console.log(name, textarea, revew, handleImage);
        fetch('https://ancient-scrubland-61244.herokuapp.com/review', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                textarea: textarea,
                revew: revew,
                image: images
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast.success("review success !!")
                    e.target.reset();
                }
            });
    }
    return (
        <div className='sm:w-80 lg:w-96' >
            <form
                onSubmit={handelesubmit}
                className=' mx-5 p-2 shadow rounded'>
                <p>Your name:</p>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered input-accent w-full max-w-xs" maxLength="20" required /> <br />
                <p><label htmlFor="w3review">Write you review:</label></p>
                <textarea id="w3review" className='w-50 p-2 rounded' name="textarea" rows="4" cols="40" maxLength="100" required /><br />
                <p> Select review:</p>
                <input type="number" placeholder="select" className="input input-bordered input-accent w-full max-w-xs" min="1" max="5" name='revew' /><br />
                <p>Image :</p>

                <input onChange={handleImage}
                    type="file"
                    name='fileName' placeholder="image"
                    className="input  input-bordered input-accent py-1 w-full max-w-xs" maxLength="20"
                    required /> <br />

                <button type='submit' className="btn btn-outline btn-success py-3 my-2 btn-center">Submit</button>
            </form>

        </div>
    );
};

export default Myrevew;