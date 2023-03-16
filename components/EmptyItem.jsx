import React from 'react';
import {BiErrorCircle} from 'react-icons/bi'

const EmptyItem = () => {
    return (
        <div className='text-center mt-5'>
            <BiErrorCircle className='text-secondary' style={{fontSize : 200, textAlign : 'center'}}/>
            <h2>Maaf, untuk saat ini tidak Ada barang untuk ditampilkan</h2>
            <h3 className='text-secondary'>Tunggu rilis berikutnya dari produk kami</h3>
        </div>
    )
}

export default EmptyItem