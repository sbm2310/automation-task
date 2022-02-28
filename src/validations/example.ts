import { expect } from '@playwright/test';

export const validateText = async (locator, text) => {
    await expect(locator).toHaveText(text);
}

export const validateEmpty = async (locator) => {
    await expect(locator).toBeEmpty();
}

export const validateClass = async (locator, classes) => {
    await expect(locator).toHaveClass(classes);
}

export const validateNoVisible = async (locator) => {
    await expect(locator).not.toBeVisible();
}