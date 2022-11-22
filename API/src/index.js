async function main(){
try{
  if(await getResultado(5) > 10){
    console.log("O valor que retornou é maior que 10");
     if(await getResultado(3)< 10) {
       console.log('O valor é menor que 10');
     }
  }
} catch(err) {
  console.log('deu erro');
  console.log(err);
}
//-------------------------------------------------------------------------
// getResultado (5)
// .then((resultado)=>{
//    console.log('O valor que retornou é maior que 10');
//   getResultado(3)
//    .then((result) =>{
//       console.log('O valor que retornou é menor que 10');
//      }).catch((erro) =>{
//       console.log("deu erro");
//       console.log(erro);
//      })
//   }).catch((err) =>{
//     console.log("deu erro");
//     console.log(err);
//   })
}

main();

function getResultado(parametro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(parametro * 2.5);
    }, 3000);
  });
}
