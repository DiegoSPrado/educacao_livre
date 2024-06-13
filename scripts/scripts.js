/*Esse script faz com que adicione 2 constantes (que uma é paara abrir o menu e a outra para fechar) e elas estao dentro de uma função. E na função do menuToggle, ela adiciona um 'listener', que ao clicar nele, se ativara o active e nele no css, faz com q o display seja flex, pois o na css .menu ele está none.   */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('ham-menu');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

