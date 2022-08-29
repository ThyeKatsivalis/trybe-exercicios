let pecaDeXadrez = "Torre"

switch (pecaDeXadrez) {
  case "peão":
  case "Peão":
    console.log("anda uma casa pra frente");
    break;

  case "Torre":
  case "torre":
    console.log("linha reta");
  break;

  case "Bispo":
  case "bispo":
    console.log("diagonal");
  break;

  case "Cavalo":
  case "cavalo":
    console.log("anda em L");
  break;

  case "Rei":
  case "rei":
    console.log("anda uma casa em qualquer direção");
  break;

  case "Rainha":
  case "rainha":
    console.log("Vertical, horizontal e diagonal");
  break;
    
  default:
    console.log("valor não identificado");
}