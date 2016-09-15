#!/usr/bin/env node

var download = require('download-git-repo')
var program  = require('commander')
var exists   = require('fs').existsSync
var path     = require('path')
var chalk    = require('chalk')
var inquirer = require('inquirer')

/**
 * Help.
 */

program.on('--help', function () {
	console.log('  Examples:')
	console.log()
	console.log(chalk.gray('    # create a new project based on rollup building'))
	console.log('    $ roll init your-project')
	console.log()
})

/**
 * Help.
 */

function help () {
	program.parse(process.argv)
	if (program.args.length < 1) return program.help()
}
help()

/**
 * Padding.
 */

console.log()
process.on('exit', function () {
	console.log()
})

/**
 * Settings.
 */

var template     = program.args[0]
var absolutePath = path.resolve('..', process.cwd(), template)
inquirer.prompt([{
	type:    'confirm',
	message: exists(absolutePath)
		         ? 'Target directory exists. Continue?'
		         : 'Generate project in current directory?',
	name:    'ok'
}]).then(function (answers) {
	if (answers.ok) {
		console.log()
		console.log(chalk.yellow('  downloading'))
		return repoDownload('github:Jerret321/rollup-config#template', absolutePath)
	} else {
		return Promise.reject('You disallow continue the action')
	}
}).then(function (downloaded) {
	if(downloaded){
		console.log()
		console.log(chalk.yellow('  ' + template + ' generated successfully'))
	}
}).catch(function (e) {
	console.log()
	console.log(chalk.red('  ' + e))
})

function repoDownload (repo, dir, clone) {
	clone = clone || false
	return new Promise(function (resolve, reject) {
		download(repo, dir, function (err) {
			if (err) reject(err)
			resolve(true)
		})
	})
}
