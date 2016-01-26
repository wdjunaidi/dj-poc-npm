'use strict';

const assert = require('assert');
const greeting = require('../src/hello');

assert.equal(greeting.greeting(), 'Hello World!');
