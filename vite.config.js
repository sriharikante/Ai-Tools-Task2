import { defineConfig } from 'vite';
import nunjucks from 'nunjucks';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [
    {
      name: 'nunjucks-build',
      closeBundle() {
        const env = new nunjucks.Environment(
          new nunjucks.FileSystemLoader(path.resolve(__dirname, 'src'))
        );

        const result = env.render('templates/index.njk');

        fs.writeFileSync(
          path.resolve(__dirname, 'dist/index.html'),
          result
        );
      }
    }
  ]
});