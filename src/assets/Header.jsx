import React from 'react'
import { GiRibbonMedal } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import "../styles/styles.scss";
const Header = () => {
    return (
        <header className='header_container'>
            <div className='header_container_block'>
                <GiRibbonMedal className='header_container_block_icon' />
                <h2 className='header_container_block_text'>Новинка <br /><span className='header_container_block_text_small'> 2022року</span></h2>
            </div>
            <div className='header_container_block'>
                <GiPriceTag className='header_container_block_icon' />
                <h2 className='header_container_block_text'>Оплата<br /><span className='header_container_block_text_small'>після перевірки</span></h2>
            </div>
            <div className='header_container_block'>
                <GiWorld className='header_container_block_icon' />
                <h2 className='header_container_block_text'>Швидка<br /><span className='header_container_block_text_small'>доставка</span></h2>
            </div>
        </header>
    )
}

export default Header
