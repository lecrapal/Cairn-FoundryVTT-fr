Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'cairn-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});