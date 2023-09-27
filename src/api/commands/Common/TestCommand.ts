import * as yargs from 'yargs';

export class TestCommand implements yargs.CommandModule {
    public command = 'test';
    public describe = 'test.';

    public async handler() {
        console.log('test');
    }
}
