$(document).ready(() => {
    let moreT = $('#says .client .more-t')
    let clientMoreActive = $('#says .client .more-t.active');
    let client = $('#says .client');
    new WOW().init();
    $('.product-title').click((e) => {
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('.products-item').hide();
        $('#' + id).show();
        $('.product-title').removeClass('active')
        currentElement.addClass('active')
        $('#' + id + ' .product-content').slick('refresh');
        $('#products-numbers').slick('refresh')
        $('.product').slick('refresh')
        $('.useful-content.s').slick('refresh')
    });
    $('#says .more-action').click((e) => {
        let more = $('#says .action .more-action');
        let moreActive = $('#says .action .more-action.active');
        let client = $('.client');
        more.hide();
        moreActive.show();
        client.addClass('active')
    });
    $('#says .action .more-action.active').click((e) => {
        let more = $('#says .action .more-action');
        let moreActive = $('#says .action .more-action.active');
        let client = $('.client');
        more.show();
        moreActive.hide();
        client.removeClass('active')
    });
    $(moreT[0]).click((e) => {
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


    $('.useful .more-action').click((e) => {
        let more = $('.useful .action .more-action');
        let moreActive = $('.useful .action .more-action.active');
        let client = $('.useful-item.s');
        more.hide();
        moreActive.show();
        client.addClass('active')
    });
    $('.useful .action .more-action.active').click((e) => {
        let more = $('.useful .action .more-action');
        let moreActive = $('.useful .action .more-action.active');
        let client = $('.useful-item.s');
        more.show();
        moreActive.hide();
        client.removeClass('active')
    });

    $('#form-content #forma .more-action').click((e) => {
        let more = $('#form-content #forma .more-action');
        let moreActive = $('#form-content #forma .more-action.active');
        let client = $('#form-content #forma #action-check');
        more.hide();
        moreActive.css('display', 'flex');
        client.css('display', 'flex');

    });
    $('#form-content #forma .more-action.active').click((e) => {
        let more = $('#form-content #forma .more-action');
        let moreActive = $('#form-content #forma .more-action.active');
        let client = $('#form-content #forma #action-check');
        more.css('display', 'flex');
        moreActive.hide();
        client.css('display', 'none');
    });
    $('#all .product-content').slick({
        slidesToShow: 1,
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
        centerMode: true,
        focusOnSelect: true,
        dots: false
    });

    $('.useful-content.s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '.useful-numbers',
        centerMode:true
    });
    $('.useful-numbers').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.useful-content.s',
        dots: false,
        infinite: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    });

    $('#form .action.b').click(() => {
            let name = $('#name')
            let phone = $('#telephone')
            let text = $('#text-area')
            let check = $('#action-check label input')
            let mistake = $('#forma .mistake')
            let mistakeAction = $('#forma .mistake-action')
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
                    $(mistakeAction).show();
                } else {
                    $(mistakeAction).hide();
                    moreAction.css('border-color', 'rgb(148, 181, 194)')
                    if (name.val() && phone.val() && text.val()) {
                        $.ajax({
                            type: 'POST',
                            url: 'mail.php',
                            data: 'name=' + name.val() + '&phone=' + phone.val() + '&check=' + $(check).serialize() + '&text=' + text.val(),
                            success: () => {
                                $('#thanks').css('display', 'flex');
                                $('#form-content').hide();
                            },
                            error: () => {
                                $('#thanks').css('display', 'flex');
                                $('#form-content').hide();
                                console.log(name.val())
                                console.log(phone.val())
                                console.log($(check).serialize())
                                console.log(text.val())
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
        let mistake = $('.col .mistake-footer');
        let follow = $('#footer-container .col #follow-input');
        let thanks = $('#footer-container .col .thanks')
        thanks.hide()
        input.css('border-color', 'rgb(245, 188, 47)')
        mistake.hide()
        if (!input.val()) {
            mistake.show()
            input.css('border-color', 'red')
        } else {
            follow.hide()
            thanks.css('display', 'flex')
        }
    });
    $('.header #burger svg').click(() => {
        $('.header #border-menu').show();
        $('.header #border-menu svg').show();
        $('.header #close-block').css('display', 'flex');
    });
    $('.header  #close-block').click(() => {
        $('.header #border-menu').hide();
        $('.header #close-block').css('display', 'none');
    });
    $('.header #menu .menu-item').click(()=>{
        $('.header #border-menu').hide();
        $('.header #close-block').css('display', 'none');
    });

    $('.header #menu #header-icon .icon-item').click(()=>{
        $('.header #border-menu').hide();
        $('.header #close-block').css('display', 'none');
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});