window.addEventListener('DOMContentLoaded', function() {
    const viewers = document.querySelectorAll('.model-viewer');
    Array.from(viewers).forEach(viewer => {
        const MTL = viewer.getAttribute('mtl');
        const OBJ = viewer.getAttribute('obj');
        const aspectRatio = () => viewer.clientWidth / viewer.clientHeight;

        // Initialize Environment
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(viewer.clientWidth, viewer.clientHeight);
        viewer.appendChild(renderer.domElement);
  
        const camera = new THREE.PerspectiveCamera(45, aspectRatio(), 1, 1500);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);
  
        const scene = new THREE.Scene();
  
        const light = new THREE.AmbientLight(0x6F6F6F);
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10).normalize();
        scene.add(directionalLight);

        // Add OrbitControls for pan, zoom, and rotate
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Add smooth damping (inertia)
        controls.dampingFactor = 0.05; // Adjust damping strength
        controls.screenSpacePanning = true; // Allow panning in screen space
        controls.minDistance = 5; // Minimum zoom distance
        controls.maxDistance = 1000; // Maximum zoom distance

        // Load MTL files
        const mtlLoader = new THREE.MTLLoader();
        mtlLoader.load(
            MTL,    // mtl to load
            (materials) => {
                materials.preload();
  
                // OBJ Loader | Initialize with MTL
                const objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    OBJ,
                    (object) => {
                        // Get Object Dimensions
                        const bounds = new THREE.Box3().setFromObject(object);
                        const size = new THREE.Vector3();
                        bounds.getSize(size);
  
                        // Center the Object
                        const center = bounds.getCenter(new THREE.Vector3());
                        object.position.sub(center);
                        scene.add(object);
  
                        // Distance the Camera to always show 2*Object Height at all times | 50% spacing below object and 50% spacing above
                        const boundingSphere = bounds.getBoundingSphere(new THREE.Sphere());
                        const cameraDistance = boundingSphere.radius / Math.tan((Math.PI / 180) * camera.fov / 2);
                        camera.position.set(0, 0, cameraDistance); // Set camera.position.y to 0
                        camera.lookAt(scene.position);
  
                        object.traverse((child) => {
                            if (child.isMesh) {
                                child.material.side = THREE.DoubleSide; // Render both sides
                                child.material.needsUpdate = true;
                            }
                        });
  
                        // Update Controls
                        controls.update();
                    },
                    (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded of MTL'); },  // Loading Progress
                    (error) => { alert(`Could not load Materials for 3D Viewer \n \n ${error}`); }  // Error in Loading
                );
            },
            (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded of MTL'); },  // Loading Progress
            (error) => { alert(`Could not load Materials for 3D Viewer \n \n ${error}`); }  // Error in Loading
        );

        // Create an animation loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                camera.aspect = aspectRatio();
                camera.updateProjectionMatrix();
                renderer.setSize(viewer.clientWidth, viewer.clientHeight);
            }, 200);
        });
    });
});