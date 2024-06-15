/*
 * @Author: machenpeng-666 m1360896099@163.com
 * @Date: 2024-06-15 16:40:45
 * @LastEditors: machenpeng-666 m1360896099@163.com
 * @LastEditTime: 2024-06-15 16:41:26
 * @FilePath: \playwright\my-test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const { chromium } = require("playwright");

// (async () => {
//   const browser = await chromium.launch({
//     headless: false,
//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://elfsight.com/iframe-widgets/");
//   await page
//     .getByRole("link", { name: "Instagram 动态 将来自您的 Instagram" })
//     .click();
//   await page
//     .frameLocator('iframe[name="preview"]')
//     .frameLocator("iframe")
//     .getByRole("img", { name: "Dark Profile Widget" })
//     .click();

//   // ---------------------
//   await context.close();
//   await browser.close();
// })();
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.locator("body").click();
  await page.close();
  await page.goto("https://www.baidu.com/");
  await page.locator("#kw").click();
  await page.locator("#kw").fill("你说你知道他们的世界");
  await page.locator("#kw").press("Enter");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "你说你知道他们的世界 - 歌曲" }).click();
  const page1 = await page1Promise;
  await page1.close();

  // ---------------------
  // await context.close();
  //   await browser.close();
})();
