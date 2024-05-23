class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome;
        this.idade = pidade;
    };

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    setNome(nome) {
        this.nome = nome
    }

    setNome(idade) {
        this.idade = idade;
    }

    getInfo() {
        return [this.nome, this.idade]
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("--------------------------")
    }
}

const adicionar = document.getElementById("btn_add");
const result = document.querySelector(".res")

const AddPessoa = ()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML= `Nome: ${p.getNome()}<br/> Idade: ${p.getIdade()}<br/><br/>`;
        result.appendChild(div);
    });

}

let pessoas =[];

adicionar.addEventListener("click", (e) => {
    result.innerHTML = ""
    const nome = document.getElementById("f_nome");
    const idade = document.getElementById("f_idade");
   
const p = new Pessoa(nome.value,idade.value);
console.log(nome.value)
if (nome.value== "" || idade.value == "") {
    alert("Coloca o nome da pessoa com a idade")
} else { 
    
pessoas.push(p)

nome.value="";
idade.value="";
nome.focus();
AddPessoa()
}
});
