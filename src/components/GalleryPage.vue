<template>
  <div class="slider">
    <img :src="images[currentIndex]" alt="Slide">
    <div class="controls">
      <button @click="prevSlide" :disabled="currentIndex === 0">Prev</button>
      <button @click="nextSlide" :disabled="currentIndex === images.length - 1">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://www.care.com/c/wp-content/uploads/sites/2/2021/04/maressab-202115020615567399.jpg.optimal.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BynMMFFPQdon_J3h0rAQCQXpek8mgk_6dw&s',
        'https://miro.medium.com/v2/resize:fit:400/1*iFOeoAhVD2Wojgk9P66vUg.jpeg'
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style scoped>
.slider {
  position: relative;
}
.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
