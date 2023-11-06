$(document).ready(function () {
    // Anchor Smooth Scroll
    $(document).on('click', '.wester_positive a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.l-header').outerHeight()
        }, 500);
    });

    // Js Hide/show Data
    $('.js-toggle-show').on('click', function () {
        $(this).toggleClass('is-close');
        if ($('.js-toggle-show').hasClass('is-close')) {
            $('.js-close-data').addClass('is-visible');
        }
        else {
            $('.js-close-data').removeClass('is-visible');
        }
    });

    // Js Animation

    setTimeout(function () {
        $('.mv-anchor__img.js-bounce').each(function () {
            $(this).addClass("in");
        });
    }, 1500);

    $(window).on('load scroll', function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
        $('.js-bounce').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight) {
                $(this).addClass("in");
            }
        });
        $('.js-fadeUp').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight) {
                $(this).addClass("on");
            }
        });
    });


    // Modal Box
    const modals = document.querySelectorAll(".js-modal");
    // Get modal open buttons
    const openModalBtns = document.querySelectorAll(".js-modal-link");
    // Initialize Swiper sliders for each modal
    const swiperInstances = {};

    openModalBtns.forEach(function (openModalBtn) {
        openModalBtn.addEventListener("click", function () {
            const targetModalId = openModalBtn.getAttribute("data-target");
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.classList.add("is-active");

                // Initialize Swiper if it hasn't been initialized yet
                if (!swiperInstances[targetModalId]) {
                    swiperInstances[targetModalId] = new Swiper(
                        `#${targetModalId} .swiper`,
                        {
                            navigation: {
                                nextEl: `#${targetModalId} .swiper-button-next`,
                                prevEl: `#${targetModalId} .swiper-button-prev`,
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            spaceBetween: 30,
                        }
                    );
                }
            }
        });
    });

    // Function to close modals
    function closeModal() {
        modals.forEach(function (modal) {
            modal.classList.remove("is-active");
        });
    }

    // Event listener for closing modals
    const closeModalBtns = document.querySelectorAll(".js-close-modal");
    closeModalBtns.forEach(function (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    });

    // Position changes when reach in footer
    var colorBox;
    if ($('.l-header').find('.l-header__color-box').hasClass('.l-header__color-box')) {
        colorBox = $('.l-header__color-box').innerHeight();
    } else {
        colorBox = 0
    }

    $headerheight = ($('.l-header').innerHeight() + 40) - colorBox;
    $('.mv-anchor, .mv-campaign').css('top', $headerheight + 'px');
    $(window).scroll(function () {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".c-wester-app").innerHeight() + $(".c-banner-block").innerHeight() + $(".l-footer").innerHeight();
        if (scrollHeight - scrollPosition <= footHeight) {
            $('.wester_positive__bg').css('position', 'absolute');
        } else {
            $('.wester_positive__bg').css('position', 'fixed');
        }
    });

});