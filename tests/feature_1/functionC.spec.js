const { test, expect } = require('@playwright/test');

test.describe('@FunctionC Function C Tests', async () => {
    test('@C01 Testcase 1', async ({}) => {
        console.log("[Test] Function C -------- Testcase 1")
    });
    
    test('@C02 Testcase 2', async () => {
        console.log("[Test] Function C -------- Testcase 2")
    });
})
