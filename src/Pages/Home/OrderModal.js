import React from 'react';

const OrderModal = ({ order, setOrder }) => {
    console.log(order);
    const { name, price, quantity } = order;
    return (
        <div>
            <input type="checkbox" id="ordermodal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="ordermodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg py-2 text-center">Order Summary :{name}</h3> <br />
                    <form>
                        <p className='text-1xl'>Client</p>
                        <input type="text" placeholder="Your name" className="input input-bordered input-success w-full max-w-xs" />
                        <p className='text-1xl'>Email</p>
                        <input type="text" placeholder="email" className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <label for="tentacles">Number of Quantity {quantity}: <br />
                        </label>
                        <input type="number" id="tentacles" placeholder='must select more then 10' className="input input-bordered input-success w-full max-w-xs" name="tentacles"
                            min="10" max="100"></input>
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