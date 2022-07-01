//Javascript API Practice


async function firstSixIncomplete () {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()

    const todos = result.filter(element => element.completed === false)

    let newArr = []
    for (let i = 0; i < 6; i++) {
        newArr.push(todos[i])
    }
    console.log(newArr)
}

firstSixIncomplete()