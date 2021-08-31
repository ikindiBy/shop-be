import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { products } from '../../data/products';
import schema from './schema';

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id } = event.queryStringParameters;
  const productById = products.find((productItem) => productItem.id === id);
  return formatJSONResponse({
    product: productById || {},
  });
 
}

export const main = middyfy(getProductById);
