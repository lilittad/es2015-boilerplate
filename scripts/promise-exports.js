export const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise1
    .then(function(value) {
        console.log(value);
        // expected output: "foo"
    })
    .catch(() => {
        console.log('failed');
    });

export const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise2
    .then(function(value) {
        console.log(value);
        // expected output: "foo"
    })
    .catch(() => {
        console.log('failed');
    });

export const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise3
    .then(function(value) {
        console.log(value);
        // expected output: "foo"
    })
    .catch(() => {
        console.log('failed');
    });

export const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise4
    .then(function(value) {
        console.log(value);
        // expected output: "foo"
    })
    .catch(() => {
        console.log('failed');
    });

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing promise-export module works`;
    return el;
}