import * as import1 from './nested-exports/import1.js';

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing nested-exports module works`;
    return el;
}


