<template>
  <div class="about-section">
    <div class="d-flex flex-column-reverse flex-lg-row flex-md-row">
      <div class="order-1 d-sm-block d-md-none d-lg-none">
         <h1 class="">Who we are ...</h1>
      </div>
      <div class="left float-lg-left">
        <div class="align-self-center">
          
          <h1 class="d-none d-sm-none d-md-block">Who we are ...</h1>
          <p class="content-about">
            Ultratech Chemical Industries, promoted by professionals, having
            over 32 years’ experience in Industry, Ultratech puts innovation to
            application and work by creating sustainable solutions with value
            addition for a better, safer, healthier life of people. The company
            operating with wide range of innovative specialty eco-friendly
            products, specializes in Intermediaries for Construction Chemicals,
            Leather Chemicals, Dyes, Pigments, Textile processing, Agro-
            Chemicals, Coatings.
          </p>
        </div>
      </div>
      <div
        class="right float-right flex-lg-grow-1 flex-md-grow-1 flex-grow-0 align-self-right"
      >
        <img src="home/Banner2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-section {
  min-height: calc(100vh - 16rem);
  padding: 8rem;
}
.left {
  width: 50%;
}
.right {
  height: 400px;
  width: 400px;
}
.right img {
  height: 100%;
  width: 100%;
}
.content-about {
  padding: 1rem 5rem 1rem 0;
}
@media (min-width: 320px) {
  .about-section {
    min-height: calc(100vh - 16rem);
    padding: 1rem;
  }
  .left {
    width: 100%;
  }
  .right {
    height: 100%;
    width: 100%;
  }
  .content-about {
    padding: 1rem 0;
  }
}

@media (min-width: 768px) {
 .about-section {
    min-height: 100%;
    padding: 1.5rem;
  }
  .left {
    width: 60%;
  }
  .right {
    height: 350px;
    width: 40%;
  }
  .content-about {
    padding: 1rem 5rem 1rem 0;
  }
}

@media (min-width: 992px) {
  .about-section {
    min-height: calc(100vh - 16rem);
    padding: 8rem;
  }
  .left {
    width: 50%;
  }
  .right {
    height: 400px;
    width: 400px;
  }
  .content-about {
    padding: 1rem 5rem 1rem 0;
  }
}
</style>