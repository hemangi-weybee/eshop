import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className="product-card" onClick={(e) => !e.target.classList.contains('icon') && navigate(`/product/${data.id}`)}>
            {/* <div className="badge">Hot</div> */}
            <div className="product-tumb">
                <img src={data.images[0]} alt="" />
            </div>
            <div className="product-details">
                {/* <span className="product-catagory">{data.category.name}</span> */}
                <div className="product-name">{data.title}</div>
                {/* <div className="desc">{data.description}</div> */}
                <div className="product-bottom-details">
                    <div className="product-price">
                        {/* <small>${data.price + Math.floor(Math.random() * 20)}</small> */}
                        ${data.price}
                    </div>
                    <div className="product-links">
                        <span><i className="fa fa-heart icon" onClick={() => console.log('addToFvrt')}></i></span>
                        <span><i className="fa fa-shopping-cart icon" onClick={() => console.log('addToCart')}></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard