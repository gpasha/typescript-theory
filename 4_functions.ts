function add(a: number, b: number): number {
    return a + b
}

function toUp(text: string): string {
    return text.trim().toUpperCase()
}

interface MyPositions {
    x: number | undefined,
    y: number | undefined
}

interface MyDefaultPosition extends MyPositions {
    default: string
}

function position(): MyPositions
function position(a: number): MyDefaultPosition
function position(a: number, b: number): MyPositions

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    if (a && b) {
        return {x: a, y: b}
    }
}

console.log('empty', position())
console.log('one param', position(40))
console.log('two params', position(40, 20))

