
// example.spec.js
const { test, expect } = require('@playwright/test');

test('ค้นหา Playwright บน Google', async ({ page }) => {
  // เปิด Google
  await page.goto('https://www.google.com');

  // กรอกคำค้นหา
  await page.fill('textarea[name="q"]', 'Playwright');

  // กด Enter
  await page.keyboard.press('Enter');

  // ตรวจสอบว่ามีผลลัพธ์ขึ้น
  await expect(page).toHaveTitle(/Playwright/);
});