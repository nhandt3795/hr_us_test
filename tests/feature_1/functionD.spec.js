const { test, expect } = require('@playwright/test');

test.describe('@FunctionD Function D Tests', async () => {
    test('@D01 Testcase 1', async ({}) => {
        console.log("[Test] Function D -------- Testcase 1")
    });
    
    test('@D02 Testcase 2', async () => {
        console.log("[Test] Function D -------- Testcase 2")
    });
})
