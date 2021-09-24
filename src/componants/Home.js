import React from 'react';

function Home(props) {
    console.warn('home', props.data)
    return (
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>{props.data.length}</span>
                <img src='cart.png' style={{width: "80px", position:'absolute', right:'1%', top:'1%'}} />
            </div>
            <h1>Home Componant</h1>
            <div className='cart-wrapper' style={{height:'100px', width:'300px', border:'1px solid #cccccc'}}>
                <div className='image-wrapper item'>
                    <img src='iphone.png' style={{width: "100px", height:'100px'}}/>
                </div>
                <div className='text-wrapper item'>
                    <span>I-phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:1000, name:'i-phone 11'})}  style={{backgroundColor:'red', border:'1px', borderRadius:'4PX', color:'#FFF', padding:'10PX'}}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;