import React from "react";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader";
import { useGetCategoriesQuery } from "../redux/api/categoryApi";

const CategoryListing = () => {
    const { data, isError, isLoading } = useGetCategoriesQuery();

    return (
        <div className="container spad">
            <h3 className="heading">Categories</h3>

            <div>
                {isLoading ? <Loader /> : isError ? <div></div> : (
                    <div className="cat-card-wrapper">
                        {data.map((item, i) => <CategoryCard data={item} key={i} />)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryListing;
