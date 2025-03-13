

let NomePersonagem = prompt("Digite o nome do seu personagem:" );
let XP = parseInt(prompt("Digite o XP do seu personagem: "));

switch (Personagem) {
    case XP < 1000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Ferro");
        break;
    case XP >= 1001 && XP <= 2000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Bronze");
        break;
    case XP >= 2001 && XP <= 5000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Prata");
        break;
    case XP >= 5001 && XP <= 7000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Ouro");
        break;
    case XP >= 7001 && XP <= 8000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Platina");
        break;
    case XP >= 8001 && XP <= 9000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Ascendente");
        break;
    case XP >= 9001 && XP <= 10000:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Imortal");
        break;
    case XP >= 10001:
        console.log("Seu personagem " + NomePersonagem + " é de Nível Radiante");
        break;
}
