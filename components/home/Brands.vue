<template>
  <b-container class="second-back brand-wrapper bv-example-row">
    <div class="d-flex brand-header align-items-center justify-content-center">
      <h1 class="text-center">Brands</h1>
    </div>
    <!-- flex-lg-row flex-md-row flex-colum -->
    <div
      class="d-flex flex-wrap brand-section justify-content-lg-between justify-content-center"
    >
      <!-- <div
      class="align-self-center1"
        v-for="(card, index) in cards"
        v-bind:class="index % 2 != 0 ? 'odd-div' : ''"
        v-bind:key="index"
      >
        <BrandCard v-bind:card="card" />
      </div> -->
      <div
        class="align-self-center"
        v-for="(card, index) in cards1"
        v-bind:class="index % 2 != 0 ? 'odd-div' : ''"
        v-bind:key="index"
      >
        <BrandCardSelf v-bind:card="card" />
      </div>
    </div>
  </b-container>
</template>

<script>
import BrandCard from "./BrandCard";
import BrandCardSelf from "./BrandCardSelf";

export default {
  components: { BrandCard, BrandCardSelf },
  data: function () {
    return {
      cards: [
        {
          src: "/brands/2.png",
          title: "",
          alt: "Brand1",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/3.png",
          title: "",
          alt: "Brand2",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/4.png",
          title: "",
          alt: "Brand3",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/5.png",
          title: "",
          alt: "Brand4",
          subTitle: "",
          text: "Discover >",
        },
      ],
      cards1: [
        {
          src: "/brands/Ultralix-brand.png",
          title: "Ultratan",
          alt: "Brand1",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/Ultralix-brand.png",
          title: "Ultraliq",
          alt: "Brand2",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/Ultralix-brand.png",
          title: "Ultrafill",
          alt: "Brand3",
          subTitle: "",
          text: "Discover >",
        },
        {
          src: "/brands/Ultralix-brand.png",
          title: "Ultralix",
          alt: "Brand4",
          subTitle: "",
          text: "Discover >",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.brand-wrapper {
  .brand-header {
    padding-top: 3%;
  }
  .brand-section {
    margin: auto;
    width: 100%;
  }
}

/* .odd-div{
  margin-top: 15%;
} */

@media (min-width: 320px) {
  .brand-wrapper {
    margin-top: 40%;
    .brand-header {
      padding-top: 1rem;
    }
    .brand-section {
      position: relative;
      padding: 1rem 0 2rem 0;
    }
  }
}

@media (min-width: 768px) {
  .brand-wrapper {
    margin-top: 0;
    .brand-section {
      position: relative;
      padding: 1rem 0 2rem 0;
    }
    .brand-header {
      padding-top: 3%;
    }
  }
}

@media (min-width: 992px) {
  .brand-wrapper {
    margin-top: 0;
    max-width:100%;
    .brand-section {
      position: relative;
      padding: 2rem 2rem 6rem 2rem;
    }
    .brand-header {
      padding-top: 3%;
    }
  }
}
</style>