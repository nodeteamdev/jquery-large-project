define(function () {
    const firstBlockClick = () => {
        console.log('firstBlockClick');
    };

    app.elements.firstBlock.on('click', firstBlockClick);
});