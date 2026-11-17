const fs = require('fs');
const path = require('path');
const vm = require('vm');

const sourceFile = path.resolve(__dirname, '..', 'exam', 'clcei', 'sources.js');
const code = fs.readFileSync(sourceFile, 'utf8') + '\nthis.__src = SRC;';
const context = {};
vm.createContext(context);
vm.runInContext(code, context, {filename: sourceFile});

async function check(key, source) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(source[3], {
      redirect: 'follow',
      signal: controller.signal,
      headers: {'User-Agent': 'CCNP-Practice-Link-Check/1.0'}
    });
    return {key, status: response.status, finalUrl: response.url, ok: response.status >= 200 && response.status < 400};
  } catch (error) {
    return {key, status: 0, finalUrl: source[3], ok: false, error: error.message};
  } finally {
    clearTimeout(timer);
  }
}

(async () => {
  const entries = Object.entries(context.__src);
  const results = [];
  for (let i = 0; i < entries.length; i += 4) {
    results.push(...await Promise.all(entries.slice(i, i + 4).map(([key, source]) => check(key, source))));
  }
  for (const result of results) console.log(`${result.ok ? 'OK' : 'FAIL'} ${result.key} ${result.status} ${result.finalUrl}${result.error ? ` ${result.error}` : ''}`);
  const failed = results.filter(result => !result.ok);
  if (failed.length) process.exit(1);
  console.log(`OK: ${results.length} source URLs reachable`);
})().catch(error => { console.error(error); process.exit(1); });
