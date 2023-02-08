/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
// import { ShimmerThumbnail } from 'react-shimmer-effects';
import { useGetProductDetailQuery } from '../redux/api/productDetailApi';

const ProductDetail = () => {
  const params = useParams();
  const { isLoading, isError, data } = useGetProductDetailQuery(params.id);
  const [activeImg, setActiveImg] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className='container spad'>
      {
        isLoading ? <Loader />
          // (<div className="product-detail-loader">
          //   <ShimmerThumbnail height={500} className="m-0" rounded />
          // </div>)
          : isError ? <div></div>
            : (
              <div className="card-wrapper">
                <div className="card">
                  {/* <!-- card left --> */}
                  <div className="product-imgs">
                    <div className="img-display">
                      <div className="img-showcase">
                        <img src={data.images[activeImg]} alt={`${data.title} image"`} />
                      </div>
                    </div>
                    <div className="img-select">
                      {
                        data.images.map((img, index) =>
                          <div className="img-item" onClick={() => setActiveImg(index)} key={index}>
                            <img src={img} alt={`${data.title} image"`} />
                          </div>)
                      }

                    </div>
                  </div>
                  {/* <!-- card right --> */}
                  <div className="product-content">
                    <h2 className="product-title">{data.title}</h2>
                    <a href="#" className="product-link">{data.category.name}</a>
                    {/* <div className="product-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>4.7(21)</span>
                    </div> */}

                    <div className="product-detail">
                      <div className="detail-heading">about this item: </div>
                      <div className='description'>{data.description}</div>
                      {/* <ul>
                        <li>Color: <span>Black</span></li>
                        <li>Available: <span>in stock</span></li>
                        <li>Category: <span>Shoes</span></li>
                        <li>Shipping Area: <span>All over the world</span></li>
                        <li>Shipping Fee: <span>Free</span></li>
                      </ul> */}
                    </div>

                    <div className="product-price">
                      {/* <p className="last-price">Old Price: <span>$257.00</span></p> */}
                      <p className="new-price">
                        {/* New Price: */}
                        <span>${data.price}</span>
                      </p>
                    </div>



                    <div className="purchase-info">
                      <input type="number" min="0" defaultValue="1" />
                      <button type="button" className="btn">
                        Add to Cart <i className="fas fa-shopping-cart"></i>
                      </button>
                      {/* <button type="button" className="btn">Compare</button> */}
                    </div>

                    {/* <div className="social-links">
                      <p>Share At: </p>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            )
      }
    </div>
  )
}

export default ProductDetail