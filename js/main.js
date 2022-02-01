$(document).ready(() => {
    let moreT = $('#says .client .more-t')
    let clientMoreActive = $('.client .close-button');
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
        let clientHide = $('.client.hide')
        more.hide();
        moreActive.show();
        client.addClass('active')
        clientHide.show()
    });
    $('#says .action .more-action.active').click((e) => {
        let more = $('#says .action .more-action');
        let moreActive = $('#says .action .more-action.active');
        let client = $('.client');
        let clientHide = $('.client.hide')
        more.show();
        moreActive.hide();
        client.removeClass('active')
        clientHide.hide()
    });
    /*   $(moreT[0]).click((e) => {
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
       $(moreT[3]).click((e) => {
           if (e.target) {
               $(client[3]).addClass('active')
               $(moreT[3]).addClass('active')
           }
           $('.client .more-t.active').click((e) => {
               if (e.target) {
                   $(client[3]).removeClass('active')
                   $(moreT[3]).removeClass('active')
               }
           });
       });
       $(moreT[4]).click((e) => {
           if (e.target) {
               $(client[4]).addClass('active')
               $(moreT[4]).addClass('active')
           }
           $('.client .more-t.active').click((e) => {
               if (e.target) {
                   $(client[4]).removeClass('active')
                   $(moreT[4]).removeClass('active')
               }
           });
       });
       $(moreT[5]).click((e) => {
           if (e.target) {
               $(client[5]).addClass('active')
               $(moreT[5]).addClass('active')
           }
           $('.client .more-t.active').click((e) => {
               if (e.target) {
                   $(client[5]).removeClass('active')
                   $(moreT[5]).removeClass('active')
               }
           });
       });*/
    for (let i = 0; i < moreT.length; i++) {
        $(moreT[i]).click((e) => {
            if (e.target) {
                $(moreT[i]).hide()
                $(client[i]).addClass('active')
                $(clientMoreActive[i]).show()
                e.preventDefault()
            }
        });
    }


    for (let i = 0; i < moreT.length; i++) {
        $(clientMoreActive[i]).click((e) => {
            if (e.target) {
                $(moreT[i]).show()
                $(clientMoreActive[i]).hide()
                $(client[i]).removeClass('active')
                e.preventDefault()
            }
        });
    }



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

    $('#soft .product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#soft .products-numbers'
    });
    $('#soft .products-numbers').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#soft .product-content',
        centerMode: true,
        focusOnSelect: true,
        dots: false
    });
    $('#bed .product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#bed .products-numbers'
    });
    $('#bed .products-numbers').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '#bed .product-content',
        centerMode: true,
        focusOnSelect: true,
        dots: false
    });

    $('#furnit .product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#furnit .products-numbers'
    });
    $('#furnit .products-numbers').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '#furnit .product-content',
        centerMode: true,
        focusOnSelect: true,
        dots: false
    });
    $('#table .product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#table .products-numbers'
    });
    $('#table .products-numbers').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '#table .product-content',
        centerMode: true,
        focusOnSelect: true,
        dots: false
    });
    $('#decor .product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: '#decor .products-numbers'
    });
    $('#decor .products-numbers').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '#decor .product-content',
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
        centerMode: true
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
        $('.header #burger-menu').addClass('active');
        $('.header #border-menu svg').show();
        $('.header #close-block').css('display', 'flex');
    });
    $('.header  #close-block').click(() => {
        $('.header #burger-menu').removeClass('active');
        $('.header #close-block').css('display', 'none');
    });
    $('.header #burger-menu').click(() => {
        $('.header #burger-menu').removeClass('active');
        $('.header #close-block').css('display', 'none');
    });


    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});