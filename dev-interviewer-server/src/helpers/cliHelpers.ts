// eslint-disable-next-line import/no-extraneous-dependencies
import commandLineArgs from 'command-line-args';

type OptionDefinition = {name: string, alias?: string, type: any, defaultOption?: any}

export const getCommandLineArgs = (
  optionDefinitions: OptionDefinition[],
) => commandLineArgs(optionDefinitions);
