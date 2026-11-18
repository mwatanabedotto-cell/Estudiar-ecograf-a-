// Genera dist/sonoaula.html: un único archivo con CSS, contenido y JS incrustados.
// Uso: node scripts/construir.mjs   (sirve para publicar o abrir sin servidor)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
let html = readFileSync(join(raiz, 'index.html'), 'utf8');
html = html.replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g, (_, f) => `<style>\n${readFileSync(join(raiz, f), 'utf8')}</style>`);
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, f) => `<script>\n${readFileSync(join(raiz, f), 'utf8')}</script>`);
// Versión fragmento (sin doctype/html/head/body) para publicar como Artifact
const fragmento = html
  .replace(/<!doctype html>\s*/i, '')
  .replace(/<\/?html[^>]*>\s*/gi, '')
  .replace(/<\/?head>\s*/gi, '')
  .replace(/<\/?body>\s*/gi, '')
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');
mkdirSync(join(raiz, 'dist'), { recursive: true });
writeFileSync(join(raiz, 'dist', 'sonoaula.html'), html);
writeFileSync(join(raiz, 'dist', 'artifact.html'), fragmento);
console.log('dist/sonoaula.html y dist/artifact.html generados (' + Math.round(html.length / 1024) + ' KB)');
