import React from 'react'
import { useState } from 'react';
import "../Header/index.css"
function Header() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <>
            <li className="nav-item" ><Link to="/" className="nav-link active">Products</Link></li>
            <li className="nav-item"><Link to="/carts" className="nav-link">Carts :</Link></li>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Product</a>
                    <button class="btn btn-outline-success Addcart" type="submit">AddToCart</button>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                        </div>
                        <input type="text" class="form-control1" value={num} onChange={handleChange} />
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                        </div>
                    </div>
                </div>
            </nav>
            <img src='https://wallpaperaccess.com/full/521111.jpg' alt='' className='images1' />
            <h1 className='images2'>AddToProduct</h1>
        </>
    )
}

export default Header
