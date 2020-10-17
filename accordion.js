'use strict';

const accordion = ({
    buttonsIdentifier,
    contentsIdentifier,
    wrappersIdentifier,
    active
}) => {
    const buttons = document.querySelectorAll(buttonsIdentifier),
          contents = document.querySelectorAll(contentsIdentifier);
        //   wrappers = document.querySelectorAll(wrappersIdentifier);

    buttons.forEach((button, i) => button.addEventListener('click', () => {
        if (!contents[i].classList.contains(active)) {
            contents.forEach(content => content.classList.remove(active));
            contents[i].classList.add(active);
        } else {
            contents[i].classList.remove(active);
        }
        
    }));
};

accordion({
    buttonsIdentifier: '.acco-block__head',
    contentsIdentifier: '.acco-block__content',
    wrappersIdentifier: '.acco-block__wrapper',
    active: 'acco-block__content---active'
});