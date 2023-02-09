import gql from 'graphql-tag';

export const GetCategoriesGQL = gql`
  query getCategoriesGQL {
    categories {
      id
      name
      image
    }
  }
`;

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
`;

export const GetFilteredDataGQL = gql`
  query getFilterProducts(
    $categoryId: Float = 0
    $title: String = null
    $minPrice: Int
    $maxPrice: Int
  ) {
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

export const AuthenticateUser = gql`
  mutation login($email: String! = "john@mail.com", $password: String! = "changeme") {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const AddUser = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $avatar: String! = "https://pics.freeicons.io/uploads/icons/png/12809185121645017043-512.png"
  ) {
    addUser(data: { name: $name, email: $email, password: $password, avatar: $avatar }) {
      id
      name
    }
  }
`;
