'use strict';

const accordion = ({
    buttonsIdentifier,
    contentsIdentifier,
    wrappersIdentifier,
    active
}) => {
    const buttons = document.querySelectorAll(buttonsIdentifier),
          contents = document.querySelectorAll(contentsIdentifier),
          wrappers = document.querySelectorAll(wrappersIdentifier);

    const openContent = (height, i) => contents[i].style.height = height;

    const closeContent = i => contents[i].style.height = '0px';

    const closeAllContents = () => contents.forEach(content => content.style.height = '0px');

    const addActiveClass = i => {
        buttons.forEach(button => button.classList.remove(active));
        buttons[i].classList.add(active);
    };

    const removeActiveClass = i => buttons[i].classList.remove(active);

    const buttonClickEvent = i => {
        const wrappHeight = window.getComputedStyle(wrappers[i]).height;

        if (+contents[i].style.height.replace(/px/, '') === 0) {
            if (active) { addActiveClass(i); }
            closeAllContents();
            openContent(wrappHeight, i);
        } else {
            if (active) { removeActiveClass(i); }
            closeContent(i);
        }
    }

    buttons.forEach((button, i) => button.addEventListener('click', () => buttonClickEvent(i) ));
};

export default accordion;

// *** If you want to test, uncomment the code below and comment out the export *** //

// accordion({
//     buttonsIdentifier: '.acco-block__head',
//     contentsIdentifier: '.acco-block__content',
//     wrappersIdentifier: '.acco-block__wrapper',
//     active: 'acco-block__content---active'
// });