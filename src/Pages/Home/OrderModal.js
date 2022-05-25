import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const { name, balance, quantity } = order;
    const [user, loading, error] = useAuthState(auth);
    const [price, setPrice] = useState();
    const tquantity = parseFloat(balance);
    const totalamount = e => {
        const amount = parseInt(e.target.value);
        setPrice(amount);

    }

    return (
        <div>
            <input type="checkbox" id="ordermodal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="ordermodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg pt-2 text-center">Order name:{name}</h3> <br />
                    <div className='text-2xl text-success text-center text-center'>Total ammount:
                        <span className='font-bold '> $ {`${tquantity}` * `${price}`}</span>
                    </div>

                    <form>
                        <p className='text-1xl'>Client</p>
                        <input type="text" placeholder="Your name" className="input input-bordered input-success w-full max-w-xs" />
                        <p className='text-1xl'>Email</p>
                        <input type="text" readOnly placeholder={user.email} className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <label for="tentacles">Number of Quantity {quantity}: <br />
                        </label>
                        <input onClick={totalamount} type="number" id="tentacles" placeholder='must select more then 100' className="input input-bordered input-success w-full max-w-xs" name="tentacles"
                            min="100" max={quantity}></input>
                        <p className='text-1xl'>Address </p>
                        <textarea name="text" id="text area" cols="42" rows="4"></textarea>
                        <p className='text-1xl'>Phone number</p>
                        <input type="text" placeholder="phone number" className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <button type='submit' className="btn btn-outline btn-success py-2 my-2 btn-center">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;