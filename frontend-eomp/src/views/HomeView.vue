<template>
<SpinnerComp v-if="isLoading" />
  <div class="all">
    <div class="mb-3  d-flex flex-wrap landing justify-content-center">
    <div class="cards landing-pic-one">
      <div>
        <p class="text-white fs-3 fw-bold">Step up your scent game with sigma male perfumes.</p>
        <button class="buttons">Shop Now</button>
      </div>
    </div>
    <div class="cards landing-pic-two">
      <div>
        <p class="text-white fs-3 fw-bold">Step up your scent game with sigma male perfumes.</p>
        <button class="buttons">Shop Now</button>
      </div>
    </div>
  </div>
  <div class="d-flex land flex-wrap mb-3 overflow-x-hidden">
    <router-link class="crazy-about text-decoration-none" :to="'/products'">
      <p class=" crazy text-uppercase fs-1 fw-bold text-white">#crazyaboutwatchwisp&wardrobeco.</p>
    </router-link>
    <div class="shoe-display">
      <div class="shoes shoe-one"></div>
      <div class="shoes shoe-two"></div>
    </div>
  </div>
  
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
    }, 3000);
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
* {
  font-family: montserrat;
}
.all {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw !important;
  overflow-x: hidden;
}
  .landing-pic-one {
    width: 600px;
    height: 650px;
    background-image: url(https://i.postimg.cc/k5VFMn4G/zara-man-800-black-perfume.jpg);
    background-position: center;
    background-size: cover;
    margin-right: 3rem;
    padding-block: 19rem;
    padding-inline: 3rem;
  }
  .buttons {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
  }
  .buttons:hover {
    background-color: white;
    border: none;
    letter-spacing: 5px;
    color: black;
    font-weight: bold;
  }
  .landing-pic-two {
    width: 600px;
    height: 650px;
    background-image: url(https://i.postimg.cc/k5VFMn4G/zara-man-800-black-perfume.jpg);
    background-position: center;
    background-size: cover;
    margin-left: 3rem;
    padding-block: 19rem;
    padding-inline: 3rem;
  }
  .crazy-about {
    width: 70vw;
    height: 600px;
    background-image: url(https://i.postimg.cc/N0QZJNQQ/HIGH-TOP-MEN-COVER-EU.jpg);
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 1350px) {
    .crazy-about {
      width: 100vw !important;
    }
  }
  .crazy {
    margin-block: 19rem;
    text-align: center;
  }
  .shoe-one {
    height: 300px;
    width: 30vw;
    background-image: url(https://i.postimg.cc/hG0DGySY/CS1772-AH502-HWF57-1.jpg);
    background-position: center;
    background-size: cover;
  }
  .shoe-two {
    height: 300px;
    width: 30vw;
    background-image: url(https://i.postimg.cc/XqrBdSqq/430220-3196-022034-3-1052x.jpg);
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 1425px) {
    .cards {
      width: 500px !important;
      height: 550px !important;
    }
  }
  @media screen and (max-width: 1140px) {
    .cards {
      width: 425px !important;
      height: 450px !important;
    }
  }
  @media screen and (max-width: 940px) {
    .cards {
      width: 350px !important;
      height: 350px !important;
      margin-inline: 20px;
    }
  }
  @media screen and (max-width: 791px) {
    .cards {
      width: 300px !important;
      height: 320px !important;
      /* margin-inline: 20px; */
    }
    .crazy {
      font-size: x-large !important;
    }
  }
  @media screen and (max-width: 600px) {
    .crazy-about {
      height: 400px !important;
      /* padding-bottom: 50rem !important; */
    }
    .crazy {
      margin-block: 200px;
    }
  }
  @media screen and (max-width: 680px) {
    .cards {
      width: 500px !important;
      height: 320px !important;
      /* margin-inline: 20px; */
    }
  }
  @media screen and (max-width: 530px) {
    .cards {
      width: 450px !important;
      height: 320px !important;
      /* margin-inline: 20px; */
    }
  }
  @media screen and (max-width: 560px) {
    .crazy {
      font-size: large !important;
    }
  }
  @media screen and (max-width: 460px) {
    .crazy-about {
      height: 350px !important;
      width: 460px !important;
    }
    .crazy {
      margin-block: 10rem !important;
    }
  }
  @media screen and (max-width: 420px) {
    .crazy {
      font-size: medium!important;
    }
    .crazy-about {
      height: 300px !important;
    }
  }
  @media screen and (max-width: 410px) {
    /* .crazy {
      font-size: medium!important;
    } */
    .crazy-about {
      width: 100% !important;
      height: 300px !important;
    }
  }
  @media screen and (max-width: 370px ) {
    .landing {
      width: 100vw !important;
    }
    .crazy {
      font-size: small !important;
      margin-inline: 3px !important;
    }
  }
  @media screen and (max-width: 365px ) {
    .landing {
      width: 100vw !important;
    }
  }
  @media screen and (max-width: 362px ) {
    .landing {
      width: 100vw !important;
    }
  }
  @media screen and (max-width: 360px ) {
    .landing {
      width: 100vw !important;
      margin-inline: 0px !important;
    }
  }
  @media screen and (max-width: 1350px ) {
    .shoe-display {
      display: flex;
    }
    .shoes {
      width: 50vw !important;
    }
  }
  @media screen and (max-width: 645px) {
    .shoes {
      height: 250px !important;
    }
  }
  @media screen and (max-width: 500px) {
    .shoes {
      height: 150px !important;
    }
  }
</style>
<script>

</script>
