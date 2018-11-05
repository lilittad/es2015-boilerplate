export let  _x = 5;

export let  _obj = {
    a: 6,
    b: 7,
    c: 8,
};

export let  _arr = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export let  _str = 'This is a test string export';

export let  _strTemplate = `This is a test string template
export which contains defined x let  _with value ${_x}
${_obj} ${_arr}`;


export let  _x1 = 5;

export let  _obj1 = {
    a: 6,
    b: 7,
    c: 8,
};

export let  _arr1 = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export let  _str1 = 'This is a test string export';

export let  _strTemplate1 = `This is a test string template
export which contains defined x let  _with value ${_x}
${_obj} ${_arr}`;


export let  _x2 = 5;

export let  _obj2 = {
    a: 6,
    b: 7,
    c: 8,
};

export let  _arr2 = [
    'banana',
    'apple',
    'peach',
    'pineaplle',
];

export let  _str2 = 'This is a test string export';

export let  _strTemplate2 = `This is a test string template
export which contains defined x let  _with value ${_x}
${_obj} ${_arr}`;

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing let-export module works`;
    return el;
}
