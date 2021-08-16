let container;
let camera;
let renderer;
let scene;
let head;

function init() {
    container = document.querySelector('.scene');
    // Create Scene
    scene = new THREE.Scene();
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500; 
    // Setup camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0.01, 0.4, 5);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(0,1,0.9);
    scene.add(light);    
    // Renderer
    renderer = new THREE.WebGLRenderer({antialias:false, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(0.3);
    container.appendChild(renderer.domElement);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    // Load model
    let loader = new THREE.GLTFLoader();
    loader.load('../3d/kawashima.glb', function(gltf) {
        scene.add(gltf.scene);
        head = gltf.scene.children[0];
        head.rotation.z = -0.5;
        head.rotation.x = 1.5;
        // Head Y position
        let posYTweenStart = new TWEEN.Tween(head.position)
            .to({x: 0, y: 0.1}, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .yoyo(true)
            .repeat(Infinity);
        // Head Z rotation
        let rotZTweenStart = new TWEEN.Tween(head.rotation)
            .to({x: 1.5, y: 0, z: 0.5}, 5000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .yoyo(true)
            .repeat(Infinity);
        posYTweenStart.start();
        rotZTweenStart.start();
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    TWEEN.update();
    requestAnimationFrame(animate);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

init();


