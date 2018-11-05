const promise = new Promise(function(resolve, reject){
    resolve('JS conference rocks!!!');
});

export async function asyncFoo() {
    const value = await promise;
    console.log(`aysnFoo says: ${value}`);
}

export async function asyncFoo1() {
    const value = await promise;
    console.log(`aysnFoo says: ${value}`);
}

const promise_ = new Promise(function(resolve, reject){
    resolve('JS conference rocks!!!');
});

export async function asyncFoo_() {
    const value = await promise_;
    console.log(`aysnFoo says: ${value}`);
}

export async function asyncFoo1_() {
    const value = await promise_;
    console.log(`aysnFoo says: ${value}`);
}

const promise__ = new Promise(function(resolve, reject){
    resolve('JS conference rocks!!!');
});

export async function asyncFoo__() {
    const value = await promise__;
    console.log(`aysnFoo says: ${value}`);
}

export async function asyncFoo1__() {
    const value = await promise__;
    console.log(`aysnFoo says: ${value}`);
}

const promise___ = new Promise(function(resolve, reject){
    resolve('JS conference rocks!!!');
});

export async function asyncFoo___() {
    const value = await promise__;
    console.log(`aysnFoo says: ${value}`);
}

export async function asyncFoo1___() {
    const value = await promise___;
    console.log(`aysnFoo says: ${value}`);
}
export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing async-await-export module works`;
    return el;
}