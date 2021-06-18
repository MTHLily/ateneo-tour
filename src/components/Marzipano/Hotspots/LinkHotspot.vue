<template>
    <div class="hotspot" ref="hotspotEl" @click="changeScene">
        <img src="img/link.png" class="icon" />
        <div v-if="targetScene" class="hotspot-tooltip tooltip">
            {{ targetScene.data.name }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'InfoHotspot',
    props: { hotspotData: Object },
    methods: {
        initialize(scene, sceneList) {
            scene.hotspotContainer().createHotspot( this.$el, {yaw: this.hotspotData.yaw, pitch: this.hotspotData.pitch});
            this.$data.targetScene = sceneList.find(scene => scene.data.id === this.hotspotData.target);
        },
        changeScene() {
            this.targetScene.scene.switchTo();
        }
    },
    data() {
        return {
            targetScene: null,
            showModal: false
        }
    }
}
</script>

<style scoped>
/* Link hotspot */

.hotspot {
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
  opacity: 0.9;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.no-touch .hotspot:hover {
  opacity: 1;
}

.mobile .hotspot {
  width: 70px;
  height: 70px;
}

.icon {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  left: 100%;
  top: 14px; /* ( 60 - (16 + 2*8) ) / 2 */

  margin-left: 3px;

  font-size: 16px;

  max-width: 300px;

  padding: 8px 10px;

  border-radius: 5px;

  background-color: rgb(58,68,84);
  background-color: rgba(58,68,84,0.8);

  color: #fff;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  cursor: pointer;

  opacity: 0;

  -ms-transform: translateX(-8px);
  -webkit-transform: translateX(-8px);
  transform: translateX(-8px);

  -webkit-transition: -ms-transform 0.3s,
                      -webkit-transform 0.3s,
                      transform 0.3s,
                      opacity 0.3s;
  transition: -ms-transform 0.3s,
              -webkit-transform 0.3s,
              transform 0.3s,
              opacity 0.3s;
}

.mobile .hotspot {
  top: 19px; /* ( 70 - (16 + 2*8) ) / 2 */
}

.no-touch .hotspot:hover .tooltip {
  opacity: 1;
  -ms-transform: translateX(0);
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

/* Prevent tooltip from triggering */
.tooltip {
  pointer-events: none;
}
.no-touch .hotspot:hover .tooltip {
  pointer-events: all;
}

/* Fallback mode without pointer-events (IE8-10) */
.tooltip-fallback .tooltip {
  display: none;
}
.no-touch .tooltip-fallback .hotspot:hover .tooltip {
  display: block;
}
</style>