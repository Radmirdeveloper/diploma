$(document).ready(() => {
    let moreT =$('.client .more-t')
    new WOW().init();
    $('.product-title').click((e) => {
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('.products-item').hide();
        $('#' + id).show();
        $('.product-title').removeClass('active')
        currentElement.addClass('active')
        $('#' + id + ' .product').slick('refresh');
        $('#' + id + ' #products-numbers').slick('refresh');
    });
    $('.action .more-action').click((e) => {
        let more = $('#says .action .more-action');
        let moreActive = $('#says .action .more-action.active');
        let client = $('.client');
        more.hide();
        moreActive.show();
        client.addClass('active')
        $(moreActive).click((e) => {
            more.show();
            moreActive.hide();
            client.removeClass('active')
        });
    });

    $(moreT[0]).click((e) => {
        let client = $('.client');
        if (e.target) {
            $(client[0]).addClass('active')
            $(moreT[0]).addClass('active')
        }
        $('.client .more-t.active').click((e) => {
                if (e.target) {
                    $(client[0]).removeClass('active')
                    $(moreT[0]).removeClass('active')
                }
        });
    });
    $(moreT[1]).click((e) => {
        let client = $('.client');
        if (e.target) {
            $(client[1]).addClass('active')
            $(moreT[1]).addClass('active')
        }
        $('.client .more-t.active').click((e) => {
                if (e.target) {
                    $(client[1]).removeClass('active')
                    $(moreT[1]).removeClass('active')
                }
        });
    });
    $(moreT[2]).click((e) => {
        let client = $('.client');
        if (e.target) {
            $(client[2]).addClass('active')
            $(moreT[2]).addClass('active')
        }
        $('.client .more-t.active').click((e) => {
                if (e.target) {
                    $(client[2]).removeClass('active')
                    $(moreT[2]).removeClass('active')
                }
        });
    });
    $('#useful .more-action').click((e) => {
        let more = $('#useful .action .more-action');
        let moreActive = $('#useful .action .more-action.active');
        let client = $('.useful-item.s');
        more.hide();
        moreActive.show();
        client.addClass('active')
        $(moreActive).click((e) => {
            more.show();
            moreActive.hide();
            client.removeClass('active')
        });
    });
    $('#form-content #forma .more-action').click((e) => {
        let more = $('#form-content #forma .more-action');
        let moreActive = $('#form-content #forma .more-action.active');
        let client = $('#form-content #forma #action-check');
        more.hide();
        moreActive.show();
        client.css('display', 'flex');
        $(moreActive).click((e) => {
            more.show();
            moreActive.hide();
            client.hide();
        });
    });
    $('#all .product-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#all .products-numbers'
    });
    $('#all .products-numbers').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '#all .product-content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });

    $('.useful-content.s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '.useful-numbers'
    });
    $('.useful-numbers').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.useful-content.s',
        dots: false,
        infinite: false,
        centerMode: true,
        arrows:false,
        focusOnSelect: true
    });

    $('#form .action.b').click(() => {
            let name = $('#name')
            let phone = $('#telephone')
            let text = $('#text-area')
            let check = $('#action-check label input')
            let mistake = $('.mistake')
            let needValidation = $('.validation')
            let moreAction = $('#form-content #forma .more-action')
            mistake.hide()
            $(mistake[2]).hide()
            needValidation.css('border-color', 'rgb(148, 181, 194)')
            moreAction.css('border-color', 'rgb(148, 181, 194)')
            for (let i = 0; i < needValidation.length; i++) {
                if ($(needValidation[i]).val()) {
                    $(mistake[i]).hide()
                    needValidation.css('border-color', 'rgb(148, 181, 194)')
                } else if (!$(needValidation[i]).val()) {
                    $(mistake[i]).show()
                    $(needValidation[i]).css('border-color', 'red')
                }
            }
            for (let i = 0; i < check.length; i++) {
                if (!check[i].checked) {
                    moreAction.css('border-color', 'red');
                    $(mistake[2]).show();
                } else {
                    $(mistake[2]).hide();
                    moreAction.css('border-color', 'rgb(148, 181, 194)')
                    if (name.val() && phone.val() && text.val()) {
                        $.ajax({
                            type: 'POST',
                            url: 'mail.php',
                            data: 'name=' + name.val() + '&phone=' + phone.val() + '&check=' + $(check[i]).val() + '&text=' + text.val(),
                            success: () => {
                                $('#thanks').css('display', 'flex');
                                $('#form-content').hide();
                            },
                            error: () => {
                                alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                            }
                        });
                    }
                    return
                }
            }
        }
    );
    $('#footer-container .col #follow-input .action.b').click(() => {
        let input = $('#footer-container .col #follow-input input');
        let mistake = $('.col .mistake-footer')
        input.css('border-color', 'rgb(245, 188, 47)')
        mistake.hide()
        if (!input.val()) {
            mistake.show()
            input.css('border-color', 'red')
        }
    });
    $('.header #burger svg').click(() => {
        $('.header #border-menu').show();
        $('.header #border-menu svg').show();
        $('.header #close').css('display', 'block');
        ;
        $('.header #burger').css('display', 'none');
        ;
    });
    $('.header  #close').click(() => {
        $('.header #border-menu').hide();
        $('.header #close').css('display', 'none');
        $('.header #burger').css('display', 'block');
        ;
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});