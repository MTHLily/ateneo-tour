<template>
    <div class="hotspot" ref="hotspotEl">
        <div class="header" @click="onToggle">
            <div class="icon-wrapper">
                <img src="img/info.png" class="icon" />
            </div>
            <div class="title-wrapper">
                <div class="title"> {{ hotspotData.title }} </div>
            </div>
            <div class="close-wrapper">
                <img src="img/close.png" class="close-icon"/>
            </div>
        </div>
        <div class="text">
            {{ hotspotData.text }}
        </div>
        
        <teleport to="body">
            <div v-if="showModal" class="modal">
                <div class="header">
                    <div class="icon-wrapper">
                        <img src="img/info.png" class="icon" />
                    </div>
                    <div class="title-wrapper">
                        <div class="title"> {{ hotspotData.title }} </div>
                    </div>
                    <div class="close-wrapper" @click="onToggle">
                        <img src="img/close.png" class="close-icon"/>
                    </div>
                </div>
                <div class="text">
                    {{ hotspotData.text }}
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>

export default {
    name: 'InfoHotspot',
    props: { hotspotData: Object },
    methods: {
        initialize(scene) {
            scene.hotspotContainer().createHotspot( this.$el, {yaw: this.hotspotData.yaw, pitch: this.hotspotData.pitch});
        },
        onToggle() {
            this.$refs.hotspotEl.classList.toggle('visible');
        }
    },
    data() {
        return {
            showModal: false
        }
    }
}
</script>

<style scoped>
/* Info hotspot */

.hotspot {
  line-height: 1.2em;
  opacity: 0.9;
  -webkit-transition: opacity 0.2s 0.2s;
  transition: opacity 0.2s 0.2s;
}

