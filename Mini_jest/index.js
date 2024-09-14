const assert = {

    assertEqual(actual, expected, message = "") {
        if (actual !== expected) {
            throw new Error(`Assertion Failed: ${message} | Expected: ${expected}, but got: ${actual}`);
        }
    },

    assertNotEqual(actual, expected, message = "") {
        if (actual === expected) {
            throw new Error(`Assertion Failed: ${message} | Expected not to equal: ${expected}, but got: ${actual}`);
        }
    },

    assertTrue(value, message = "") {
        if (!value) {
            throw new Error(`Assertion Failed: ${message} | Expected value to be truthy, but got: ${value}`);
        }
    },

    assertFalse(value, message = "") {
        if (value) {
            throw new Error(`Assertion Failed: ${message} | Expected value to be falsy, but got: ${value}`);
        }
    },

    assertContains(array, item, message = "") {
        if (!array.includes(item)) {
            throw new Error(`Assertion Failed: ${message} | Expected array to contain: ${item}`);
        }
    },
};

class TestRunner {
    constructor() {
        this.tests = []; 
        this.beforeAllHooks = []; 
        this.afterAllHooks = [];
        this.beforeEachHooks = [];
        this.afterEachHooks = [];
        this.executionOrder = 'sequential'; 
    }

    
    registerTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    
    setExecutionOrder(order) {
        this.executionOrder = order;
    }

    
    async runTests() {
        console.log('Running tests...');

        
        for (let hook of this.beforeAllHooks) {
            await hook();
        }

        
        const testsToRun = this.executionOrder === 'random'
            ? this.tests.sort(() => Math.random() - 0.5)
            : this.tests;

            
        for (let { name, testFunction } of testsToRun) {
            for (let hook of this.beforeEachHooks) {
                await hook();
            }

            try {
                await testFunction();
                console.log(`✅ ${name}`);
            } catch (error) {
                console.error(`❌ ${name} failed: ${error.message}`);
            }

            for (let hook of this.afterEachHooks) {
                await hook();
            }
        }

        for (let hook of this.afterAllHooks) {
            await hook();
        }
        console.log('All tests finished.');
    }

    filterTests(filterFn) {
        this.tests = this.tests.filter(filterFn);
    }

    beforeEach(hook) {
        this.beforeEachHooks.push(hook);
    }

    afterEach(hook) {
        this.afterEachHooks.push(hook);
    }

    beforeAll(hook) {
        this.beforeAllHooks.push(hook);
    }

    afterAll(hook) {
        this.afterAllHooks.push(hook);
    }
}


const testRunner = new TestRunner();

function describe(suiteName, suiteFunction) {
    console.log(`Suite: ${suiteName}`);
    suiteFunction();
}

function test(testName, testFunction) {
    testRunner.registerTest(testName, testFunction);
}


describe('Math Operations', () => {
    testRunner.beforeEach(() => {
        console.log('Setting up before each test...');
    });

    testRunner.afterEach(() => {
        console.log('Cleaning up after each test...');
    });

    test('should add numbers correctly', () => {
        assert.assertEqual(2 + 2, 4);
    });

    test('should handle failing test', () => {
        assert.assertEqual(2 + 2, 5, 'Addition is incorrect');
    });

    test('should test for truthy value', () => {
        assert.assertTrue(1, 'Value should be truthy');
    });

    test('should test for falsy value', () => {
        assert.assertFalse(0, 'Value should be falsy');
    });

    test('should check if array contains value', () => {
        assert.assertContains([1, 2, 3], 2, 'Array should contain the value');
    });

    test('should check if array does not contain value', () => {
        assert.assertContains([1, 2, 3], 5, 'Array should contain the value');
    });
});


testRunner.runTests();
