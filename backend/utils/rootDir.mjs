import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export default resolve(dirname(fileURLToPath(import.meta.url)), '..');
