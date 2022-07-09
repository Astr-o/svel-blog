import { expect, test } from '@playwright/test';

test('end-2-end user flow', async ({ page }) => {
	await page.goto('/');
	// Click text=About Me
	await Promise.all([
		page.waitForNavigation(/*{ url: 'http://localhost:3000/about-me' }*/),
		page.locator('text=About Me').click()
	]);
	// Click h1:has-text("Education")
	await page.locator('h1:has-text("Education")').click();
	// Click h1:has-text("Projects")
	await page.locator('h1:has-text("Projects")').click();
	// Click text=Download Resume
	const [download] = await Promise.all([
		page.waitForEvent('download'),
		page.locator('text=Download Resume').click()
	]);

	expect(download.url()).toContain('cv');

	// Click text=Blog
	await Promise.all([
		page.waitForNavigation(/*{ url: 'http://localhost:3000/blog' }*/),
		page.locator('text=Blog').click()
	]);
});
