let friends = [];

function addFriends(){
    let input = document.getElementById('amigo').value.trim();
    if (input === '') {
        alert("Por favor, inserte un nombre");

    } else if (friends.includes(input)) {
        alert (" Ese nombre ya esta en la lista");
    } else {
        friends.push(input);
        updateList();
    }
    cleanBox('amigo')
}

function cleanBox(id){
    document.getElementById(id).value = '';
}

function updateList(){
    let list = document.getElementById('listaAmigos');
    list.innerHTML = ''
    friends.forEach(friend => {
        let li = document.createElement('li')
        li.textContent = friend;
        list.appendChild(li)
    });

}

function raffle(){
    if (friends.length === 0){
        alert("No se puede hacer el sorteo")
    } else {
        let max = friends.length;
        let randomNumber = Math.floor(Math.random()*max);
        let elected = friends[randomNumber];
        let result = document.getElementById('resultado');
        result.innerHTML = `Amigo sorteado : ${elected}`
    }

}
