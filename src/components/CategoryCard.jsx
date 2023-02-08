import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addFilters } from '../redux/slice/filterSlice';

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleCategory = () => {
    dispath(addFilters({ ...filters, categoryId: Number(data.id) }));
    navigate(`/category/${data.id}`);
  };

  return (
    <div className="category-card" onClick={handleCategory}>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={data.image} alt={data.name} />
        </div>
      </div>
      <div className="text-container">
        <span>{data.name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
