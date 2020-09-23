import { GraphQLObjectType } from 'graphql';

import * as user from '../../modules/user/mutations';
import * as category from '../../modules/category/mutations';
import * as subCategory from '../../modules/sub-category/mutations';
import * as article from '../../modules/article/mutations';

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutation {create, update, delete}',
  fields: {
    ...user,
    ...category,
    ...subCategory,
    ...article,
  },
});

export default mutation;
