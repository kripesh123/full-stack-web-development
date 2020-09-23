// App Imports
import params from '../../config/params';
import models from '../../setup/models';

// Get all articles
export async function getAll() {
  return await models.Article.findAll({
    order: [['id', 'DESC']],
    include: [{ model: models.User, as: 'user' }],
  });
}

// Get article by slug
export async function getBySlug(parentValue, { slug }) {
  const article = await models.Article.findOne({
    where: { slug },
    include: [{ model: models.User, as: 'user' }],
  });

  if (!article) {
    //Article does not exists
    throw new Error(
      'The article you are looking for does not exists or has been discontinued.'
    );
  } else {
    return article;
  }
}

// Get article by ID
export async function getById(parentValue, { articleId }, { auth }) {
  if (auth.isAuthenticated && auth.isAdmin) {
    const article = await models.Article.findOne({ where: { id: articleId } });

    if (!article) {
      //Article does not exists
      throw new Error(
        'The article you are looking for does not exists or has been discontinued.'
      );
    } else {
      return article;
    }
  } else {
    throw new Error('Operation denied.');
  }
}

// Get articles by Type
export async function getByType(parentValue, { articleType }) {
  return await models.Article.findAll({ where: { type: articleType } });
}

// Get articles by Featured
export async function getByFeatured(parentValue, { articleFeatured }) {
  return await models.Article.findAll({ where: { featured: articleFeatured } });
}

// Get articles Further
export async function getFurther(parentValue, { articleId }) {
  return await models.Article.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: articleId },
    },
    include: [{ model: models.User, as: 'user' }],
    limit: 3,
    order: [[models.Sequelize.fn('RANDOM')]], // mock related products by showing random products
  });
}

// Get articles By User
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.isAuthenticated) {
    return await models.Article.findAll({
      where: {
        userId: auth.user.id,
      },
      include: [{ model: models.User, as: 'user' }],
    });
  } else {
    throw new Error('Please login to view your articles.');
  }
}

// Create Article
export async function create(
  parentValue,
  { title, slug, description, body, image, type, featured, isActive },
  { auth }
) {
  if ((auth.isAuthenticated && auth.isCreator) || auth.isAdmin) {
    return await models.Article.create({
      title,
      slug,
      description,
      body,
      image,
      type,
      featured,
      isActive,
      userId: auth.user.id,
    });
  } else {
    throw new Error('Operation denied.');
  }
}

// Update Article
export async function update(
  parentValue,
  {
    id,
    title,
    slug,
    description,
    body,
    image,
    type,
    featured,
    isActive,
    userId,
  },
  { auth }
) {
  if (
    (auth.isAuthenticated && auth.isCreator) ||
    auth.isAuditor ||
    auth.isAdmin
  ) {
    return await models.Article.update(
      {
        title,
        slug,
        description,
        body,
        image,
        type,
        featured,
        isActive,
        userId,
      },
      { where: { id } }
    );
  } else {
    throw new Error('Operation denied.');
  }
}

// Remove Article
export async function remove(parentValue, { id }, { auth }) {
  if (auth.isAuthenticated && auth.isAdmin) {
    const article = await models.Article.findOne({ where: { id } });

    if (!article) {
      throw new Error('The article does not exists');
    } else {
      return await models.Article.destroy({ where: { id } });
    }
  } else {
    throw new Error('Access Denied.');
  }
}

// Article types
export async function getTypes() {
  return Object.values(params.article.types);
}

// Article featured
export async function getFeatured() {
  return Object.values(params.article.featured);
}
