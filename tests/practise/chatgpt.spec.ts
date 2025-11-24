import { test, expect } from '@playwright/test';

test('add three todos, complete one, screenshot remaining two', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todos = ['Buy groceries', 'Walk the dog', 'Read a book'];

  // add three todos
  for (const todo of todos) {
    await page.locator('.new-todo').fill(todo)
    await page.locator('.new-todo').press('Enter');
  }

  // ensure 3 items are created
  const items = page.locator('.todo-list li');
  await expect(items).toHaveCount(3);

  // complete the first todo
  const firstToggle = items.nth(0).locator('.toggle');
  await firstToggle.check();

  // assert the first has class "completed"
  await expect(items.nth(0)).toHaveClass(/completed/);

  // now filter to show only active items (if needed)
  await page.locator('text=Active').click();

  // ensure 2 items remain in active
  const activeItems = page.locator('.todo-list li');
  await expect(activeItems).toHaveCount(2);

  // take screenshot of the list area
  await page.locator('.todo-app').screenshot({path:"tests/practise"+Date.now()+"todo.png"});

  // optionally check the text of remaining items
  await expect(activeItems.nth(0)).toHaveText(todos[1]);
  await expect(activeItems.nth(1)).toHaveText(todos[2]);
});
