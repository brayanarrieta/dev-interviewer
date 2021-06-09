import { HARPER_SCHEMA } from '../config';
import { ServiceError } from '../helpers/errors';
import harperiveClient from './harperive';

type PrepareRawQueryOptions = {
    schema?: string
}

const prepareRawQuery = (query: string, options?: PrepareRawQueryOptions): string => {
  const schema = options?.schema || HARPER_SCHEMA;

  if (!schema) {
    throw new ServiceError({
      token: 'NO_SCHEMA_PROVIDED',
    });
  }

  const prepared = query
    .replace(/schema/g, schema);

  return prepared;
};

export const executeRawQuery = async (query: string, options?: PrepareRawQueryOptions) => {
  const rawQuery = prepareRawQuery(query, options);
  const result = await harperiveClient.query(rawQuery);
  return result;
};
