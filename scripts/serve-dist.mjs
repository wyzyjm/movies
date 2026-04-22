import { createServer } from 'node:http';
import { existsSync, createReadStream } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');
const distRoot = join(projectRoot, 'dist');
const fallbackFile = join(distRoot, 'index.html');
const host = '127.0.0.1';

const argPort = process.argv.find((arg) => arg.startsWith('--port='));
const port = Number(argPort?.split('=')[1] ?? 4173);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const sendFile = (response, filePath) => {
  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });

  createReadStream(filePath).pipe(response);
};

const server = createServer((request, response) => {
  const rawPath = request.url?.split('?')[0] ?? '/';
  const safePath = rawPath === '/' ? '/index.html' : rawPath;
  const filePath = normalize(join(distRoot, safePath));

  if (!filePath.startsWith(distRoot)) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  if (existsSync(filePath)) {
    sendFile(response, filePath);
    return;
  }

  if (existsSync(fallbackFile)) {
    sendFile(response, fallbackFile);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('dist/index.html was not found. Run pnpm build first.');
});

server.listen(port, host, () => {
  console.log(`dist server running at http://${host}:${port}`);
});
