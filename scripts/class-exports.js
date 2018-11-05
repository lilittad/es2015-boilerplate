export class Class1 {
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
    get b() {
        return this._b;
    }
    set b(b) {
        this._b = b;
    }
    get c() {
        return this._c;
    }
    set c(c) {
        this._c = c;
    }
    get d() {
        return this._d;
    }
    set d(d) {
        this._d = d;
    }
    static niceMethod() {
        console.log('some nice static method');
    }

}

class Child1 extends Class1 {
    constructor(a, b, c, d, e, f) {
        super(a, b, c, d);
        this._e = e;
        this._f = f;
    }
    get e() {
        return this._e;
    }
    set e(a) {
        this._e = e;
    }
    get f() {
        return this._f;
    }
    set f(f) {
        this._f = f;
    }
}

class Child2 extends Child1 {
    get e() {
        return this._e;
    }
    set e(a) {
        this._e = e;
    }
    get f() {
        return this._f;
    }
    set f(f) {
        this._f = f;
    }
}

export class Class2 {
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    get a1() {
        return this._a;
    }
    set a1(a) {
        this._a = a;
    }
    get b1() {
        return this._b;
    }
    set b1(b) {
        this._b = b;
    }
    get c1() {
        return this._c;
    }
    set c1(c) {
        this._c = c;
    }
    get d1() {
        return this._d;
    }
    set d1(d) {
        this._d = d;
    }
    static niceMethod() {
        console.log('some nice static method');
    }
}

class Child3 extends Class2 {
    constructor(a, b, c, d, e, f) {
        super(a, b, c, d);
        this._e1 = e;
        this._f1 = f;
    }
    get e1() {
        return this._e1;
    }
    set e1(a) {
        this._e1 = e1;
    }
    get f1() {
        return this._f1;
    }
    set f1(f1) {
        this._f = f1;
    }
}

export function moduleElement() {
    const el = document.createElement('div');
    el.innerHTML = `Importing class-exports module works`;
    return el;
}

