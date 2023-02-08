import React from 'react';
import CategoryCard from './CategoryCard';
import Loader from './Loader';
import { useGetCategoriesQuery } from '../redux/api/categoryApi';

const CategoryListing = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery();

  return (
    <div className="container spad">
      <h3 className="heading">Categories</h3>

      <div>
        {isLoading ? (
          <Loader />
        ) : isError || data.length === 0 ? (
          <div className="error"> No data found </div>
        ) : (
          <div className="card-grid">
            {data.map((item, i) => (
              <CategoryCard data={item} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryListing;
