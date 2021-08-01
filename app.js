require([
    'app/view/camera',
    'app/registry',
    'app/loop',
    'app/components'
], function (
    Camera,
    Registry,
    Loop,
    Components
) {
    'use strict';

    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;

    /**
     * Loop animation function.
     */
    const draw = function () {
        requestAnimationFrame(draw);
        Loop.get().some((callback) => {
            callback();
        })
    }

    /**
     * Application object.
     */
    const App = {
        /**
         * Launch application.
         */
        launch: function () {
            let scene, camera, renderer;
            [scene, camera, renderer] = this.init();
            this.register(scene, camera, renderer);

            document.body.appendChild(renderer.domElement);
            window.addEventListener( 'resize', this.resize);

            Loop.add(() => this.render());

            for (const [name, component] of Object.entries(Components.get())) {
                component.init()
            }

            draw();
        },

        /**
         * Renderer loop callback.
         */
        render: function () {
            let renderer = Registry.get('renderer');
            let scene = Registry.get('scene');
            let camera = Registry.get('camera');
            renderer.render(scene, camera);
        },

        /**
         * Resize event listener.
         */
        resize: function () {
            let renderer = Registry.get('renderer');
            let camera = Registry.get('camera');
            let w = window.innerWidth;
            let h = window.innerHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        },

        /**
         * Register env.
         *
         * @param scene
         * @param camera
         * @param renderer
         */
        register: function (scene, camera, renderer) {
            Registry.set('scene', scene).set('camera', camera).set('renderer', renderer);
        },

        /**
         * Initialize webGl environment
         *
         * @returns {[Scene, PerspectiveCamera, WebGLRenderer]}
         */
        init: function () {
            let scene = this.getScene();
            let renderer = this.getRenderer();

            return [scene, Camera.init(), renderer];
        },

        /**
         * Create scene.
         *
         * @returns {Scene}
         */
        getScene: function () {
            return new THREE.Scene();
        },

        /**
         * Create renderer.
         *
         * @returns {WebGLRenderer}
         */
        getRenderer: function () {
            let renderer = new THREE.WebGLRenderer();
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.setSize(wWidth, wHeight);

            return renderer
        }
    }

    App.launch();
});