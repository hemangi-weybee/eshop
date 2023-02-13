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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isLoading, isError, data, isUninitialized } = useGetProductsQuery(filters, {
    skip: skip
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1025) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {isMobile && isFilterOpen ? (
          <FilterComponent setIsFilterOpen={setIsFilterOpen} />
        ) : (
          <>
            {!isMobile && <FilterComponent />}
            <div className="spad product-listing">
              <h3 className="heading">
                Our Products
                {isMobile && <span onClick={() => setIsFilterOpen(true)}>Filters</span>}
              </h3>

              {isLoading || isUninitialized ? (
                <Loader desc limit={limit} />
              ) : isError || data?.length === 0 ? (
                <div className="error"> No data found </div>
              ) : (
                <>
                  <div className="card-grid">
                    {data?.slice((page - 1) * limit, page * limit).map((item) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
