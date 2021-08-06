//TYPES:

//boolean
const isFeatching: boolean = true
const isLoading: boolean = false

//number
let int: number = 5
const float: number = 10.275
const num: number = 5e10

//string
const str: string = "Some text!"

//array
const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]

const strArray: string[] = ['Hello', 'world', '!']
const strArray2: Array<string> = ['Hello', 'perfect', 'world', '!']

//tuple
const contact: [string, number]= ['Name', 25]

//any
let anyVar: any = 25
anyVar = "Some text"

// features in function
function sayMyname(name: string):void {
    console.log(name)
}
// void - function return nothing
sayMyname('Pavel')

//never
function throwError(message: string): never {
    throw new Error(message)
}

function loop(): never {
    while (true) {

    }
}

//custom Types
type Login = string
const login: Login = 'email_address'
// const login: Login = 55 - do not work

type ID = string | number
const userId: ID = '12345'
const customerId: ID = 54321
// const adminId: ID = true - do not work

//null and undefined
type SomeType = string | null | undefined