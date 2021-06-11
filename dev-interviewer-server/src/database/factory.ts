import { HARPER_SCHEMA } from '../config';
import { ServiceError } from '../helpers/errors';
import { FactoryOptions } from '../types';
import harperiveClient from './harperive';

const NO_SCHEMA_TOKEN = 'NO_SCHEMA_PROVIDED';

const validateSchema = (schema: string | undefined) => {
  if (!schema) {
    throw new ServiceError({
      token: NO_SCHEMA_TOKEN,
    });
  }
};

const prepareRawQuery = (query: string, options?: FactoryOptions): string => {
  const schema = options?.schema || HARPER_SCHEMA;

  if (!schema) {
    throw new ServiceError({
      token: NO_SCHEMA_TOKEN,
    });
  }

  const prepared = query
    .replace(/schema/g, schema);

  return prepared;
};

export const executeRawQuery = async (query: string, options?: FactoryOptions) => {
  const rawQuery = prepareRawQuery(query, options);
  const result = await harperiveClient.query(rawQuery);
  return result;
};

export const insertRecord = async (tableName: string, record: Object, options?: FactoryOptions) => {
  const schema = options?.schema || HARPER_SCHEMA;

  validateSchema(schema);

  const inserted = await harperiveClient.insert({
    table: tableName,
    records: [
      record,
    ],
    schema,
  });

  return inserted;
};

export const updateRecord = async (tableName: string, record: Object, options?: FactoryOptions) => {
  const schema = options?.schema || HARPER_SCHEMA;

  validateSchema(schema);

  const updated = await harperiveClient.update({
    table: tableName,
    records: [
      record,
    ],
    schema,
  });

  return updated;
};

export const deleteRecord = async (
  tableName: string,
  recordId: string,
  options?: FactoryOptions,
) => {
  const schema = options?.schema || HARPER_SCHEMA;

  validateSchema(schema);

  const deleted = await harperiveClient.delete({
    schema,
    table: tableName,
    hashValues: [recordId],
  });

  return deleted;
};

export const createTable = async (
  tableName: string,
  primaryKey: string,
  options?: FactoryOptions,
) => {
  const schema = options?.schema || HARPER_SCHEMA;

  validateSchema(schema);

  return harperiveClient.createTable({
    schema,
    table: tableName,
    hashAttribute: primaryKey,
  });
};

export const dropTable = async (
  tableName: string,
  options?: FactoryOptions,
) => {
  const schema = options?.schema || HARPER_SCHEMA;

  validateSchema(schema);

  return harperiveClient.dropTable({
    schema,
    table: tableName,
  });
};

export const createSchema = async (
  schema?: string,
) => {
  const schemaToCreate = schema || HARPER_SCHEMA;

  if (!schemaToCreate) {
    throw new ServiceError({
      token: NO_SCHEMA_TOKEN,
    });
  }

  return harperiveClient.createSchema({
    schema: schemaToCreate,
  });
};

export const dropSchema = async (
  schema?: string,
) => {
  const schemaToCreate = schema || HARPER_SCHEMA;

  if (!schemaToCreate) {
    throw new ServiceError({
      token: NO_SCHEMA_TOKEN,
    });
  }

  return harperiveClient.dropSchema({
    schema: schemaToCreate,
  });
};
