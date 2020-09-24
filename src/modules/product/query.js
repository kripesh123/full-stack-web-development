// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql';

// App Imports
import { ProductType, ProductTypesType, ProductFeaturedType } from './types';
import {
  getAll,
  getBySlug,
  getById,
  getByType,
  getByFeatured,
  getFurther,
  getByUser,
  getTypes,
  getFeatured,
} from './resolvers';

// Product All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll,
};

// Product By slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString },
  },
  resolve: getBySlug,
};

// product By ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt },
  },
  resolve: getById,
};

// product By type
export const productsByType = {
  type: new GraphQLList(ProductType),
  args: {
    productType: { type: GraphQLInt },
  },
  resolve: getByType,
};
// product By featured
export const productsByFeatured = {
  type: new GraphQLList(ProductType),
  args: {
    productFeatured: { type: GraphQLInt },
  },
  resolve: getByFeatured,
};

// product Further
export const productsFurther = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt },
  },
  resolve: getFurther,
};

// product By user
export const productsByUser = {
  type: new GraphQLList(ProductType),
  resolve: getByUser,
};

// product Types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes,
};

// product Featured
export const productFeaturedType = {
  type: new GraphQLList(ProductFeaturedType),
  resolve: getFeatured,
};
