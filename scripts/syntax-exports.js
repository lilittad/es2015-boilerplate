export function functionWithDefaultParams(a = 1, b = 3, c = 5) {
    return a + b + c;
}

export function functionWithRestParams(a, b, ...c) {
    return a + b + c[0];
}

export function functionWithSpreadParams() {
    const a = [1, 2, 3];
    console.log(...a);
}

export function functionWithDestructuring() {
    const obj = {x: 1, y: 6, z: 13};
    const {x, y, z} = obj;
    const {x: xx, y: yy, z: zz} = obj;

}

export const arrowFunction = () => {
    console.log('Arrow function goes here');
}


export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing syntax-export module works`;
    return el;
}

