// hello world

//let e const qual a diferença? simples
//let você pode mudar a qualquer hora, já const não é fixo

let meta = {
    value: 'ler um livro por mês',
    checked: true,
}
  let metas = [
    meta,
    {
     value: "caminhar 20 minutos todos os dias",
     checked: false
    }

]   
  console.log(metas[1].value)