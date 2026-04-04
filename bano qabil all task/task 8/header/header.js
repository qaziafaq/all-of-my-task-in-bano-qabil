const header = {
    mount: '#header-mount',

    async render() {
        try {
            const response = await fetch('header/header.html');
            const html = await response.text();
            document.querySelector(this.mount).innerHTML = html;
        } catch (error) {
            console.error('Error loading header:', error);
        }
    },

    init() {
        this.render();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => header.init());
} else {
    header.init();
}
