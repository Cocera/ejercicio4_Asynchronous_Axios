

const users = [];
const btnShowUsers = document.getElementById('btnShowUsers');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        res.data.forEach(user => users.push(user.name));
        return users;
        }
    )
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'))

const showUsers = () => {
    const usersDOM = document.getElementById('usersDOM');
    usersDOM.innerHTML = '';
    users.forEach(user => {
        usersDOM.innerHTML += `
        <div class="card mt-3">
            <div class="card-body">${user}</div>
        </div>`
    })
};

btnShowUsers.addEventListener('click', showUsers);




const dogBreeds = [];

axios.get('https://dog.ceo/api/breeds/list/all')
    .then(breed => {console.log(breed.data.message)})
    .catch(err => console.error(err, 'Ups! Algo ha ido mal'))

console.log(dogBreeds)

