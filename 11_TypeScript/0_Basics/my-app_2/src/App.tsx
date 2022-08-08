import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

//FETCH API EXAMPLE:
//=================================
const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number
    title: string
    completed: boolean
}

axios.get(url)
    .then(response => {
        const todo = response.data as Todo

        const id = todo.id
        const title = todo.title
        const completed = todo.completed

        logTodo(id, title, completed)
    })

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
            The Todo with ID: ${id}
            Has a title: ${title}
            Is it finished ${completed}
        `)
}

//=================================


//TYPESCRIPT FEATURES:
//=================================
const today = new Date()
today.getHours()

const person = {
    age: 21
}

class Color {

}

const red = new Color()
//=================================


//TYPESCRIPT ANNOTATIONS:
//=================================
let oranges: number = 5
let speed: string = 'fast'
let hasDog: boolean = true

let nothing: null = null
let nothing1: undefined = undefined

// build-in objects
let now: Date = new Date()

// array
let colors: string[] = ['red', 'yellow', 'grey']
let numbers: number[] = [3, 4, 5, 1]
let results: boolean[] = [false, true, false]

// classes
class Car {

}

let car: Car = new Car()

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}
//=================================


//VARIABLES ANNOTATIONS:
//=================================
// When to use type annotation
// 1) Functions return the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2) When we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three']
let isTwo: boolean // let isTwo = false

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'two') {
        isTwo = true
    }
}

// 3) Variables whoes type can't be inferred
let myNumbers = [-10, -1, 12]
let positiveNumber: boolean | number = false

for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
        positiveNumber = myNumbers[i]
    }
}
//=================================


//FUNCTIONS ANNOTATIONS:
//=================================
const add = (a: number, b: number): number => {
    return a + b
}

const substract = (a: number, b: number) => {
    return a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
    return undefined
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

//Destructurization
const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date)
    console.log(weather)
}

//ES2015
// const logWeather = ({date, weather}) => {
//     console.log(date)
//     console.log(weather)
// }

logWeather(todayWeather)
//=================================


//OBJECTS ANNOTATIONS:
//=================================
const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        lat: 1,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age
    }
}

const {age}: { age: number } = profile

const {coordinates: {lat, lng}}: { coordinates: { lat: number, lng: number } } = profile

//=================================


//TYPESCRIPT ARRAYS:
//=================================
const myColors = ['red', 'green', 'yellow']

const dates = [new Date(), new Date()]

const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['lemon']
]

//Help with inference when extracting values
const color_1 = myColors[0]
const color_2 = myColors.pop()

// Prevent incompatible values
myColors.push('black')

// Help with 'map'
myColors.map((color: string): string => {
    return color.toUpperCase()
})

// Flexible types
const importantDates = [new Date(), '2021-11-11']
importantDates.push('2021-12-12')
importantDates.push(new Date())
//=================================


//=================================
function App() {
    return (
        <>
        </>
    );
}

export default App;
