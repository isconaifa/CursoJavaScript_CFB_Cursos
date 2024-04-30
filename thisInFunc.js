function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;
    this.dados_anonimo=function(){
        setTimeout(function(){
            //this.nome = nome;
            //this.nota = nota;
            console.log(this.nome);
            console.log(this.nota);
        },2000)
    }


    this.dados_arrow=function(){
        setTimeout(()=>{
            //this.nome = nome;
            //this.nota = nota;
            console.log(this.nome);
            console.log(this.nota);
        },2000)
    }
}

const aluno1 = new aluno("Ricky", 100);
aluno1.dados_anonimo();
aluno1.dados_arrow();
//console.log(aluno1)