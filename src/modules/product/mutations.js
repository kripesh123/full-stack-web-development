// Imports
import { GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';

// App Imports
import { ProductType } from './types';
import { create, update, remove } from './resolvers';

// Product create
export const productCreate = {
  type: ProductType,
  args: {
    title: {
      name: 'title',
      type: GraphQLString,
    },

    slug: {
      name: 'slug',
      type: GraphQLString,
    },

    description: {
      name: 'description',
      type: GraphQLString,
    },

    body: {
      name: 'body',
      type: GraphQLString,
    },

    image: {
      name: 'image',
      type: GraphQLString,
    },

    type: {
      name: 'type',
      type: GraphQLInt,
    },

    featured: {
      name: 'featured',
      type: GraphQLInt,
    },

    isActive: {
      name: 'isActive',
      type: GraphQLBoolean,
    },
  },
  resolve: create,
};

// Product update
export const productUpdate = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },

    slug: {
      name: 'slug',
      type: GraphQLString,
    },

    description: {
      name: 'description',
      type: GraphQLString,
    },

    body: {
      name: 'body',
      type: GraphQLString,
    },

    image: {
      name: 'image',
      type: GraphQLString,
    },

    type: {
      name: 'type',
      type: GraphQLInt,
    },

    featured: {
      name: 'featured',
      type: GraphQLInt,
    },

    isActive: {
      name: 'isActive',
      type: GraphQLBoolean,
    },
  },
  resolve: update,
};

// Product remove
export const productRemove = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: remove,
};
