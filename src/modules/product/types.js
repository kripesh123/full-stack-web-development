// Imports
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

// App Imports
import { UserType } from '../user/types';

// Product type
const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    body: { type: GraphQLString },
    image: { type: GraphQLString },
    type: { type: GraphQLInt },
    featured: { type: GraphQLInt },
    user: { type: UserType },
    isActive: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

// Product Types type
const ProductTypesType = new GraphQLObjectType({
  name: 'productTypesType',
  description: 'Product Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

// Product featured type
const ProductFeaturedType = new GraphQLObjectType({
  name: 'productFeaturedType',
  description: 'Product Featured Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

export { ProductType, ProductTypesType, ProductFeaturedType };
