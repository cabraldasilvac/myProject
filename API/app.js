const app = require('express')();

app.listen(3000, (req, res) =>{
  console.log('Servidor rodando...');
});

app.get ('/empregados/ti', (req, res)=>{
  res.send(empregados);
});

app.post ('/empregados/ti', (req, res)=>{
  let novoFuncionario = {
    nome: req.headers.nome,
    funcao: req.headers.funcao
  }
  empregados.push(novoFuncionario);
  res.send('funcionário inserido com sucesso!');
});

app.put('/empregados/ti/:id', (req, res)=>{
  for(const empregado of empregados){
    if (empregado.nome === req.params.id){
      res.send(empregado);
      return;
    }
  }
  res.send('Não foi possível encontra o empregado' + req.params.id);
});

const empregados = [
{
  nome: "Wanderley",
  funcao: 'desenvolvedor'
},
{
  nome: "Samuel",
  funcao: 'engenheiro de software'
},
{
  nome: "Marly",
  funcao: 'secretaria'
}
];