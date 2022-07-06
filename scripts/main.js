const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
// const edges = new THREE.EdgesGeometry( geometry );
// const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
//scene.add( line );
face = 0;
camera.position.z = 5;
renderer.render( scene, camera );
function animateR() {
    id = requestAnimationFrame( animateR );
    cube.rotation.y -= Math.PI/150;
    renderer.render( scene, camera );
    setTimeout(function (){
        cube.rotation.y += Math.PI/150;
        //renderer.render( scene, camera );      
        cancelAnimationFrame( id );    
        }, 1000);
};
function animateL() {
    id = requestAnimationFrame( animateL );
    cube.rotation.y += Math.PI/150;
    renderer.render( scene, camera );
    setTimeout(function (){
        cube.rotation.y -= Math.PI/150;
        cancelAnimationFrame( id );          
        }, 1000);
    

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
// document.querySelector('html').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
// });
let left = document.querySelector("#left");
let right = document.querySelector("#right");
left.onclick = function() {
    onTurn();
    //cube.rotation.x += 0.01;
    animateL();
    if(face !== 0){
    face-=1;
    }
    else{
        face = 3;
    }
    document.querySelector('#info').textContent = face;
    
}
right.onclick = function() {
    onTurn();
    animateR();
    if(face !== 3){
        face+=1;
        }
        else{
            face = 0;
        }
    document.querySelector('#info').textContent = face;
    
}


//animate();


