const { test, expect } = require('@playwright/test');

test.describe('@FunctionC Function C Tests', async () => {
    test('@C01 Testcase 1', async ({baseURL}) => {
        console.log("[Test] Function C -------- Testcase 1")
        console.log(baseURL)
    });
    
    test('@C02 Testcase 2', async ({baseURL}) => {
        console.log("[Test] Function C -------- Testcase 2")
        console.log(baseURL)
    });
})
