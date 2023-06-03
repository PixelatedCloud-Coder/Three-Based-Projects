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

var rows = 9;
var columns = 16;

var spaceBetweenRows = window.innerHeight / rows;
var spaceBetweenColumns = window.innerWidth / columns;

var widthFromCenter = window.innerWidth / 2;
var heightFromCenter = window.innerHeight / 2;

for (var row = 0; row < rows; row++) {
    const rowPoints = [];
    rowPoints.push(new THREE.Vector3(-widthFromCenter, heightFromCenter - spaceBetweenRows, 0));
    rowPoints.push(new THREE.Vector3(widthFromCenter, heightFromCenter, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(rowPoints);
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    
    spaceBetweenRows += spaceBetweenRows;
}

/*
for (var column = 0; column < columns; column++) {

}
*/

renderer.render(scene, camera);