$(document).ready(function() {

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
    ///AJAX отправка формы
    $("#submit").on("click", function() {

        var name = $("#name").val(); // Получаем имя
        var email = $("#email").val(); // Получаем e-mail
        var phone = $("#phone").val();
        var message = $("#message").val(); // Получаем сообщение

        $.ajax({

            url: "/mail.php", // Куда отправляем данные (обработчик)
            type: "post",

            data: {
                "name": name,
                "email": email,
                "phone": phone,
                "message": message
            },

            success: function(data) {
                var data = "Форма успешно отправлена";
                $(".result").html(data); // Выводим результат

            }

        });

    });



    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({ until: austDay, format: 'yowdHMS' });

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $("a.gallery-item_img").fancybox();
    $("a.test").fancybox();
    $(".fancybox").fancybox();

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function(direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, { offset: 100 });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function() {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='images/prev.png'>", "<img src='images/next.png'>"],
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(".owl-carousel2").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='images/prev.png'>", "<img src='images/next.png'>"],
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });


    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function() {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });




    //прилипающее меню
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            if ($(".top_2").hasClass("top_2_fixed") == false) {
                $(".top_2").addClass("top_2_fixed");
            }
        } else $(".top_2").removeClass("top_2_fixed");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            if ($(".header").hasClass("header__fixed") == false) {
                $(".header").addClass("header__fixed");
            }
        } else $(".header").removeClass("header__fixed");
    });

});