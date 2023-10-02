// window.alert("Oi");

/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

/* console.log(document) = document = Acessar a pagina para pegar os botoes, console.log() = imprime os dados dentro dos parenteses dentro do navegador */
/* documente.getElementeById("chopper"); = Pega um elemento do HTML pelo ID */
/* const botao = console.log(document.getElementById('chopper')); = A partir do js conseguimos pegar um elemnto no HTML */
// console.log(botao);

const botoes = document.querySelectorAll(".botao"); /* Pega todos os elementos que tem a classe .botao */
/*console.log(botoes); = Inprimiu uma lista com os botoes */
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => { /* Ver o indece dos elementos botoes */
	botao.addEventListener("click", () => { /* Aceita mais de um argumento */
		desselecionarBotao();
		desselecionarPersonagem();

		botao.classList.add("selecionado"); /* Adiciona */
		personagens[indice].classList.add("selecionado"); /* Adiciona ao indece selecionado a classe selecionado */
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado"); /* Remove e coloca as informações */
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado"); /* Remove a classe selecionado */
}
