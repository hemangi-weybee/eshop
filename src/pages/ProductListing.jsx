import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FilterComponent from '../components/FilterComponent';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../redux/api/productApi';
import { addFilters } from '../redux/slice/filterSlice';

const ProductListing = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);
  const limit = 20;
  const { isLoading, isError, data } = useGetProductsQuery(filters);

  useEffect(() => {
    if (params.id) {
      dispatch(addFilters({ ...filters, categoryId: Number(params.id) }));
    }
  }, []);

  return (
    <div className="container">
      <div className="listing-page">
        <FilterComponent />
        <div className="spad product-listing">
          <h3 className="heading">Our Products</h3>

          {isLoading ? (
            <Loader desc />
          ) : isError || data.length === 0 ? (
            <div className="error"> No data found </div>
          ) : (
            <>
              <div className="card-grid">
                {data.slice((page - 1) * 20, page * 20).map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </div>

              <div className="pagination-wrapper">
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
    </div>
  );
};

export default ProductListing;
