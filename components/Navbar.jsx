import React from 'react';
import Link from 'next/link';
import { AiOutlineCalculator } from 'react-icons/ai'
import Image from 'next/image'
import Logo from "public/logo.png"

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
    <nav class="navbar fixed-top navbar-expand-lg bg-white py-0 my-0 mx-0 px-0">
      <div class='container-fluid py-0 my-0'>
      <div>
      <a className="navbar-brand pt-5"><Link href="/"><Image src={Logo} width={85} height={53}/></Link></a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="w-100" style={{marginTop : -7}}>
      <div class="collapse navbar-collapse justify-content-end" id='navbarNav'>
      <ul class="navbar-nav">
          <li class="nav-item language d-flex">
            <a class="nav-link me-2" href="#">Bantuan |</a>
            <a class="nav-link" href="#">English </a>
            <a class="nav-link mx-2">|</a>
            <a class="nav-link" href="#"> Bahasa Indonesia</a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <div style={{marginTop : -15}}>
        <ul class="navbar-nav fs-5">
          <li class="nav-item nav-routing">
            <Link href="/">
              <a class="nav-link" href="#">Home</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/shop"> 
              <a class="nav-link">Shop</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/terbaru">
              <a class="nav-link" href="#">Terbaru</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/promo">
              <a class="nav-link" href="#">Promo</a>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{marginTop: -20}} class="me-4 text-end">
      <button type="button" class="cart-icon fs-4" onClick={() => setShowCart(true)}>
            <AiOutlineCalculator />
            <span className="cart-item-qty">{totalQuantities}</span>
        </button>

          {showCart && <Cart />}
      </div>
      </div>
      </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar