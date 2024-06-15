/*
 * @Author: machenpeng-666 m1360896099@163.com
 * @Date: 2024-06-13 22:27:30
 * @LastEditors: machenpeng-666 m1360896099@163.com
 * @LastEditTime: 2024-06-13 22:50:57
 * @FilePath: \cypress-projectd:\开发项目\playwright\tests\run_test.spec.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const { test, expect } = require("@playwright/test");

// test.describe("redbus", () => {
//   test("sddsdsdsd", async ({ page }) => {
//     await page.setViewportSize({
//       width: 2551,
//       height: 776,
//     });
//     await page.goto("https://redbus.in/");
//     await page
//       .locator("#account_dd > div.rb_main_secondary_item > span")
//       .click();
//     await page.locator("#user_sign_in_sign_up > span").click();
//     await page.locator("#mobileNoInp").click();
//     await page.locator("#mobileNoInp").type("155139072859");
//     await page.locator("div.recaptcha-checkbox-border").click();
//     await page.locator("div:nth-of-type(4) div.modalCloseSmall > i").click();
//   });
// });

// test.describe("iframe", () => {
//     test("tests iframe", async({ page }) => {
//         await page.setViewportSize({
//             width: 2543,
//             height: 776
//         })
//         await page.goto("https://www.w3schools.com/html/html_iframe.asp");
//         await page.locator("#tnb-google-search-input").click()
//         await page.locator("#tnb-google-search-input").click()
//         await page.locator("#tnb-google-search-input").type("2222");
//         await page.locator("#tnb-google-search-input").click()
//         await page.locator("#tnb-google-search-input").click()
//         await page.locator("#tnb-google-search-input").type("2255**");
//     });
// });

// test.describe("juejin", () => {
//     test("tests juejin", async({ page }) => {
//         await page.setViewportSize({
//             width: 2543,
//             height: 776
//         })
//         await page.goto("http://localhost:52330/c:/Users/Administrator/Desktop/html1.html");
//         await page.locator("input").click()
//         await page.locator("input").type("fdff");
//         page.keyboard.down("{Enter}");
//         await page.locator("button").click()
//         await page.locator("input").click()
//         await page.locator("input").click()
//         await page.locator("input").type("zhanfsan");
//         await page.locator("li.auth > div > button").click()
//         await page.locator("div.dropdown-box > input").type("15454");
//         await page.locator("div.auth-header path:nth-of-type(1)").click()
//     });
// });

import { test, expect } from "@playwright/test";
test.beforeEach(async ({ context }) => {
  await context.addInitScript(() => {
    window.sessionStorage.setItem("token", "niubi1545484848");
    window.localStorage.setItem("mytestdata", "niubi1545484848");
    console.log(window.sessionStorage.getItem("token"), "token打印");
  });
});

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("https://www.baidu.com/");
  await page.locator("#kw").click();
  await page.locator("#kw").fill("你说你知道他们的世界");
  await page.locator("#kw").press("Enter");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "你说你知道他们的世界 - 歌曲" }).click();
  const page1 = await page1Promise;
});

// import { test, expect } from '@playwright/test';

test("ins", async ({ page, browser }) => {
  await page.goto("https://elfsight.com/iframe-widgets/");
  await page.getByRole("link", { name: "Social 12" }).click();
  await page
    .getByRole("link", { name: "Instagram Feed Add posts from" })
    .click();
  await page
    .frameLocator('iframe[name="preview"]')
    .frameLocator("iframe")
    .getByRole("img", { name: "Dark Profile Widget" })
    .click();
  await page
    .frameLocator('iframe[name="preview"]')
    .frameLocator("iframe")
    .frameLocator("iframe")
    .getByRole("link", { name: "Happy Lunar New Year of the" })
    .click();
});

test("tokenTest", async ({ page }) => {
  await page.goto(
    "http://localhost:52330/c:/Users/Administrator/Desktop/load.html"
  );
  //   await page.goto('https://www.baidu.com/');
});
