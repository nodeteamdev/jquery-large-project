const APPLICATION_NAME = 'app';

define(function () {
    $(function() {
        window.APPLICATION_NAME = APPLICATION_NAME;
        window[APPLICATION_NAME] = window[APPLICATION_NAME] || {};

        requirejs([
            'Elements', 
            'ModuleFirst', 
            'ModuleSecond'
        ]);
    });
});