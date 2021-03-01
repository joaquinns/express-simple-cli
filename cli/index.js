import { program } from '@caporal/core';
import fs from 'fs';
import chalk from 'chalk';

import { makeController } from './templates/controller.template';
import { makeModel } from './templates/model.template';
import { makeRoute } from './templates/route.template';

function fileExists(file, cb) {
  fs.stat(file, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return cb(null, false);
      } else { //  in case another error
        return cb(err);
      }
    }
    // return the result `isFile`.
    return cb(null, stats.isFile());
  });
}

program
  .command("controller")
  .alias("co")
  .argument("<name>", "Name controller")
  .action(({ logger, args }) => {
    if (args.name) {
      let path2 = `${__dirname}\\src\\controllers`;
      fs.mkdirSync(path2, {recursive: true});
      
      fileExists(`${path2}/${args.name}.controller.js`, (err, exists) => {
        if(err) {
          // Another type of error
          console.error(err);
        }
        if(exists) {
          return logger.error(`The ${chalk.redBright('controller')} name: ${args.name} already exist`);
        } else {
          fs.writeFile(`${path2}/${args.name}.controller.js`, makeController(args.name), (err) => {
            if (err) throw console.error(err);
            return logger.info(`The controller: ${chalk.cyanBright(args.name)} was created ${chalk.greenBright('successfully!')}`)
          })
        }
      });
    }
  })

  .command("model")
  .argument("<name>", "Model name")
  .action(({ logger, args }) => {
    if (args.name) {
      let path2 = `${__dirname}\\src\\models`;
      fs.mkdirSync(path2, { recursive: true });

      fileExists(`${path2}/${args.name}.model.js`, (err, exists) => {
        if (err) {
          // Another type of error
          console.error(err);
        }
        if (exists) {
          return logger.error(`The ${chalk.redBright('model')} name: ${args.name} already exist`);
        } else {
          fs.writeFile(`${path2}/${args.name}.model.js`, makeModel(), (err) => {
            if (err) throw console.error(err);
            return logger.info(`The model: ${chalk.cyanBright(args.name)} was created ${chalk.greenBright('successfully!')}`)
          })
        }
      });
    }
  })

  .command("route")
  .argument("<name>", "Route name")
  .action(({ logger, args }) => {

    if (args.name) {
      let path2 = `${__dirname}\\src\\routes`;
      fs.mkdirSync(path2, { recursive: true });

      fileExists(`${path2}/${args.name}.route.js`, (err, exists) => {
        if (err) {
          // Another type of error
          console.error(err);
        }
        if (exists) {
          return logger.error(`The ${chalk.redBright('route')} name: ${chalk.redBright(args.name)} already exist`);
        } else {
          fs.writeFile(`${path2}/${args.name}.route.js`, makeRoute, (err) => {
            if (err) throw console.error(err);
            return logger.info(`The route: ${chalk.cyanBright(args.name)} was created ${chalk.greenBright('successfully!')}`)
          })
        }

      });
    }
  })


program.run()
