#!/usr/bin/env node
require('commander')
   .version(require('../package').version)
   .usage('<command> [options]')
   .command('init', 'generate a new project based on rollup config')
   .parse(process.argv)
