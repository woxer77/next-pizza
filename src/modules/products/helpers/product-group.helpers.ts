import { PRODUCT_GROUP_ID_PREFIX } from '../constants/products.constants';

export const getProductGroupId = (categoryId: number) => `${PRODUCT_GROUP_ID_PREFIX}-${categoryId}`;
