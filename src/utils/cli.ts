import 'reflect-metadata';
import yargs from 'yargs';
import {VersionCommand} from '@base/api/commands/Common/VersionCommand';
import {TestCommand} from '@base/api/commands/Common/TestCommand';

yargs
    .usage('Usage: cli <command> [options]')
    .command(new VersionCommand())
    .command(new TestCommand())
    .demandCommand(1, 'Please provide a valid command.')
    .strict()
    .help('help')
    .alias('help', 'h').argv;
