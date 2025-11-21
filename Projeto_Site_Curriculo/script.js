/**
 * ARQUIVO: script.js
 * FUNÇÃO: Adiciona interatividade básica ao site, como menu responsivo.
 */

// 1. ADICIONAR UM BOTÃO (ÍCONE DE HAMBURGUER) NA NAVEGAÇÃO
// Para que esta função funcione, precisamos modificar o HTML para incluir o botão.

// O código abaixo espera que você adicione um botão de menu na sua tag <nav> no HTML:
/* Exemplo de HTML que você deve adicionar DENTRO da tag <nav>:
    <button class="menu-toggle" aria-label="Abrir Menu">☰</button> 
*/

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos principais
    const navUl = document.querySelector('#header nav ul');
    
    // Cria o botão de alternância do menu (Menu Hamburguer)
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.setAttribute('aria-label', 'Abrir/Fechar Menu');
    menuToggle.innerHTML = '&#9776;'; // Símbolo do hambúrguer ☰

    // Adiciona o botão dentro da tag <nav>
    const nav = document.querySelector('#header nav');
    if (nav) {
        nav.prepend(menuToggle); // Coloca o botão antes da lista <ul>
        // Por padrão, a lista <ul> estará escondida em telas pequenas via CSS.
        navUl.classList.add('hidden-mobile'); // Adiciona uma classe para o CSS controlar o estado inicial
    }

    // 2. FUNÇÃO DE ALTERNAR O MENU
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' na lista <ul> da navegação.
        // O CSS fará o menu aparecer/desaparecer baseado nesta classe.
        navUl.classList.toggle('active');

        // Altera o conteúdo do botão (para X ou Hambúrguer) para feedback visual.
        const isMenuOpen = navUl.classList.contains('active');
        menuToggle.innerHTML = isMenuOpen ? '×' : '&#9776;'; // '×' é um X de fechar
        menuToggle.setAttribute('aria-expanded', isMenuOpen);
    });

    // 3. FECHAR O MENU AO CLICAR EM UM LINK (bom para UX móvel)
    const navLinks = document.querySelectorAll('#header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se o menu está aberto antes de tentar fechar
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                menuToggle.innerHTML = '&#9776;'; // Volta para o ícone de hambúrguer
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});