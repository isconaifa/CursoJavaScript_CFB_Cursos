import c from './contatos.js';
const listarContatos = document.getElementById('listarContatos');
const btn_gravar = document.getElementById('btn_gravar');

btn_gravar.addEventListener('click', (e) => {
    const cont = {
        nome: document.getElementById("f_nome").value,
        telefone: document.getElementById("f_telefone").value,
        email: document.getElementById("f_email").value
    }
    c.addContato(cont, listarContatos);
    console.log(c.getTodosContatos())

});