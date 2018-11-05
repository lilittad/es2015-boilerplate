// typed Array
export const typedUint8Array = new Uint8Array([1, 2, 3, 4]);
export const typedInt32Array = new Int32Array([1, 2, 3, 4]);
export const typedFloat64Array = new Float64Array([1, 2, 3, 4]);

// Map

const myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

myMap.get(2);
myMap.set(4, 'four');
console.log(myMap.keys());


// Set
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.has(3));
mySet.add(6);
console.log(mySet.keys());

// Proxy

const handler = {
    get: function (obj, prop) {
        return 5;
    }
}
const myProxy = new Proxy({}, handler);
myProxy.x = 1;
console.log(myProxy.x);

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing builtins-exports module works`;
    return el;
}

