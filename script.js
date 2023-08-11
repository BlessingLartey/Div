const jokeEl = document.querySelector('#jokeId')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    getJoke()
})

async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const jokes = await response.json()

    jokeEl.innerHTML = jokes.joke

    console.log(jokes.joke)
}