export const symbol1 = Symbol();
export const symbol2 = Symbol(42);
export const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing symbol-export module works`;
    return el;
}