import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight, 
    1, 
    500
);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var offset = 0;

const colors = [
    0x0000ff,
    0x00ff00,
    0xff0000,
    0x00ffff
];

const iterations = colors.length;
const lines = [];

for (var index = 0; index < iterations; index++) {
    const points = [];
    const material = new THREE.LineBasicMaterial({ color: colors[index] });

    points.push(new THREE.Vector3(-10 + offset, 0 - offset, 0));
    points.push(new THREE.Vector3(0 + offset, 0 - offset, 0));
    points.push(new THREE.Vector3(10 + offset, 0 - offset, 0));
    points.push(new THREE.Vector3(0 + offset, 20 - offset, 0));
    points.push(new THREE.Vector3(-10 + offset, 0 - offset, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    offset += 2;

    lines.push(line);
    scene.add(line);
}

function animate() {
    requestAnimationFrame(animate);

    for (var index = 0; index < iterations; index++) {
        lines[index].rotation.z += 0.01 * ((index + 1) * 0.1);
    }

    renderer.render(scene, camera);
}

animate();