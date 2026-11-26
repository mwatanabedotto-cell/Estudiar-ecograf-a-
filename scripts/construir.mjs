// Genera la plataforma en un único archivo.
//   node scripts/construir.mjs
//     → dist/sonoaula.html y dist/artifact.html (sin imágenes de los libros; aptos para el repositorio público)
//   node scripts/construir.mjs --imagenes <carpeta> --salida <archivo>
//     → versión PRIVADA con las figuras de los libros incrustadas. La carpeta contiene <clave>.jpg
//       (claves de contenido/figuras-libro.js). No guardar esa salida en el repositorio: las imágenes tienen derechos de autor.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const dirImg = opt('--imagenes');
const salida = opt('--salida');

let html = readFileSync(join(raiz, 'index.html'), 'utf8');
html = html.replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g, (_, f) => `<style>\n${readFileSync(join(raiz, f), 'utf8')}</style>`);
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, f) => {
  let js = `<script>\n${readFileSync(join(raiz, f), 'utf8')}</script>`;
  if (dirImg && f === 'contenido/figuras-libro.js') {
    const claves = [...readFileSync(join(raiz, f), 'utf8').matchAll(/^\s*'([a-z0-9-]+)':\s*\{\s*curso/gm)].map((m) => m[1]);
    const imgs = {};
    for (const k of claves) {
      const p = join(dirImg, k + '.jpg');
      if (existsSync(p)) imgs[k] = 'data:image/jpeg;base64,' + readFileSync(p).toString('base64');
    }
    js += `\n<script>window.ECO.imgLibro = ${JSON.stringify(imgs)};</script>`;
    console.log(`Figuras de los libros incrustadas: ${Object.keys(imgs).length} de ${claves.length}`);
  }
  return js;
});
const fragmento = html
  .replace(/<!doctype html>\s*/i, '')
  .replace(/<\/?html[^>]*>\s*/gi, '')
  .replace(/<\/?head>\s*/gi, '')
  .replace(/<\/?body>\s*/gi, '')
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');

if (salida) {
  mkdirSync(dirname(salida), { recursive: true });
  writeFileSync(salida, fragmento);
  console.log(`${salida} generado (${Math.round(fragmento.length / 1024)} KB)`);
} else {
  mkdirSync(join(raiz, 'dist'), { recursive: true });
  writeFileSync(join(raiz, 'dist', 'sonoaula.html'), html);
  writeFileSync(join(raiz, 'dist', 'artifact.html'), fragmento);
  console.log('dist/sonoaula.html y dist/artifact.html generados (' + Math.round(html.length / 1024) + ' KB)');
}
