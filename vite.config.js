import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default {
  root: projectRoot,
  build: {
    outDir: resolve(projectRoot, 'dist'),
  },
  server: {
    port: 8080,
  },
};
