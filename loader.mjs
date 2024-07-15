import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'path';

// Convert the path to a URL format and register the loader
const tsNodePath = pathToFileURL(path.resolve('./src'));
register('ts-node/esm', tsNodePath);
