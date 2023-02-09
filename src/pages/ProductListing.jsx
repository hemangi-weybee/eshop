import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import FilterComponent from '../components/FilterComponent';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../redux/api/productApi';
import { addFilters } from '../redux/slice/filterSlice';

const ProductListing = () => {
  const limit = 20;
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(true);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isLoading, isError, data, isUninitialized } = useGetProductsQuery(filters, {
    skip: skip
  });

  useEffect(() => {
    if (
      searchParams.has('categoryId') ||
      searchParams.has('minPrice') ||
      searchParams.has('maxPrice')
    ) {
      dispatch(
        addFilters({
          ...filters,
          ...(searchParams.get('categoryId') && { categoryId: searchParams.get('categoryId') }),
          ...(searchParams.get('minPrice') && { minPrice: searchParams.get('minPrice') }),
          ...(searchParams.get('maxPrice') && { maxPrice: searchParams.get('maxPrice') })
        })
      );
    }
    setSkip(false);
  }, []);

  return (
    <div className="container">
      <div className="listing-page">
        <FilterComponent />
        <div className="spad product-listing">
          <h3 className="heading">Our Products</h3>

          {isLoading || isUninitialized ? (
            <Loader desc />
          ) : isError || data?.length === 0 ? (
            <div className="error"> No data found </div>
          ) : (
            <>
              <div className="card-grid">
                {data?.slice((page - 1) * 20, page * 20).map((item) => (
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
