import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#36ab3f] text-white p-10'>
        <div className='md:flex justify-between'>
            <div>
                <h2 className='text-2xl font-bold'>Join Our Newsletter</h2>
                <p className='text-xs'>And Get 20% OFF your First Order</p>
            </div>
            <div>
                <form>
                    <fieldset className="form-control w-80">
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="input input-bordered join-item" />
                            <button className="btn bg-[#36ab3f] join-item text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className='divide-solid py-8'>
            <hr />
        </div>
        <div className='md:flex justify-between'>
            <div className='flex gap-5'>
                <p>Shop</p>
                <p>Reviews</p>
                <p>Faq</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>E-Tutor</h2>
            </div>
            <div className='flex gap-5'>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
            </div>
        </div>
    </div>
    );
};

export default Footer;