document.querySelectorAll('.section-offer__item-name').forEach(element => {
    for (let point = 1; point < 4; ++point) {
        const $item = document.createElement('span');
        $item.classList.add('section-offer__point');
        element.after($item);
    }

});