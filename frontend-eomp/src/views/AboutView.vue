<template>
<SpinnerComp v-if="isLoading" />
  <div class="about my-3 bg-body-secondary py-4">
    <p class="text-uppercase fw-bolder fs-2 text-center">about watchwisp and wardrobe co.</p>
  </div>
  <div class="container mb-5 my-2">
    <p class="paragraph text-center fs-5 fw-bold">At WatchWisp & Wardrobe Co., we bring together the essence of timeless elegance and modern style in our curated collection of watches, sneakers, perfumes, and clothing. Our store is more than just a shopping destination; it's a reflection of our passion for quality craftsmanship and individual expression.</p>
    <p class="text-center fs-3 fw-bold">A Fusion of Elegance and Versatility</p>
    <p class="paragraph text-center fs-5 fw-bold">Founded by Inam Nkabi and Abenathi Sindaphi, WatchWisp & Wardrobe Co. is the embodiment of our vision to create a space where every accessory and apparel piece tells a unique story. Our carefully curated collection offers a harmonious fusion of elegance and versatility, catering to those who appreciate both classic sophistication and contemporary trends.</p>
    <p class="text-center fs-3 fw-bold">Watches That Define Moments</p>
    <p class="paragraph text-center fs-5 fw-bold">Our collection of watches captures the essence of every moment. From minimalist designs that exude understated sophistication to bold statement pieces that demand attention, our watches are more than timekeepers; they're a testament to your individuality and taste. Crafted with precision and care, each watch tells its own story, accompanying you on your journey through life's various chapters.</p>
    <p class="text-center fs-3 fw-bold">Sneakers for Every Adventure</p>
    <p class="paragraph text-center fs-5 fw-bold">Step into a world of comfort and style with our range of sneakers. Designed to accompany you on every adventure, our sneakers are a fusion of aesthetics and functionality. Whether you're exploring city streets, embarking on outdoor escapades, or simply seeking everyday comfort, our sneakers offer a perfect blend of form and function.</p>
    <p class="text-center fs-3 fw-bold">Perfumes That Define You</p>
    <p class="paragraph text-center fs-5 fw-bold">Fragrance is a powerful tool for self-expression, and our collection of perfumes allows you to encapsulate your personality in a single scent. From delicate floral notes to bold and captivating aromas, our perfumes are carefully selected to evoke emotions, memories, and experiences, leaving a lasting impression wherever you go.</p>
    <p class="text-center fs-3 fw-bold">Elevate Your Wardrobe</p>
    <p class="paragraph text-center fs-5 fw-bold">Clothing is an extension of your identity, and our clothing collection is designed to elevate your wardrobe with a touch of sophistication. From casual essentials to exquisite formal wear, we offer a diverse range of clothing that caters to diverse styles and occasions. Each piece is thoughtfully chosen to help you curate outfits that make a statement.</p>
    <p class="text-center fs-3 fw-bold">Founded on Passion</p>
    <p class="paragraph text-center fs-5 fw-bold">Inam Nkabi and Abenathi Sindaphi, the visionary minds behind WatchWisp & Wardrobe Co., share a passion for bringing quality and style to the forefront. With a commitment to customer satisfaction, we aim to provide an unparalleled shopping experience that goes beyond transactions. Our store is a culmination of creativity, dedication, and the belief that every accessory and garment has the power to enhance your life.</p>
  </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue'; 

export default {
  components: { SpinnerComp},
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
.about {
  font-family: inconsolata;
  height: 100px;
}
.paragraph {
  font-family: montserrat;
}
.container {
  font-family: inconsolata;
}
</style>