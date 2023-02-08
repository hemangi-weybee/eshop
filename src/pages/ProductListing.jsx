import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useSelector } from 'react-redux';
// import { ShimmerPostList } from 'react-shimmer-effects';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../redux/api/productApi';

const ProductListing = () => {
  const filters = useSelector(state => state.filters);
  const [page, setPage] = useState(1);
  const limit = 20;
  const { isLoading, isError, data, ...result } = useGetProductsQuery(filters)

  return (
    <div className="container">
      <h3 className="heading">Our Products</h3>

      <div>
        {isLoading ? <Loader />
          // <ShimmerPostList className="products-card-wrapper" postStyle="STYLE_ONE" col={4} row={2} gap={30} />
          : isError ? <div>{result.error}</div> : (
            <>
              <div className="products-card-wrapper">
                {data.slice((page - 1) * 20, page * 20).map(item => <ProductCard data={item} key={item.id} />)}
              </div>

              <div className='pagination-wrapper'>
                <PaginationControl
                  page={page}
                  between={4}
                  total={data.length}
                  limit={limit}
                  changePage={(page) => setPage(page)}
                  ellipsis={1}
                />
              </div>
            </>
          )}
      </div>
    </div>
  )
}

export default ProductListing