define(function () {
    const elements = document.querySelectorAll('[id]');
    
    window[APPLICATION_NAME].elements = {};

    elements.forEach((element) => {
        const id = element.getAttribute('id');

        window[APPLICATION_NAME].elements[id] = $(element);
    });
});