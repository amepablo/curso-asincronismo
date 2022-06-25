// * Como utilizar un generators - Ejemplo 1
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// * Como utilizar un generators - Ejemplo 2
function* iterable(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterable(['a', 'b', 'c', 'd', 'e']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

