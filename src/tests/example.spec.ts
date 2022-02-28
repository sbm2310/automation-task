import { test } from '@playwright/test';
import * as actions from '../actions/example';
import * as validations from '../validations/example';

const ITEMS = [
    'buy somthing',
    'go to somewhere',
    'jump 3 times'
]

test.beforeEach(async ({ page }) => {
    await actions.goToUrl('https://demo.playwright.dev/todomvc', page);
  });

test.describe.parallel('todoMVC automation task - suite',() => {
    test('validate title', async ({ page }) => {
        const title = page.locator('section.todoapp >> h1');
        await validations.validateText(title, 'todos');
    });

    test('validate footer', async ({ page }) => {
        const footer = page.locator('.info');
        await validations.validateText(footer, 'Double-click to edit a todo Created by Remo H. Jansen Part of TodoMVC');
    });

    test('input is empty', async ({page}) => {
        await validations.validateEmpty(page.locator('.new-todo'));
    });

    test('add 2 todo items', async({page}) => {
        await actions.addOneItem(page, ITEMS[0]);
        await validations.validateText(page.locator('.view label'), ITEMS[0]);
        await actions.addOneItem(page, ITEMS[1]);
        await validations.validateText(page.locator('.view label'), [ITEMS[0], ITEMS[1]]);
    });
});

test.describe.parallel('check items',() => {
    test.beforeEach(async ({page}) => {
        await actions.addItems(page, ITEMS);
    });
    
    test('check all items', async({page}) => {
        await actions.checkAllItems(page);
        await validations.validateClass(page.locator('.todo-list li'), ['completed', 'completed', 'completed']);
    });

    test('check one item', async({page}) => {
        await actions.checkItems(page, 1);
        await validations.validateClass(page.locator('.todo-list li'), ['completed', '', '']);
    });
});

test.describe.parallel('footer',() => {
    test.beforeEach(async ({page}) => {
        await actions.addItems(page, ITEMS);
    });

    test('count', async ({page}) => {
        const item = await page.locator('.todo-count');
        await validations.validateText(item, '3 items left');
        await actions.checkItems(page, 2);
        await validations.validateText(item, '1 item left');
        
    });

    test('check items and click active', async ({page}) => {
        await actions.checkItems(page, 2);
        await actions.clickActive(page);
        await validations.validateClass(page.locator('.todo-list li'), ['']);
    });

    test('check items and click completed', async ({page}) => {
        await actions.checkItems(page, 2);
        await actions.clickCompleted(page);
        await validations.validateClass(page.locator('.todo-list li'), ['completed', 'completed']);
    });

    test('check one item and complete it', async({page}) => {
        await actions.checkItems(page, 1);
        await actions.clickClearCompleted(page);
        await validations.validateText(page.locator('.view label'), [ITEMS[1], ITEMS[2]]);
    });

    test('clear completed should be invisible while there no completed items',async ({page}) => {
        await validations.validateNoVisible(page.locator('.clear-completed'));
    });
});

test.describe.parallel('edit',() => {
    test.beforeEach(async ({page}) => {
        await actions.addItems(page, ITEMS);
    });

    test('edit one item', async ({page}) => {
        const item = await actions.selectOneItem(page, 0);
        await actions.editOneItem(item, 'buy');
        await validations.validateText(page.locator('.view label'), ['buy', ITEMS[1], ITEMS[2]]);
    });

    test('destroy one item', async ({page}) => {
        const item = await actions.selectOneItem(page, 0);
        await actions.destroyOneItem(item);
        await validations.validateText(page.locator('.view label'), [ITEMS[1], ITEMS[2]]);
    });

    test('hide toggle and destroy while editing',async ({page}) => {
        const item = await actions.selectOneItem(page, 0);
        await item.dblclick();
        await validations.validateNoVisible(item.locator('.toggle'));
        await validations.validateNoVisible(item.locator('.destroy'));
    });

    test('remove item after filling empty string in edit mode',async ({page}) => {
        const item = await actions.selectOneItem(page, 0);
        await actions.editOneItem(item, '');
        await validations.validateText(page.locator('.view label'), [ITEMS[1], ITEMS[2]])
    })
});