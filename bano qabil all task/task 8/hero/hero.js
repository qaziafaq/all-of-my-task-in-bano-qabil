const hero = {
    mount: '#main-mount',

    async render() {
        try {
            const response = await fetch('hero/hero.html');
            const html = await response.text();
            document.querySelector(this.mount).innerHTML = html;
        } catch (error) {
            console.error('Error loading hero:', error);
        }
    },

    init() {
        this.render();
    }
};

window.loadHero = function() {
    hero.render();
};
