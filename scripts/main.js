
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'gray' } );
const cube = new THREE.Mesh( geometry, material );
const deg = new THREE.Euler(0, 2 , 0);
scene.add( cube );
// const edges = new THREE.EdgesGeometry( geometry );
// const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
//scene.add( line );web-projects/animations/index.html
face = 0;
camera.position.z = 5;
renderer.render( scene, camera );
function animateR() {
    angle -= Math.PI/150;
    cube.rotation.y -= Math.PI/150;
    if(angle <= -Math.PI/2){
        cancelAnimationFrame( id );
    }
    else{
        id = requestAnimationFrame( animateR );
        renderer.render( scene, camera );
    }
    
    // setTimeout(function (){
    //     cube.rotation.y += Math.PI/150;  //think the cube keeps spinning, scene shown to user just cuts off at the right time, then picks up when button pressed again
    //     //renderer.render( scene, camera );      
    //     cancelAnimationFrame( id );    
    //     }, 1000);
};
function animateL() {
    angle += Math.PI/150;
    cube.rotation.y += Math.PI/150;
    if(angle >= Math.PI/2){
        cancelAnimationFrame( id );
    }
    else{
        id = requestAnimationFrame( animateL );
        renderer.render( scene, camera );
    }
};
function onTurn(){
    document.getElementById("left").disabled = true;
    document.getElementById("right").disabled = true;
    document.querySelector('#info').style.visibility = "hidden";
    setTimeout(function (){
        document.getElementById("left").disabled = false;
        document.getElementById("right").disabled = false;
        document.querySelector('#info').style.visibility = "visible";
    }, 1100);
}

function animate(){
    id = requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
// document.querySelector('html').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
// });
let left = document.querySelector("#left");
let right = document.querySelector("#right");

// let chev = document.querySelector(".chevron");
// chev.onclick = function(){
//     alert("afd");
// }
left.onclick = function() {
    angle = 0;
    onTurn();
    id = requestAnimationFrame( animateL );
    renderer.render( scene, camera );

    if(face !== 0){
    face-=1;
    }
    else{
        face = 3;
    }
    document.querySelector('#info').textContent = descriptions[face];
    
}
right.onclick = function() {
    angle = 0;
    onTurn();
    id = requestAnimationFrame( animateR );
    renderer.render( scene, camera );
    
    if(face !== 3){
        face+=1;
        }
        else{
            face = 0;
        }
    document.querySelector('#info').textContent = descriptions[face];
    
}

var descriptions = ['face 0', 'face 1', 'face 2', 'face 3'];


//animate();


