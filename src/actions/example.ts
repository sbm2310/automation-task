import test, { Page } from '@playwright/test';

export const goToUrl = async (url, page: Page) => {
    await page.goto(url);
}

export const addItems = async (page: Page, items) => {
    const item = await page.locator('.new-todo');
    for(let i = 0; i < items.length; i++){
        await item.fill(items[i]);
        await item.press('Enter');
    }
}

export const addOneItem = async (page: Page, item) => {
    await page.locator('.new-todo').fill(item);
    await page.keyboard.press("Enter");
}

export const checkAllItems = async (page: Page) => {
    await page.locator('.toggle-all').check();
}

export const checkItems = async (page: Page, numberOfChecks) => {
    for(let i = 0; i < numberOfChecks; i++) {
        let item = await page.locator('.todo-list li').nth(i);
        await item.locator('.toggle').check();
    }
}

export const clickActive =async (page: Page) => {
    await page.locator('.filters >> text=Active').click();
}

export const clickCompleted =async (page: Page) => {
    await page.locator('.filters >> text=completed').click();
}

export const clickClearCompleted =async (page: Page) => {
    await page.locator('.clear-completed').click();
}

export const selectOneItem = async (page: Page, indexOfItem) => {
    return await page.locator('.todo-list li').nth(indexOfItem);
}

export const editOneItem =async (item, editText) => {
    await item.dblclick();
    await item.locator('.edit').fill(editText);
    await item.press('Enter');
}

export const destroyOneItem =async (item) => {
    await item.click();
    await item.locator('.destroy').click();
}

