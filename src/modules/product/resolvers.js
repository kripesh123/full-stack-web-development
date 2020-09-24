// App Imports
import params from '../../config/params';
import models from '../../setup/models';

// Get all products
export async function getAll() {
  return await models.Product.findAll({
    order: [['id', 'DESC']],
    include: [{ model: models.User, as: 'user' }],
  });
}

// Get product by slug
export async function getBySlug(parentValue, { slug }) {
  const product = await models.Product.findOne({
    where: { slug },
    include: [{ model: models.User, as: 'user' }],
  });

  if (!product) {
    //Product does not exists
    throw new Error(
      'The product you are looking for does not exists or has been discontinued.'
    );
  } else {
    return product;
  }
}

// Get product by ID
export async function getById(parentValue, { productId }, { auth }) {
  if (auth.isAuthenticated && auth.isAdmin) {
    const product = await models.Product.findOne({ where: { id: productId } });

    if (!product) {
      //product does not exists
      throw new Error(
        'The product you are looking for does not exists or has been discontinued.'
      );
    } else {
      return product;
    }
  } else {
    throw new Error('Operation denied.');
  }
}

// Get products by Type
export async function getByType(parentValue, { productType }) {
  return await models.Product.findAll({ where: { type: productType } });
}

// Get products by Featured
export async function getByFeatured(parentValue, { productFeatured }) {
  return await models.Product.findAll({ where: { featured: productFeatured } });
}

// Get products Further
export async function getFurther(parentValue, { productId }) {
  return await models.Product.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: productId },
    },
    include: [{ model: models.User, as: 'user' }],
    limit: 3,
    order: [[models.Sequelize.fn('RANDOM')]], // mock related products by showing random products
  });
}

// Get products By User
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.isAuthenticated) {
    return await models.Product.findAll({
      where: {
        userId: auth.user.id,
      },
      include: [{ model: models.User, as: 'user' }],
    });
  } else {
    throw new Error('Please login to view your products.');
  }
}

// Create product
export async function create(
  parentValue,
  { title, slug, description, body, image, type, featured, isActive },
  { auth }
) {
  if ((auth.isAuthenticated && auth.isCreator) || auth.isAdmin) {
    return await models.Product.create({
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

// Update product
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
    return await models.Product.update(
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

// Remove product
export async function remove(parentValue, { id }, { auth }) {
  if (auth.isAuthenticated && auth.isAdmin) {
    const product = await models.Product.findOne({ where: { id } });

    if (!product) {
      throw new Error('The product does not exists');
    } else {
      return await models.Product.destroy({ where: { id } });
    }
  } else {
    throw new Error('Access Denied.');
  }
}

// product types
export async function getTypes() {
  return Object.values(params.product.types);
}

// product featured
export async function getFeatured() {
  return Object.values(params.product.featured);
}
