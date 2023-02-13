import React from 'react';

const Loader = ({ desc, detail, limit }) => {
  const arr = new Array(limit || 1).fill(0);
  return (
    <div className="container loaders">
      {!detail ? (
        <div className="card-grid">
          {arr.map((data, i) => (
            <div className="loader-card" key={i}>
              <div className="img-container">
                <div className="img-wrapper shine"></div>
              </div>
              <div className="text-container">
                <div className="shine heading-line"></div>
                {desc && (
                  <div>
                    <div className="desc">
                      <div className="shine lines"></div>
                      <div className="shine lines"></div>
                    </div>
                    <div className="price">
                      <div className="shine box"></div>
                      <div>
                        <div className="shine icon"></div>
                        <div className="shine icon"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase large-container shine"></div>
              </div>
              <div className="img-select">
                <div className="img-item square shine"></div>
                <div className="img-item square shine"></div>
                <div className="img-item square shine"></div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title heading-line shine"> </h2>
              <div href="/" className="box shine"></div>
              <div className="product-detail">
                <div className="detail-heading shine heading-line"></div>
                <div className="description">
                  <div className="shine lines"></div>
                  <div className="shine lines"></div>
                  <div className="shine lines"></div>
                </div>
              </div>
              <div className="product-price">
                <p className="new-price box shine">
                  <span></span>
                </p>
              </div>
              <div className="purchase-info">
                <div className="box shine"></div>
                <div className="box shine"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
