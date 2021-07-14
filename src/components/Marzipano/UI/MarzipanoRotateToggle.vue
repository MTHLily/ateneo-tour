<template>
    <a href="javascript:void(0)" @click="toggleRotate">
        <a-tooltip title="Autorotate" placement="left">
            <a-button shape="circle" size="large" :type="isRotating ? 'primary' : 'danger'">
                <i class="fas fa-sync-alt"></i>
            </a-button>
        </a-tooltip>
    </a>
</template>

<script>
export default {
    methods: {
        toggleRotate() {
            this.isRotating = !this.isRotating;
            this.$emit("toggle-rotate", this.isRotating);
        },
    },
    data() {
        return {
            isRotating: false,
        };
    },
};
</script>

<style></style>
