// Função para ativar o tooltip do bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// Função para trocar o botão de pesquisa pelo edit de pesquisa:

function btnPesquisarClick(elmentName) {
    var btnPesquisar = document.getElementById('btnPesquisar');
    var divCollapseExample = document.getElementById('divCollapseExample');

    if (elmentName == 'btnPesquisar') {
        btnPesquisar.style.display = 'none';
    } else {
        btnPesquisar.style.display = 'contents';
        // divCollapseExample.display = 'none';
    }
}