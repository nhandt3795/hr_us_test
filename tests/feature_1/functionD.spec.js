const { test, expect } = require('@playwright/test');

test.describe('@FunctionD Function D Tests', async () => {
    test('@D01 Testcase 1', async ({baseURL}) => {
        console.log("[Test] Function D -------- Testcase 1")
        console.log(baseURL)
    });
    
    test('@D02 Testcase 2', async ({baseURL}) => {
        console.log("[Test] Function D -------- Testcase 2")
        console.log(baseURL)
    });
})
