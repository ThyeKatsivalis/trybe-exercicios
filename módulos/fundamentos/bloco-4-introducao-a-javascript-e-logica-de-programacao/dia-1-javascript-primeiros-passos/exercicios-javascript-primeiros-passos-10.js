// 2 constantes valores custo e valor de venda

const produtoCusto = 100;
const produtoVenda = 250;
let imposto = 0.2
let produtoImposto = produtoCusto * imposto
let produtoLucro = produtoVenda - produtoCusto - produtoImposto
 
if(produtoLucro > 0) {
    console.log (produtoLucro * 1000)
}

