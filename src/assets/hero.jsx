import React from 'react'
import "../styles/styles.scss";
import lace_girl from '../img/img.jpg'
import { CiCircleCheck } from "react-icons/ci";
const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <h1 className='hero_title'>Мереживна накидка</h1>
            </div>
            <div className='lace_gir_block'>
                <img className='lace_girl' src={lace_girl} />
            </div>
            <div className='container'>
                <div className='container_block'>
                    <div className='hero_text'><CiCircleCheck className='hero_icon' />
                        <p>Якісний мереживний матеріал</p>
                    </div>
                    <div className='hero_text'><CiCircleCheck className='hero_icon' />
                        <p>Вирівнювання, приховування доліків</p>
                    </div>
                    <div className='hero_text'><CiCircleCheck className='hero_icon' />
                        <p> Акція: -50 на другу покупку</p>
                    </div>
                </div>
                <div className='price'><ul className='price_list'>
                    <li className='price_list_item'><span className='price_list_item_number'>15</span><br />годин</li>
                    <li className='price_list_item'><span className='price_list_item_number'>23</span><br />хвилин</li>
                    <li className='price_list_item'><span className='price_list_item_number'>15</span><br />секунд</li>
                </ul>
                    <div className='block_price'>
                        <p className='block_price_text'><span >Звичайна ціна:</span><br /><span className='block_price_text_through'>275грн</span> </p>
                        <p className='block_price_text'><span>Ціна за акцією: </span><br /><span className='block_price_text_selected'>249грн</span> </p>
                    </div>
                    <button className='price_action'>замовити зараз</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
