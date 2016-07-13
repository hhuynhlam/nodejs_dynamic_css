const _ = require('lodash');
const path = require('path');
const sass = require('node-sass');

exports.get = (req, res) => {
  generateSass(
    path.resolve(__dirname, '../../base/app.scss'),
    req.query,
    (err) => { res.status(500).send(err); },
    (css) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(css);
      res.end();
    }
  );
};

function generateSass(entry, variables, handleError, handleSuccess) {
  const dataString = generateVariables(variables) + generateimport(entry);

  const sassOptions = _.assign(
    { outputStyle: 'compressed' },
    { data: dataString }
  );

  sass.render(sassOptions, (err, result) => {
    return (err) ? handleError(err) : handleSuccess(result.css.toString());
  });
}

function generateVariable(name, value) {
  return `$${name}: ${value};`;
}

function generateVariables(variables) {
  return _
    .chain(variables)
    .keys()
    .map((key) => {
      return generateVariable(key, variables[key]);
    })
    .value()
    .join('\n');
}

function generateimport(importPath) {
  return `@import '${importPath}';`;
}
