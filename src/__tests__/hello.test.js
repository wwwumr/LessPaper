import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import renderer from 'react-test-renderer';

import AssistPage from '../components/AssistPage';
import SigninPage from '../components/SigninPage';

test("App", () => {
    const component = renderer.create(
        <AssistPage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree = renderer.create(<SigninPage /> ).toJSON();
    expect(tree).toMatchSnapshot();
})
// import ShallowRenderer from 'react-test-renderer/shallow';

// import App from '../components/App';

// const renderer = new ShallowRenderer();
// renderer.render(<App />);
// const app = renderer.getRenderOutput();

// function sum(a, b) {
//     return a + b;
// }

// test('3 and 4 is 7', () => {
//     expect(sum(3, 4)).toBe(7);
// });

// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// });

// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });
// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);

//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });

// expect(sum(3,4)).toBe(7);
