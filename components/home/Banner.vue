<template>
  <div class="banner">
    <div id="background">
      <img src="home/Banner3.jpg" alt="" />
    </div>
    <div class="banner-text-wrapper">
      <h3 class="banner-text">
        Innovation and Technology Driven Multi-Specialty Chemical Company
      </h3>
      <nuxt-link class="color-link" to="/About">Discover more ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner {
  position: relative;
  /* z-index: 90; */
}
#background {
  width: 60%;
  height: 400px;
  z-index: 80;
  }
#background img {
  height: 100%;
  width: 100%;
}
.banner-text-wrapper {
  position: absolute;
  top: 30%;
  left: 40%;
  background: white;
  z-index: 100;
}
.banner-text {
  padding: 0 0.5rem;
  font-size: 3rem;
  margin: 0;
}
.color-link {
  display: block;
  padding: 1rem 1.5rem;
}
@media (min-width: 320px) {
  #background {
    width: 100%;
    height: 250px;
  }
  .banner-text-wrapper {
    left: 10%;
    top: 55%;
    width: 80%;
  }
  .banner-text {
    font-size: 1.5rem;
    padding: 1.2rem;
  }
  .color-link {
    padding: 0.5rem 1.2rem;
  }
}

@media (min-width: 768px) {
  #background {
    width: 60%;
    height: 350px;
  }
  .banner-text-wrapper {
    left: 40%;
    top: 30%;
    width: 50%;
  }
  .banner-text {
    font-size: 1.5rem;
    padding: 1.2rem;
  }
   .color-link {
    padding: 0.5rem 1.2rem;
  }
}

@media (min-width: 992px) {
  #background {
    width: 60%;
    height: calc(100vh - 70px);
  }
  .banner-text-wrapper {
    left: 40%;
    top: 30%;
    width: calc(100% - 45%);
  }
  .banner-text {
    font-size: 3rem;
    padding: 1rem 1.5rem;
  }
     .color-link {
  padding: 1rem 1.5rem;
  }
}
</style>