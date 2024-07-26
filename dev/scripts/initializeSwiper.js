const mediaQuery = window.matchMedia(`(max-width: 615px)`);
const isLess = mediaQuery.matches;

// eslint-disable-next-line no-undef
const swiper = new Swiper(`.mySwiper`, {
    spaceBetween: isLess ? 16 : 32,
    slidesPerView: `auto`,
    slidesOffsetBefore: isLess ? 16 : 80,
    slidesOffsetAfter: isLess ? 16 : 80,
});

mediaQuery.onchange = function (event) {
    const isLess = event.target.matches;

    swiper.params.spaceBetween = isLess ? 16 : 32;
    swiper.params.slidesOffsetBefore = isLess ? 16 : 80;
    swiper.params.slidesOffsetAfter = isLess ? 16 : 80;

    swiper.update();
};
