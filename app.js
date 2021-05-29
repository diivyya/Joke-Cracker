const ul = document.querySelector('#list');
const button = document.querySelector('button');

const getJoke = async() =>{
    try{
        let conf = { headers: {Accept: 'text/plain'}};
        let res = await axios.get('https://icanhazdadjoke.com/', conf);
        return res.data;
    }
    catch(e){
        return 'SORRY! NO JOKES AVAILABLE :(';
    }
}

const printJoke = async() => {
    let joke = getJoke();
    console.log(joke);
    let li = document.createElement('li');
    li.append(joke);
    ul.appendChild(li);
}

button.addEventListener('click',printJoke);