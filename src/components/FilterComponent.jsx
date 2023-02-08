import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../redux/api/categoryApi';
import { addFilters, resetFilters } from '../redux/slice/filterSlice';

const FilterComponent = () => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(useSelector((state) => state.filters));
  const [category, setCategory] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const applyFilter = () => {
    dispatch(
      addFilters({ ...filters, categoryId: category, minPrice: minPrice, maxPrice: maxPrice })
    );
  };

  const clearFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="filter-component">
      <h3 className="heading"> Filters </h3>
      <div className="filter-wrapper">
        <div className="filter-title"> Category </div>
        <div className="filter-options">
          {data?.length
            ? data.map((category, i) => (
                <div className="filter-item" key={i}>
                  <input
                    type="radio"
                    id={category.id}
                    name="category"
                    value={category.id}
                    onChange={(e) => setCategory(Number(e.target.value))}
                  />
                  <label htmlFor={category.id}>{category.name} </label>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="filter-title"> Price </div>
        <div className="filter-options">
          <div className="filter-item price">
            <label htmlFor="min"> Minimum Price </label>
            <input
              id="min"
              type="number"
              min="0"
              defaultValue="0"
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>
          <div className="filter-item price">
            <label htmlFor="max"> Maximum Price </label>
            <input
              id="max"
              type="number"
              min="0"
              defaultValue="0"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="action-control">
        <button onClick={clearFilter}> Clear Filter </button>
        <button onClick={applyFilter}> Apply Filter </button>
      </div>
    </div>
  );
};

export default FilterComponent;
