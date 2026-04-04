const footer = {
    mount: '#footer-mount',

    async render() {
        try {
            const response = await fetch('footer/footer.html');
            const html = await response.text();
            document.querySelector(this.mount).innerHTML = html;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    },

    init() {
        this.render();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => footer.init());
} else {
    footer.init();
}
