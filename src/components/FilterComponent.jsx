import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../redux/api/categoryApi';
import { addFilters, filterInitState, resetFilters } from '../redux/slice/filterSlice';

const FilterComponent = ({ setIsFilterOpen }) => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();
  const [localFilter, setLocalFilter] = useState({
    categoryId: searchParams.get('categoryId'),
    minPrice: searchParams.get('minPrice') || filters.minPrice,
    maxPrice: searchParams.get('maxPrice') || filters.maxPrice
  });

  const applyFilter = () => {
    dispatch(
      addFilters({
        ...filters,
        categoryId: localFilter.categoryId,
        minPrice: localFilter.minPrice,
        maxPrice: localFilter.maxPrice
      })
    );
    setSearchParams({
      ...(localFilter.categoryId && { categoryId: localFilter.categoryId }),
      ...(localFilter.minPrice && {
        minPrice: localFilter.minPrice,
        maxPrice: localFilter.maxPrice
      })
    });
    setIsFilterOpen(false);
  };

  const clearFilter = () => {
    dispatch(resetFilters());
    setSearchParams({});
    setLocalFilter({
      categoryId: filterInitState.categoryId,
      minPrice: filterInitState.minPrice,
      maxPrice: filterInitState.maxPrice
    });
  };

  return (
    <div className="filter-component">
      <h3 className="heading">
        Filters
        <span className="filter-btn" onClick={() => setIsFilterOpen(false)}>
          Close
        </span>
      </h3>
      <div className="filter-wrapper">
        <div className="filter-title"> Category </div>
        <div className="filter-options">
          {data?.length
            ? data.map((cat, i) => (
                <div className="filter-item" key={i}>
                  <input
                    type="radio"
                    id={cat.id}
                    name="category"
                    value={cat.id}
                    checked={cat.id == localFilter.categoryId}
                    // defaultChecked={cat.id == localFilter.categoryId}
                    onChange={(e) => setLocalFilter({ ...localFilter, categoryId: e.target.value })}
                  />
                  <label htmlFor={cat.id}>{cat.name} </label>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="filter-wrapper">
        <div className="filter-title"> Price </div>
        <div className="filter-options">
          <div className="filter-item price">
            <label htmlFor="min"> Min Price </label>
            <input
              id="min"
              type="number"
              minLength="0"
              defaultValue={localFilter.minPrice}
              onChange={(e) => setLocalFilter({ ...localFilter, minPrice: e.target.value })}
            />
          </div>
          <div className="filter-item price">
            <label htmlFor="max"> Max Price </label>
            <input
              id="max"
              type="number"
              maxLength="100000"
              defaultValue={localFilter.maxPrice}
              onChange={(e) => setLocalFilter({ ...localFilter, maxPrice: e.target.value })}
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
