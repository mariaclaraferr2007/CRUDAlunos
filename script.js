const listaAluno = [];
function cadastrarAluno() {
  const form = document.querySelector(".formularioCadastro");
  const resultado = document.querySelector(".resultadoCadastro");


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const instituicao = form.querySelector(".instituicao");
    const curso = form.querySelector(".curso");

    const aluno = criaAluno(nome.value, instituicao.value, curso.value);
    addAlunos(aluno);
    console.log(listaAluno);
    console.log(listaAluno.length);
    resultado.innerHTML = `Aluno ${aluno.nome} adicionado com sucesso!`;
    
  });

  function criaAluno(nome, instituicao, curso) {
    return aluno = {
      nome,
      instituicao,
      curso,
    }
  }

  function addAlunos(aluno){
    listaAluno.push(aluno);
  }

}

function buscarAluno() {
  const form = document.querySelector(".formularioBusca");
  const resultado = document.querySelector(".resultadoBusca");


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nomeBusca");

    buscarAluno(nome.value);

    
    
  });
  
  function buscarAluno(nome){
    for (let i of listaAluno){
      if (i.nome === nome) {
        resultado.innerHTML = `Aluno: ${i.nome} <br/> Instituição: ${i.instituicao} <br/> Curso: ${i.curso}`;
      }else {
        resultado.innerHTML = `Aluno ${nome} não encontrado`;
      } 
    }

  }
}

function deletarAluno() {
  const form = document.querySelector(".formularioDeletar");
  const resultado = document.querySelector(".resultadoDeletar");


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nomeDeletar");

    deletarAluno(nome.value);

    
    
  });
  
  function deletarAluno(nome){
    for (let i in listaAluno){
      if (listaAluno[i].nome === nome) {
        listaAluno.splice(i, 1);
        resultado.innerHTML = `Aluno: ${nome} deletado`;
      }else {
        resultado.innerHTML = `Aluno ${nome} não encontrado`;
      } 
    }

  }
}

function alterarAluno() {
  const form = document.querySelector(".formularioAlterar");
  const resultado = document.querySelector(".resultadoAlterar");


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const alunoAlterar = form.querySelector(".alunoAlterar");
    const nome = form.querySelector(".nomeAlterar");
    const instituicao = form.querySelector(".instituicaoAlterar");
    const curso = form.querySelector(".cursoAlterar");

    setAluno(alunoAlterar.value, nome.value, instituicao.value, curso.value);

    
    
  });
  
  function setAluno(aluno, nome, instituicao, curso){
    for (let i in listaAluno){
      if (listaAluno[i].nome === aluno) {
        listaAluno[i].nome = nome;
        listaAluno[i].instituicao = instituicao;
        listaAluno[i].curso = curso;
        resultado.innerHTML = `Aluno ${aluno} alterado <br/> Nome: ${listaAluno[i].nome} <br/> Instituição: ${listaAluno[i].instituicao} <br/> Curso: ${listaAluno[i].curso}`;
      }else {
        resultado.innerHTML = `Aluno ${aluno} não encontrado`;
      } 
    }
    
  }
  

}



cadastrarAluno();
buscarAluno();
deletarAluno();
alterarAluno();
