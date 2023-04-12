import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import Logo from "public/logo.png"

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart} = useStateContext();
  const [show, setShow] = React.useState(false)

  function handleShow() {
    setShow(!show)
  }

  function handleToggle() {
    setShow(!show)
  }

  return (
    <>
    <nav class="navbar fixed-top navbar-expand-lg bg-white my-0">
      <div class='container-fluid navbar-container-fluid py-0 my-0'>
      <div>
      <a className="navbar-brand"><Link href="/"><Image className='pt-2' src={Logo} width={85} height={53}/></Link></a>
      </div>
      <div className='cart-responsive'>
            <button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
                  <AiOutlineShoppingCart />
            </button>
                {showCart && <Cart />}
      </div>
        <button onClick={handleToggle} class="navbar-toggler fw-bold pb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div className={show ? "collapse navbar-collapse justify-content-center show" : "collapse navbar-collapse justify-content-center"} id="navbarNav">
      <div>
        <ul class="navbar-nav fs-5">
          <li class="nav-item nav-routing">
            <Link href="/">
              <a class="nav-link" onClick={handleShow}>Home</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/shop"> 
              <a class="nav-link" onClick={handleShow}>Shop</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/terbaru">
              <a class="nav-link" onClick={handleShow}>Terbaru</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/promo">
              <a class="nav-link" onClick={handleShow}>Promo</a>
            </Link>
          </li>
          <li class="nav-item nav-routing">
            <Link href="/bantuan">
                <a class="nav-link fs-5 text-secondary">Bantuan</a>
            </Link>
          </li>
        </ul>
      </div>

            </div>
          </div>
      </nav>
    </>

  )
}

export default Navbar