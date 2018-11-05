import * as constImports from './scripts/const-exports.js';
import * as classImports from './scripts/class-exports.js';
import * as letImports from './scripts/let-exports.js';
import * as syntaxImports from './scripts/syntax-exports.js';
import * as builtinsImports from './scripts/builtins-exports.js';
import * as nestedImports from './scripts/nested-exports.js';
import * as symbolImports from './scripts/symbol-exports.js';
import * as asyncAwaitImports from './scripts/asyc-await-exports.js';
import * as promiseImports from './scripts/promise-exports.js';

//create content element
const contentElement = document.getElementById('content');

//append created elements to content element
contentElement.appendChild(constImports.moduleElement());
contentElement.appendChild(classImports.moduleElement());
contentElement.appendChild(letImports.moduleElement());
contentElement.appendChild(syntaxImports.moduleElement());
contentElement.appendChild(builtinsImports.moduleElement());
contentElement.appendChild(nestedImports.moduleElement());
contentElement.appendChild(asyncAwaitImports.moduleElement());
contentElement.appendChild(symbolImports.moduleElement());
contentElement.appendChild(promiseImports.moduleElement());