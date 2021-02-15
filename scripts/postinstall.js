const appRootPath = require('app-root-path');
const ip = require('ip');
const path = require('path');
const fs = require('fs');

const projectDir = `${appRootPath}`;
const nodeModulesDir = path.resolve(projectDir, 'node_modules');
const packageDir = path.resolve(nodeModulesDir, 'react-native-localhost');
const index = path.resolve(packageDir, 'index.js');
const declaration = path.resolve(packageDir, 'index.d.ts');

if (fs.existsSync(packageDir)) {
  fs.writeFileSync(index, `
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = "${ip.address()}";
  `.trim());
  fs.writeFileSync(declaration, `
declare const _default: string;
export default _default;
  `.trim());
}
