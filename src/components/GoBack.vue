<template>
  <span class="go-back">
    <button @click="goBack"><img src="src\assets\2459307.png" />Back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
img {
  width: 5%;
  height: auto;
}
button {
  border: 0;
}
</style>
