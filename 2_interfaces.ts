interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234567890',
    size: {
        width: 20,
        height: 40
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '546123789',
    size: {
        width: 40,
        height: 30
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect> {} //old case


// =======================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '987456321',
    size: {
        width: 30,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// =============================================

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ==============================================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    backgroundColor: '#fff',
    color: '#000'
}