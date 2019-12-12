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


$('.cards').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
        // responsive: [{
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
});



//carrocel principal

$(function() {
    var width = (parseInt($('.carrossel .item').outerWidth() + parseInt($('.carrossel .item').css('margin-rigth')))) * $('.carrossel .item').length;
    $('carrossel').css('width', width);

    var numImages = 4; //quantidades de imagens no carrossel//
    var MarginPadding = 150; //esse valor fui testando, quando colocar os cards, testar também//

    var ident = 0;
    var count = ($('.carrossel .item').length / numImages) - 1;
    var slide = (numImages * MarginPadding) + ($('.carrossel img').outerWidth() + numImages);

    $('.forth').click(function() {
        if (ident < count) {
            ident++;
            $('.carrossel').animate({ 'margin-left': '-=' + slide + 'px' }, '500'); //esse valor de '500' é a velocidade de passagem das imagens//
        }

    });

    $('.back').click(function() {
        if (ident >= 1) {
            ident--;
            $('.carrossel').animate({ 'margin-left': '+=' + slide + 'px' }, '800');
        }

    });
});