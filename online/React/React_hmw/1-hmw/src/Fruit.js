import React from 'react'
import './fruit.css'
import banana from './assets/banana.jpg'

function Fruit(props){
    return(
        <div className='main'>
            <div className='rasm'>
                <img src={props.d.img} width="100%" height="100%"></img>
            </div>
            <div className='details'>
                <div className='top'>
                    <h1>{props.d.title}</h1>
                    <button className='button'>Add</button>
                </div>
                <div className='bottom'>
                    <div className='data'>
                        <p className='title'>UOM</p>
                        <p className='value'>{props.d.uom}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Pack Size</p>
                        <p className='value'>{props.d.size}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Per Unit</p>
                        <p className='value'>{props.d.unit}</p>
                    </div>
                    <div className='data'>
                        <p className='title'>Total</p>
                        <p className='value'>{props.d.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fruit