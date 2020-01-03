define(function () {
    const secondBlockClick = () => {
        console.log('secondBlockClick');
    };

    app.elements.secondBlock.on('click', secondBlockClick);
});