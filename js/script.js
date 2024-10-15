// Three.js setup
// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// let renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('3d-model').appendChild(renderer.domElement);

// // Ambient light
// let ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// // Position the camera
// camera.position.set(0, 2, 5);
// camera.lookAt(0, 0, 0);

// // Load the 3D model using GLTFLoader
// const loader = new THREE.GLTFLoader();
// loader.load('models/hydraulic_press.glb', function (gltf) {
//     const model = gltf.scene;
//     model.scale.set(0.5, 0.5, 0.5);
//     scene.add(model);
//     animate();
// }, undefined, function (error) {
//     console.error('Error loading model:', error);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// Responsive resizing
window.addEventListener('resize', function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Pascal's Law calculation
function calculate() {
    const inputForce = parseFloat(document.getElementById('inputForce').value);
    const largePiston = parseFloat(document.getElementById('largePiston').value);
    const smallPiston = parseFloat(document.getElementById('smallPiston').value);
    const outputForce = parseFloat(document.getElementById('outputForce').value);

    let result;
    if (isNaN(inputForce)) {
        result = (outputForce * smallPiston) / largePiston;
        document.getElementById('inputForce').value = result.toFixed(2);
    } else if (isNaN(largePiston)) {
        result = (outputForce * smallPiston) / inputForce;
        document.getElementById('largePiston').value = result.toFixed(2);
    } else if (isNaN(smallPiston)) {
        result = (outputForce * largePiston) / inputForce;
        document.getElementById('smallPiston').value = result.toFixed(2);
    } else if (isNaN(outputForce)) {
        result = (inputForce * largePiston) / smallPiston;
        document.getElementById('outputForce').value = result.toFixed(2);
        document.getElementById('outputForceDisplay').textContent = result.toFixed(2);
    } else {
        alert("Please leave one box empty to calculate!");
    }
}

// Reset input fields
function resetFields() {
    document.getElementById('inputForce').value = '';
    document.getElementById('largePiston').value = '';
    document.getElementById('smallPiston').value = '';
    document.getElementById('outputForce').value = '';
    document.getElementById('outputForceDisplay').textContent = '0';
}
