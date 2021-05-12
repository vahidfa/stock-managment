export const productBasePath = `/product`;

export const FETCH_PRODUCT_LIST = productBasePath;

export const FETCH_PRODUCT_STOCK_BY_ID = (id) =>
  `${productBasePath}/${id}/stock`;

export const REFILL_PRODUCT_STOCK = (payload) =>
  `${productBasePath}/${payload.id}/refill?amount=${payload.amount}`;

export const PURCHASE_PRODUCT = (payload) =>
  `${productBasePath}/${payload.id}/buy?amount=${payload.amount}`;

export const FETCH_PRODUCT_ITEM = (id) => `${productBasePath}/${id}`;
