const subtext = document.querySelector('.subtext');


const changeText = [
    'Father',
    'Husband',
    'Gamer',
    'Friend',
    'Artist',
    'Survivor',
    'Web Developer'
];

const interval = 1500;

function delayChangeText(element) {
    changeText.forEach(function(el, index) {
        setTimeout(function() {
            element.textContent = el;
        }, index * interval);
    });
}

subtext.addEventListener('load', delayChangeText(subtext));

// play animation when viewport scrolls

(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();