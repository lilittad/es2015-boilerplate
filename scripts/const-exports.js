export const x = 5;

export const obj = {
    a: 6,
    b: 7,
    c: 8,
};

export const arr = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export const str = 'This is a test string export';

export const strTemplate = `This is a test string template
export which contains defined x const with value ${x}
${obj} ${arr}`;


export const x1 = 5;

export const obj1 = {
    a: 6,
    b: 7,
    c: 8,
};

export const arr1 = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export const str1 = 'This is a test string export';

export const strTemplate1 = `This is a test string template
export which contains defined x const with value ${x}
${obj} ${arr}`;


export const x2 = 5;

export const obj2 = {
    a: 6,
    b: 7,
    c: 8,
};

export const arr2 = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export const str2 = 'This is a test string export';

export const strTemplate2 = `This is a test string template
export which contains defined x const with value ${x}
${obj} ${arr}`;

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing const-export module works`;
    return el;
}

