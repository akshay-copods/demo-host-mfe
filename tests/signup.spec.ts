
import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('name@company.com').click();
  await page.getByPlaceholder('name@company.com').fill('akshay@copods.co');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Let\'s get started' }).click();
  await page.getByPlaceholder('Enter your Name').click();
  await page.getByPlaceholder('Enter your Name').fill('Akshay');
  await page.getByText('Product Management').click();
  await page.getByTitle('Growth team').getByText('Growth team').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without uploading' }).click();
  await page.getByPlaceholder('Your organization URL').click();
  await page.getByPlaceholder('Your organization URL').fill('copods.co');
  await page.getByPlaceholder('Enter your organization name').click();
  await page.getByPlaceholder('Enter your organization name').fill('Copods');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Enter your Product Name').click();
  await page.getByPlaceholder('Enter your Product Name').fill('Stealth-Copods');
  await page.getByText('Businesses - B2B').click();
  await page.getByTitle('Others').getByText('Others').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
});