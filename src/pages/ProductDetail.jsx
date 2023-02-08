import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetProductDetailQuery } from '../redux/api/productDetailApi';

const ProductDetail = () => {
  const params = useParams();
  const { isLoading, isError, data } = useGetProductDetailQuery(params.id);
  const [activeImg, setActiveImg] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="container spad">
      {isLoading ? (
        <Loader detail />
      ) : isError || data.length === 0 ? (
        <div className="error"> No data found </div>
      ) : (
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img src={data.images[activeImg]} alt={`${data.title} image"`} />
                </div>
              </div>
              <div className="img-select">
                {data.images.map((img, index) => (
                  <div className="img-item" onClick={() => setActiveImg(index)} key={index}>
                    <img src={img} alt={`${data.title} image"`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title">{data.title}</h2>
              <a href="#" className="product-link">
                {data.category.name}
              </a>

              <div className="product-detail">
                <div className="detail-heading">about this item: </div>
                <div className="description">{data.description}</div>
              </div>

              <div className="product-price">
                <p className="new-price">
                  <span>${data.price}</span>
                </p>
              </div>

              <div className="purchase-info">
                <input type="number" min="0" defaultValue="1" />
                <button type="button" className="btn">
                  Add to Cart <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
