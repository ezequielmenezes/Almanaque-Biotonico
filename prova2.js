// ESPERA O HTML CARREGAR

document.addEventListener("DOMContentLoaded", () => {

    // ANO AUTOMÁTICO

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // BOTÕES DAS PIADAS

    const botoes = document.querySelectorAll(".piada-btn");

    botoes.forEach((botao) => {

        botao.addEventListener("click", (event) => {
            event.preventDefault();
            const card = botao.closest('.piada-card');
            const resposta = card ? card.querySelector('.piada-resposta') : null;

            if (resposta) {
                resposta.classList.toggle("mostrar");
            }
        });

    });

    // NAV MOBILE TOGGLE
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a nav link is clicked (mobile)
        mainNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

});

