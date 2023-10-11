
const btnShowUsers = document.getElementById('btnShowUsers');
const btnShowDogs = document.getElementById('btnShowDogs');
const btnRandomImg = document.getElementById('btnRandomImg');
const btnBreedImgs = document.getElementById('btnBreedImgs');
const userBreedSelection = document.getElementById('userBreedValue');
const printDOM = document.getElementById('printDOM');

const users = [];

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        res.data.forEach(user => users.push(user.name));
        return users;
        }
    )
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'))

const showUsers = () => {
    printDOM.innerHTML = '';
    users.forEach(user => {
        printDOM.innerHTML += `
        <div class="card mt-3 me-3 col-6 col-sm-4 shadow-sm rounded">
            <div class="card-body">${user}</div>
        </div>`
    })
};

btnShowUsers.addEventListener('click', showUsers);




let dogBreeds = [];

axios.get('https://dog.ceo/api/breeds/list/all')
    .then(breed => {
        const dataBreed = breed.data.message;
        dogBreeds = Object.keys(dataBreed);
    })
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'))

const showDogs = () => {
    printDOM.innerHTML = '';
    dogBreeds.forEach(breed => {
        printDOM.innerHTML += `
        <div class="card mt-3 me-3 col-6 col-sm-3 shadow-sm rounded">
            <div class="card-body">${breed}</div>
        </div>`
    })
};

btnShowDogs.addEventListener('click', showDogs);





const getRandomImg = () => {
    printDOM.innerHTML = '';

    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(img => {
        printDOM.innerHTML += `<img src="${img.data.message}" class="h-auto w-100 mt-3" alt="...">`;
    })
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'));
};

btnRandomImg.addEventListener('click', getRandomImg);




const getBreedImgs = () => {
    printDOM.innerHTML = '';

    const srcImgBreed = `https://dog.ceo/api/breed/${userBreedSelection.value}/images`
    axios.get(srcImgBreed)
    .then (img => {
        img.data.message.forEach(src => {
            printDOM.innerHTML += `
            <div class="card mt-3 me-3 col-6 col-sm-3 rounded">
                <img src="${src}" class="h-20 object-fit-fill" alt="...">
            </div>`
        });    
    })
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'));
};

btnBreedImgs.addEventListener('click', getBreedImgs)









