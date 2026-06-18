const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER_CONSOLE_ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('BROWSER_PAGE_ERROR:', error.message);
  });

  await page.goto('http://localhost:8080/learner-dashboard', { waitUntil: 'networkidle' }).catch(e => console.log('Goto Error:', e.message));
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await browser.close();
})();
