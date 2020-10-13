import { GraphQLObjectType } from 'graphql';

import * as user from '../../modules/user/query';
import * as category from '../../modules/category/query';
import * as subCategory from '../../modules/sub-category/query';
import * as article from '../../modules/article/query';
import * as articleCategorize from '../../modules/article-categorize/query';
import * as topics from '../../modules/topic/query';
import * as subscription from '../../modules/subscription/query'


const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries {read}',
  fields: {
    ...user,
    ...category,
    ...subCategory,
    ...article,
    ...articleCategorize,
    ...topics,
    ...subscription
  },
});

export default query;
