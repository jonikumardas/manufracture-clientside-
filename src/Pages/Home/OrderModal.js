import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const { name, balance, quantity } = order;
    const [user, loading, error] = useAuthState(auth);
    const [price, setPrice] = useState();
    const aquantity = parseFloat(balance);
    if (price === undefined) {
        const price = 100;
        setPrice(price);
    }
    const total = price * aquantity;
    const selectQuantity = e => {
        const Quantity = parseInt(e.target.value);
        setPrice(Quantity);

    }
    const handlesubmit = event => {
        event.preventDefault()
        const name = order.name;
        const client = event.target.client.value;
        const email = event.target.email.value;
        const clientquantity = event.target.tentacles.value;
        const address = event.target.adress.value;
        const phoneNumber = event.target.phone.value;
        fetch('http://localhost:5000/order', {
            method: 'POST',
            body: JSON.stringify({
                name: name, user: client, email: email, phone: phoneNumber, address: address, quantity: clientquantity, price: total

            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    toast.success("order success")
                    event.target.reset();
                }
            });
    }
    return (
        <div>
            <input type="checkbox" id="ordermodal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="ordermodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg pt-2 text-center">Order name:{name}</h3> <br />
                    <div className='text-2xl text-success text-center'>Total ammount:
                        {
                            price ? <span className='font-bold '> $ {`${aquantity}` * `${price}`}</span> : '$ 2049'
                        }

                    </div>

                    <form onSubmit={handlesubmit}>
                        <p className='text-1xl'>Client</p>
                        <input name='client' type="text" placeholder="Your name" className="input input-bordered input-success w-full max-w-xs" required />
                        <p className='text-1xl'>Email</p>
                        <input name='email' type="text" readOnly value={user.email} className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <label htmlFor="tentacles">Number of Quantity {quantity}: <br />
                        </label>
                        <input onChange={selectQuantity} type="number" id="tentacles" placeholder='must select more then 100' defaultValue="100" className="input input-bordered input-success w-full max-w-xs" name="tentacles"
                            min="100" max={quantity} required></input>
                        <p className='text-1xl'>Address </p>
                        <textarea name="adress" type="text" id="text area" cols="42" rows="4" required className='p-2'></textarea>
                        <p className='text-1xl'>Phone number</p>
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <button type='submit' className="btn btn-outline btn-success py-2 my-2 btn-center">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;