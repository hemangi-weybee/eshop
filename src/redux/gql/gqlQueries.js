import gql from 'graphql-tag';

export const GetCategoriesGQL = gql`
  query getCategoriesGQL {
    categories {
      id
      name
      image
    }
  }
`; //done

export const GetProductDetailGQL = gql`
  query getProductDetail($id: ID!) {
    product(id: $id) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`; //done

export const GetFilteredDataGQL = gql`
  query getFilterProducts($categoryId: Float, $title: String, $minPrice: Int, $maxPrice: Int) {
    products(categoryId: $categoryId, title: $title, price_min: $minPrice, price_max: $maxPrice) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;
