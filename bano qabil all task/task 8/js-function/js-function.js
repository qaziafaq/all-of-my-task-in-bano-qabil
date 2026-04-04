const jsFunctions = {
    mount: '#main-mount',

    functionDetails: {
        map: {
            name: 'Array.map()',
            type: 'Array Method',
            description: 'The map() method creates a new array by calling a function for each element in the array.',
            syntax: `array.map((element, index, array) => {
  // return transformed element
});`,
            parameters: [
                { name: 'callback', type: 'Function', description: 'A function to run for each element' },
                { name: 'element', type: 'Value', description: 'The current element being processed' },
                { name: 'index', type: 'Number', description: 'The index of the current element (optional)' },
                { name: 'array', type: 'Array', description: 'The array itself (optional)' }
            ],
            returnValue: 'A new array with the results of calling the callback function on each element.',
            example: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]`,
            output: '[2, 4, 6, 8]',
            useCase: 'Use map() when you need to transform each element of an array and create a new array with the results.',
            browserSupport: 'All modern browsers support Array.map(). Introduced in ECMAScript 5 (2009).'
        },
        filter: {
            name: 'Array.filter()',
            type: 'Array Method',
            description: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
            syntax: `array.filter((element, index, array) => {
  // return true or false
});`,
            parameters: [
                { name: 'callback', type: 'Function', description: 'A function that tests each element' },
                { name: 'element', type: 'Value', description: 'The current element being processed' },
                { name: 'index', type: 'Number', description: 'The index of the current element (optional)' },
                { name: 'array', type: 'Array', description: 'The array itself (optional)' }
            ],
            returnValue: 'A new array containing only the elements that passed the test.',
            example: `const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]`,
            output: '[2, 4, 6]',
            useCase: 'Use filter() to create a subset of an array containing only elements that meet certain criteria.',
            browserSupport: 'All modern browsers support Array.filter(). Introduced in ECMAScript 5 (2009).'
        },
        reduce: {
            name: 'Array.reduce()',
            type: 'Array Method',
            description: 'The reduce() method executes a reducer function on each element of the array, resulting in a single value.',
            syntax: `array.reduce((accumulator, element, index, array) => {
  // return updated accumulator
}, initialValue);`,
            parameters: [
                { name: 'accumulator', type: 'Value', description: 'The accumulated value from previous callbacks' },
                { name: 'element', type: 'Value', description: 'The current element being processed' },
                { name: 'index', type: 'Number', description: 'The index of the current element (optional)' },
                { name: 'initialValue', type: 'Value', description: 'Initial value for the accumulator (optional)' }
            ],
            returnValue: 'A single value that results from the reduction.',
            example: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10`,
            output: '10',
            useCase: 'Use reduce() to aggregate values in an array, such as summing numbers, counting items, or building new objects.',
            browserSupport: 'All modern browsers support Array.reduce(). Introduced in ECMAScript 5 (2009).'
        },
        forEach: {
            name: 'Array.forEach()',
            type: 'Array Method',
            description: 'The forEach() method executes a provided function once for each array element. It does not return a value.',
            syntax: `array.forEach((element, index, array) => {
  // perform an action
});`,
            parameters: [
                { name: 'callback', type: 'Function', description: 'A function to run for each element' },
                { name: 'element', type: 'Value', description: 'The current element being processed' },
                { name: 'index', type: 'Number', description: 'The index of the current element (optional)' },
                { name: 'array', type: 'Array', description: 'The array itself (optional)' }
            ],
            returnValue: 'undefined. forEach() always returns undefined and cannot be chained.',
            example: `const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(index + ': ' + fruit);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry`,
            output: '0: apple\\n1: banana\\n2: cherry',
            useCase: 'Use forEach() to perform side effects on each array element, such as logging, updating DOM, or triggering actions.',
            browserSupport: 'All modern browsers support Array.forEach(). Introduced in ECMAScript 5 (2009).'
        },
        find: {
            name: 'Array.find()',
            type: 'Array Method',
            description: 'The find() method returns the first element in the array that satisfies the provided testing function.',
            syntax: `array.find((element, index, array) => {
  // return true when found
});`,
            parameters: [
                { name: 'callback', type: 'Function', description: 'A function to test each element' },
                { name: 'element', type: 'Value', description: 'The current element being processed' },
                { name: 'index', type: 'Number', description: 'The index of the current element (optional)' },
                { name: 'array', type: 'Array', description: 'The array itself (optional)' }
            ],
            returnValue: 'The first element that satisfies the test, or undefined if no element is found.',
            example: `const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }`,
            output: "{ id: 2, name: 'Bob' }",
            useCase: 'Use find() to search for a specific element in an array based on a condition.',
            browserSupport: 'All modern browsers support Array.find(). Introduced in ECMAScript 2015 (ES6).'
        }
    },

    render(functionName) {
        const func = this.functionDetails[functionName];
        if (!func) {
            document.querySelector(this.mount).innerHTML = '<p>Function not found</p>';
            return;
        }

        let html = `
        <div class="js-function-wrapper">
            <button class="btn-back" onclick="app.router.navigate('home')">← Back to Functions</button>
            
            <div class="function-detail-container container">
                <div class="function-detail-content">
                    <div class="detail-header">
                        <h1>${func.name}</h1>
                        <span class="function-type">${func.type}</span>
                    </div>

                    <div class="detail-section">
                        <h2>Description</h2>
                        <p>${func.description}</p>
                    </div>

                    <div class="detail-section">
                        <h2>Syntax</h2>
                        <div class="syntax-block">
                            <code>${escapeHtml(func.syntax)}</code>
                        </div>
                    </div>

                    <div class="detail-section">
                        <h2>Parameters</h2>
                        <table class="parameter-table">
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
        `;

        func.parameters.forEach(param => {
            html += `
                                <tr>
                                    <td><strong>${param.name}</strong></td>
                                    <td>${param.type}</td>
                                    <td>${param.description}</td>
                                </tr>
            `;
        });

        html += `
                            </tbody>
                        </table>
                    </div>

                    <div class="detail-section">
                        <h2>Return Value</h2>
                        <p>${func.returnValue}</p>
                    </div>

                    <div class="detail-section">
                        <h2>Example</h2>
                        <div class="example-block">
                            <h4>Code:</h4>
                            <div class="example-code">${escapeHtml(func.example)}</div>
                        </div>
                        <div class="example-block">
                            <h4>Output:</h4>
                            <div class="example-output">${escapeHtml(func.output)}</div>
                        </div>
                    </div>

                    <div class="detail-section">
                        <div class="use-case">
                            <strong>💡 Use Case:</strong> ${func.useCase}
                        </div>
                    </div>

                    <div class="detail-section">
                        <div class="browser-support">
                            <strong>🌐 Browser Support:</strong> ${func.browserSupport}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.querySelector(this.mount).innerHTML = html;
    },

    init() {
    }
};

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

window.loadJSFunction = function(functionName) {
    jsFunctions.render(functionName);
};
