import { getCommandLineArgs } from '../helpers/cliHelpers';
import DATABASE_STRUCTURE from './databaseStructure';
import { createSchema, createTable, dropSchema } from './factory';

const createDatabaseStructure = async () => {
  const tableNames = Object.keys(DATABASE_STRUCTURE);
  // Create tables
  await Promise.all(tableNames.map(async (tableName) => {
    const primaryKey = DATABASE_STRUCTURE[tableName].hashAttribute;
    await createTable(tableName, primaryKey);
  }));
};

// TODO: Need to be created a database migration system
const migrate = async () => {
  try {
    const args = getCommandLineArgs([{ name: 'drop', type: Boolean }]);

    if (args?.drop) {
      await dropSchema();
      await createSchema();
    }

    await createDatabaseStructure();

    // eslint-disable-next-line no-console
    console.log('Migrate script was executed successfully!');
  } catch (error) {
  // eslint-disable-next-line no-console
    console.error(error);
  }
};

migrate();
