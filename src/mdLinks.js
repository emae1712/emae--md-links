const index = require('./index.js')
//mdLinks(path, options), path can be abslute or relative, option is an object with validate property(boolean)
//return a Promise array of objects [{ href, text, file, status, message }]

const promiseMdLinks = (path, options = { validate: false }) => {
    return new Promise ((resolve, reject) => {
      if(!index.fileExist(path))reject(new Error(`No such file or directory '${path}' or is not a string`))
      else if(index.getMdFiles(path).length == 0) reject(`Does not exist markdown files in this path '${path}'`)
      else if(index.getLinks(path).length == 0) reject(`Does not exist links to evaluate in this path '${path}'`)
      else (options.validate === true) ? resolve(index.validate(path)) : resolve(index.getLinks(path))
    })
};

module.exports = promiseMdLinks;
promiseMdLinks('test/Directory_test/folder_2', {validate: false})
.catch((response)=>{
  console.log(response);
});