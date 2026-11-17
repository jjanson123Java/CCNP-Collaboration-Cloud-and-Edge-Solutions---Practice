const assert = require('assert');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright-core');

(async () => {
  const baseUrl = process.argv[2] || 'http://127.0.0.1:8765/';
  const offlineHtml = process.argv[3];
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', error => errors.push(error.message));

  await page.goto(baseUrl, {waitUntil: 'networkidle'});
  assert.match(await page.title(), /CLCEI 300-820/);
  assert.strictEqual(await page.locator('#chap option').count(), 30);
  await page.selectOption('#chap', 'mix50');
  await page.click('#start');
  assert.strictEqual(await page.locator('.q').count(), 50);

  await page.locator('.toggle').first().click();
  assert.ok(await page.locator('.answer.show').first().isVisible());
  const sourceHref = await page.locator('.answer.show .src a').first().getAttribute('href');
  assert.match(sourceHref, /^https:\/\//);

  await page.click('#submit');
  await page.click('#submit');
  assert.ok(await page.locator('#results').isVisible());
  assert.match(await page.locator('#results').innerText(), /FAIL/);
  assert.ok(await page.locator('#drillWeak').isVisible());
  await page.click('#drillWeak');
  assert.ok((await page.locator('.q').count()) > 0);

  await page.goto(baseUrl, {waitUntil: 'networkidle'});
  await page.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.ready);
  await context.setOffline(true);
  await page.reload({waitUntil: 'domcontentloaded'});
  assert.match(await page.title(), /CLCEI 300-820/);
  await context.setOffline(false);

  if (offlineHtml) {
    const offlinePage = await context.newPage();
    await offlinePage.goto(pathToFileURL(path.resolve(offlineHtml)).href, {waitUntil: 'domcontentloaded'});
    assert.strictEqual(await offlinePage.locator('#chap option').count(), 30);
    assert.match(await offlinePage.locator('#netStatus').innerText(), /offline copy/);
    await offlinePage.selectOption('#chap', '1');
    await offlinePage.click('#start');
    assert.strictEqual(await offlinePage.locator('.q').count(), 6);
  }

  assert.deepStrictEqual(errors, []);
  await browser.close();
  console.log('OK: online scoring, remediation, sources, service-worker offline reload, and file-based offline copy');
})().catch(error => {
  console.error(error);
  process.exit(1);
});
