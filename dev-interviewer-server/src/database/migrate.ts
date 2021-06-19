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

// eslint-disable-next-line no-console
const logSuccessMessage = () => console.log('Migrate script was executed successfully!');

const migrate = async () => {
  try {
    const args = getCommandLineArgs([
      { name: 'recreate', type: Boolean },
      { name: 'create', type: Boolean },
      { name: 'drop', type: Boolean },
    ]);

    if (args?.recreate) {
      await dropSchema();
      await createSchema();
    }

    if (args?.create) {
      await createSchema();
    }

    if (args?.drop) {
      await dropSchema();
      logSuccessMessage();
      return;
    }

    await createDatabaseStructure();

    logSuccessMessage();
  } catch (error) {
  // eslint-disable-next-line no-console
    console.error(error);
  }
};

migrate();
