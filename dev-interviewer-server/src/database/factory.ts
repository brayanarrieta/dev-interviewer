import { HARPER_SCHEMA } from '../config';
import { ServiceError } from '../helpers/errors';
import harperiveClient from './harperive';

type Options = {
    schema?: string
}

const prepareRawQuery = (query: string, options?: Options): string => {
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

export const executeRawQuery = async (query: string, options?: Options) => {
  const rawQuery = prepareRawQuery(query, options);
  const result = await harperiveClient.query(rawQuery);
  return result;
};

export const insertRecord = async (tableName: string, record: Object, options?: Options) => {
  const schema = options?.schema || HARPER_SCHEMA;

  if (!schema) {
    throw new ServiceError({
      token: 'NO_SCHEMA_PROVIDED',
    });
  }

  const inserted = await harperiveClient.insert({
    table: tableName,
    records: [
      record,
    ],
    schema,
  });

  return inserted;
};

export const updateRecord = async (tableName: string, record: Object, options?: Options) => {
  const schema = options?.schema || HARPER_SCHEMA;

  if (!schema) {
    throw new ServiceError({
      token: 'NO_SCHEMA_PROVIDED',
    });
  }

  const updated = await harperiveClient.update({
    table: tableName,
    records: [
      record,
    ],
    schema,
  });

  return updated;
};

export const deleteRecord = async (tableName: string, recordId: string, options?: Options) => {
  const schema = options?.schema || HARPER_SCHEMA;

  if (!schema) {
    throw new ServiceError({
      token: 'NO_SCHEMA_PROVIDED',
    });
  }

  const deleted = await harperiveClient.delete({
    schema,
    table: tableName,
    hashValues: [recordId],
  });

  return deleted;
};
