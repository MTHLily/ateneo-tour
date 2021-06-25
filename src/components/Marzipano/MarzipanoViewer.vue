<template>
    <div class="marzipano-viewer-container">
        <div id="pano" @click="getCoordinates"></div>
    </div>
    <marzipano-scene-list>
        <marzipano-scene
            v-for="(scene, index) in cleanSceneData"
            :key="scene.id"
            :disabled="scene.disabled"
            :sceneData="scene"
            :currentSceneTarget="currentSceneTarget"
            @sceneUpdateTarget="switchSceneByTarget"
            :ref="
                el => {
                    sceneElements[index] = el;
                }
            "
        ></marzipano-scene>
    </marzipano-scene-list>

    <div id="titleBar">
        <h1 class="sceneName" v-if="scenes.length">
            {{ getCurrentSceneWithData().data.name }}
        </h1>
    </div>

    <!-- <a href="javascript:void(0)" id="autorotateToggle">
        <img class="icon off" src="img/play.png" />
        <img class="icon on" src="img/pause.png" />
    </a> -->
    <marzipano-rotate-toggle @toggle-rotate="toggleAutorotate" />

    <marzipano-camera-controls
        :velocity="cameraSpeed.velocity"
        :friction="cameraSpeed.friction"
        ref="cameraControls"
    ></marzipano-camera-controls>
</template>

<script>
import Marzipano from "marzipano";
import { ref } from "vue";
import APP_DATA from "../../assets/data/data";
import MarzipanoCameraControls from "./UI/MarzipanoCameraControls.vue";
import MarzipanoSceneList from "./UI/MarzipanoSceneList.vue";
import MarzipanoRotateToggle from "./UI/MarzipanoRotateToggle.vue";
import MarzipanoScene from "./MarzipanoScene.vue";

export default {
    components: {
        MarzipanoCameraControls,
        MarzipanoSceneList,
        MarzipanoScene,
        MarzipanoRotateToggle,
    },
    computed: {
        // This whole function changes changes one thing
        // sceneData: it adds the name of the target scene
        // in linkHotspots array.
        // If better way found, pls fix ty 😊
        cleanSceneData() {
            return this.sceneData.map(scene => {
                const editedLinkHotspots = scene.linkHotspots.map(link => {
                    return {
                        yaw: link.yaw,
                        pitch: link.pitch,
                        rotation: link.rotation,
                        target: link.target,
                        targetName: this.findSceneDataByTarget(link.target)
                            .scene.name,
                    };
                });
                return {
                    id: scene.id,
                    name: scene.name,
                    levels: scene.levels,
                    faceSize: scene.faceSize,
                    disabled: scene.disabled,
                    initialViewParameters: scene.initialViewParameters,
                    linkHotspots: editedLinkHotspots,
                    infoHotspots: scene.infoHotspots,
                };
            });
        },
    },
    props: ["debug"],
    mounted() {
        // viewer setup
        // viewer must be initialized as a non-vuejs variable because
        // hotspots break if it isn't
        const viewer = new Marzipano.Viewer(
            document.querySelector("#pano"),
            this.viewerOpts
        );

        // used to access viewer in other methods
        this.viewer = viewer;

        // Set up autorotate, if enabled.
        this.autorotate = Marzipano.autorotate({
            yawSpeed: 0.03,
            targetPitch: 0,
            targetFov: Math.PI / 2,
        });

        this.viewer.startMovement(this.autorotate);
        this.viewer.setIdleMovement(3000, this.autorotate);

        // Initialize scenes
        this.scenes = this.sceneElements.map(scene => {
            return scene.initialize(viewer);
        });

        // Initialize the camera controls
        this.$refs.cameraControls.initialize(viewer);

        // Default scene
        viewer.switchScene(viewer.listScenes()[0]);
        this.currentSceneTarget = this.sceneData[0].id;
    },
    methods: {
        // Gets the scene currently in view
        getCurrentSceneWithData() {
            var currentScene = this.viewer.scene();

            return this.scenes.find(scene => scene.scene === currentScene);
        },

        // Event handler for @sceneUpdateTarget
        // Finds the scene by target first
        // Then switches the scene
        switchSceneByTarget(target) {
            var targetSceneData = this.findSceneDataByTarget(target);

            var targetScene = this.scenes[targetSceneData.index];

            this.currentSceneTarget = target;

            // Reset the view parameters to its original state.
            // Possible Upgrade: expand target to include additional view
            // parameters, so instead of the scene always resetting
            // to its original view, it changes based on where you're from
            // in the previous scene
            targetScene.view.setParameters(
                targetSceneData.scene.initialViewParameters
            );

            targetScene.scene.switchTo();
        },

        // Helper function. Gets the sceneData and index of the
        // corresponding id
        findSceneDataByTarget(target) {
            var targetScene = {};
            this.sceneData.forEach((scene, index) => {
                if (scene.id == target) {
                    targetScene = {
                        scene: scene,
                        index: index,
                    };
                }
            });
            return targetScene;
        },

        // Debug function.
        // Gets the pitch and yaw based on the area clicked on the viewer.
        getCoordinates(e) {
            if (this.debug == false) return;

            console.log(
                "Click:",
                this.viewer.view().screenToCoordinates({
                    x: e.clientX,
                    y: e.clientY,
                }),
                "Current View:",
                {
                    fov: this.viewer.view().parameters().fov,
                    pitch: this.viewer.view().pitch(),
                    yaw: this.viewer.view().yaw(),
                }
            );
        },

        toggleAutorotate(isRotating) {
            if (!isRotating) {
                //Stop Rotating
                this.viewer.stopMovement();
                this.viewer.setIdleMovement(Infinity);
            } else {
                //Start Rotating
                this.viewer.startMovement(this.autorotate);
                this.viewer.setIdleMovement(3000, this.autorotate);
            }
        },
    },
    data: function() {
        return {
            // Settings for the camera controls
            cameraSpeed: {
                velocity: 0.7,
                friction: 3,
            },
            currentSceneTarget: "",
            viewer: null,
            viewerOpts: {
                controls: {
                    mouseViewMode: "drag",
                },
            },
            // Data imported from assets/data/data.js
            sceneData: APP_DATA.scenes,

            // VueJS Marzipano Scene Components
            sceneElements: ref([]),

            // Marzipano Scenes
            scenes: ref([]),
            autorotate: null,
        };
    },
};
</script>

<style></style>
