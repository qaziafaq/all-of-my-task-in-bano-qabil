const app = {
    currentPage: 'home',

    router: {
        navigate(page) {
            if (!page) page = 'home';
            if (page === 'home') {
                app.currentPage = 'home';
                app.clearFunctionAssets();
                window.loadHero();
            } else if (page.startsWith('function/')) {
                const functionName = page.split('/')[1];
                app.currentPage = 'function';
                app.loadFunctionPage(functionName);
            }

            window.history.pushState({ page }, '', `#${page}`);
        }
    },

    clearFunctionAssets() {
        const cssLink = document.getElementById('function-style');
        const scriptTag = document.getElementById('function-script');

        if (cssLink) cssLink.remove();
        if (scriptTag) scriptTag.remove();

        if (window.runFunctionPage) {
            window.runFunctionPage = null;
        }
    },

    async loadFunctionPage(functionName) {
        const htmlPath = `function-${functionName}/${functionName}.html`;
        const cssPath = `function-${functionName}/${functionName}.css`;
        const jsPath = `function-${functionName}/${functionName}.js`;

        try {
            const response = await fetch(htmlPath);
            if (!response.ok) throw new Error('Page not found');
            const html = await response.text();
            document.getElementById('main-mount').innerHTML = html;

            app.clearFunctionAssets();

            const cssLink = document.createElement('link');
            cssLink.id = 'function-style';
            cssLink.rel = 'stylesheet';
            cssLink.href = cssPath;
            document.head.appendChild(cssLink);

            const scriptTag = document.createElement('script');
            scriptTag.id = 'function-script';
            scriptTag.src = jsPath;
            scriptTag.onload = () => {
                if (typeof window.runFunctionPage === 'function') {
                    window.runFunctionPage();
                }
            };
            document.body.appendChild(scriptTag);
        } catch (error) {
            document.getElementById('main-mount').innerHTML = '<div class="error-screen"><p>Function page not found.</p></div>';
            console.error(error);
        }
    },

    init() {
        const initialPage = window.location.hash.slice(1) || 'home';
        this.router.navigate(initialPage);

        window.addEventListener('popstate', (e) => {
            const page = e.state?.page || 'home';
            this.router.navigate(page);
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
