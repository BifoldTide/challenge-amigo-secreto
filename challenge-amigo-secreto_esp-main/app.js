// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo()
{
    let amigo = document.getElementById("amigo");
    amigo = amigo.value;
    if(amigo.length == 0)
    {
        alert("Por favor, inserte un nombre.");
    }
    else
    {
        amigos.push(amigo);
        amigo = document.getElementById("amigo")
        amigo.value = "";
        lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        for(let i = 0; i < amigos.length; i++)
        {
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        }
    }
}

function sortearAmigo()
{
    if(amigos.length > 0)
    {
        let num = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigos[num]}</li>`;
    }
    else
    {
        alert("No hay amigos en la lista");
    }
}