.no-touch .hotspot:hover {
  opacity: 1;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.hotspot.visible {
  opacity: 1;
}

.hotspot .header {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(103,115,131);
  cursor: pointer;
  -webkit-transition: width 0.3s ease-in-out 0.5s,
                      border-radius 0.3s ease-in-out 0.5s;
  transition: width 0.3s ease-in-out 0.5s,
              border-radius 0.3s ease-in-out 0.5s;
}

.mobile .hotspot .header {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.desktop.no-touch .hotspot .header:hover {
  width: 260px;
  border-radius: 5px;
  -webkit-transition: width 0.3s ease-in-out,
                      border-radius 0.3s ease-in-out;
  transition: width 0.3s ease-in-out,
              border-radius 0.3s ease-in-out;
}

.desktop .hotspot.visible .header,
.desktop.no-touch .hotspot.visible .header:hover {
  width: 260px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  -webkit-transition: width 0.3s ease-in-out,
                      border-radius 0.3s ease-in-out;
  transition: width 0.3s ease-in-out,
              border-radius 0.3s ease-in-out;
}

.hotspot .icon-wrapper {
  width: 40px;
  height: 40px;
}

.mobile .hotspot .icon-wrapper {
  width: 50px;
  height: 50px;
}

.hotspot .icon {
  width: 90%;
  height: 90%;
  margin: 5%;
}

.hotspot .title-wrapper {
  position: absolute;
  left: 40px;
  top: 0;
  width: 0;
  height: 40px;
  padding: 0;
  overflow: hidden;
  -webkit-transition: width 0s 0.4s,
                      padding 0s 0.4s;
  transition: width 0s 0.4s,
              padding 0s 0.4s;
}

.desktop .hotspot.visible .title-wrapper,
.desktop.no-touch .hotspot .header:hover .title-wrapper {
  width: 220px;
  padding: 0 5px;
  -webkit-transition: width 0s 0.4s,
                      padding 0s 0.4s;
  transition: width 0s 0.4s,
              padding 0s 0.4s;
}

.hotspot .title-wrapper:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

.hotspot .title {
  display: inline-block;
  vertical-align: middle;

  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.hotspot .close-wrapper {
  position: absolute;
  left: 260px;
  top: 0;
  height: 40px;
  width: 40px;
  border-top-right-radius: 5px;
  background-color: rgb(78,88,104);
  visibility: hidden;
  -ms-transform: perspective(200px) rotateY(90deg);
  -webkit-transform: perspective(200px) rotateY(90deg);
  transform: perspective(200px) rotateY(90deg);
  -ms-transform-origin: 0 50% 0;
  -webkit-transform-origin: 0 50% 0;
  transform-origin: 0 50% 0;
  -webkit-transition: -ms-transform 0.3s 0.3s,
                      -webkit-transform 0.3s 0.3s,
                      transform 0.3s 0.3s,
                      visibility 0s 0.6s;
  transition: -ms-transform 0.3s 0.3s,
              -webkit-transform 0.3s 0.3s,
              transform 0.3s 0.3s,
              visibility 0s 0.6s;
}

.desktop .hotspot.visible .close-wrapper {
  visibility: visible;
  -ms-transform: perspective(200px) rotateY(0deg);
  -webkit-transform: perspective(200px) rotateY(0deg);
  transform: perspective(200px) rotateY(0deg);
  -webkit-transition: -ms-transform 0.3s,
                      -webkit-transform 0.3s,
                      transform 0.3s,
                      visibility 0s 0s;
  transition: -ms-transform 0.3s,
              -webkit-transform 0.3s,
              transform 0.3s,
              visibility 0s 0s;
}

.hotspot .close-icon {
  width: 70%;
  height: 70%;
  margin: 15%;
}

.hotspot .text {
  position: absolute;
  width: 300px;
  height: auto;
  max-height: 200px;
  top: 40px;
  left: 0;
  padding: 10px;
  background-color: rgb(58,68,84);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow-y: auto;
  visibility: hidden;
  /* rotate(90deg) causes transition flicker on Firefox 58 */
  -ms-transform: perspective(200px) rotateX(-89.999deg);
  -webkit-transform: perspective(200px) rotateX(-89.999deg);
  transform: perspective(200px) rotateX(-89.999deg);
  -ms-transform-origin: 50% 0 0;
  -webkit-transform-origin: 50% 0 0;
  transform-origin: 50% 0 0;
  -webkit-transition: -ms-transform 0.3s,
                      -webkit-transform 0.3s,
                      transform 0.3s,
                      visibility 0s 0.3s;
  transition: -ms-transform 0.3s,
              -webkit-transform 0.3s,
              transform 0.3s,
              visibility 0s 0.3s;

  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.desktop .hotspot.visible .text {
  visibility: visible;
  -ms-transform: perspective(200px) rotateX(0deg);
  -webkit-transform: perspective(200px) rotateX(0deg);
  transform: perspective(200px) rotateX(0deg);
  -webkit-transition: -ms-transform 0.3s 0.3s,
                      -webkit-transform 0.3s 0.3s,
                      transform 0.3s 0.3s,
                      visibility 0s 0s;
  transition: -ms-transform 0.3s 0.3s,
              -webkit-transform 0.3s 0.3s,
              transform 0.3s 0.3s,
              visibility 0s 0s;
}

/* Info hotspot modal */

.desktop .modal {
  display: none;
}

.modal {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 11000 !important;
  background-color: rgba(0,0,0,.5);
  line-height: 1.2em;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.2s ease-in-out 0.5s,
                      visibility 0s 0.7s;
  transition: opacity 0.2s ease-in-out 0.5s,
              visibility 0s 0.7s;
}

.modal.visible {
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity 0.2s ease-in-out,
                      visibility 0s 0s;
  transition: opacity 0.2s ease-in-out,
              visibility 0s 0s;
}

.modal .header {
  position: absolute;
  top: 60px;
  left: 10px;
  right: 10px;
  width: auto;
  height: 50px;
  background-color: rgb(103,115,131);
  background-color: rgba(103,115,131,0.8);
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-in-out 0.2s;
  transition: opacity 0.3s ease-in-out 0.2s;
}

.modal.visible .header {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease-in-out 0.2s;
  transition: opacity 0.3s ease-in-out 0.2s;
}

.modal .icon-wrapper {
  width: 50px;
  height: 50px;
}

.modal .icon {
  width: 90%;
  height: 90%;
  margin: 5%;
}

.modal .title-wrapper {
  position: absolute;
  top: 0;
  left: 50px;
  right: 50px;
  width: auto;
  height: 50px;
  padding: 0 10px;
}

.modal .title-wrapper:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

.modal .title {
  display: inline-block;
  vertical-align: middle;

  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.modal .close-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: rgb(78,88,104);
  background-color: rgba(78,88,104,0.8);
  cursor: pointer;
}

.modal .close-icon {
  width: 70%;
  height: 70%;
  margin: 15%;
}

.modal .text {
  position: absolute;
  top: 110px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 10px;
  background-color: rgb(58,68,84);
  background-color: rgba(58,68,84,0.8);
  overflow-y: auto;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;

  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.modal.visible .text {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease-in-out 0.4s;
  transition: opacity 0.3s ease-in-out 0.4s;
}
</style>