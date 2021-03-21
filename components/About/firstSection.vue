<template>
  <div>
    <div class="content container-fluid about-container">
      <div class="d-flex align-middle aboutSection">
        <div class="right about-content align-middle">
          <h4 class="text-justify">
            Ultratech Chemical Industries, promoted by professionals, having
            over 32 years’ experience in Industry,<br />
            Ultratech puts innovation to application and work by creating
            sustainable solutions with value addition for a better, safer,
            healthier life of people.
          </h4>
          <!-- <p> Innovation and Technology Driven “Multi-Specialty” Chemical Company, Based in
            Mumbai with company’s manufacturing facility situated at Lote MIDC,
            Ratnagiri, the industrial belt of Maharashtra (India) and is
            logistically well connected by road.</p> -->
          <!-- <p>The company operating with wide
            range of innovative specialty eco-friendly products, specializes in
            Intermediaries for Construction Chemicals, Leather Chemicals, Dyes,
            Pigments, Textile processing, Agro- Chemicals, Coatings.</p> -->

          <!-- <p> The company has highly qualified experienced personnel and well-equipped state
            of art production plant having annual manufacturing capacity of
            30000 MT.</p> -->
        </div>
        <div class="banner primary-lightback about-content about left">
          <h1 class="center-text text-muted headText">'US'</h1>
        </div>
      </div>
      <div class="mission">
        <h1 class="text-muted text-center1 headText missionHead">
          Our Mission
        </h1>
        <h4 class="text-justify">
          The company operating with wide range of innovative specialty
          eco-friendly products, specializes in Intermediaries for Construction
          Chemicals, Leather Chemicals, Dyes, Pigments, Textile processing,
          Agro- Chemicals, Coatings.
        </h4>
        <h4 class="text-justify">
          Our main objective is to produce eco-friendly products, we have
          developed range of biopolymer chemistry, which will help to develop
          green, and eco-friendly system for Leather Industry
        </h4>
      </div>
      <div class="mission wecare">
        <h1 class="text-muted text-right headText">We Care</h1>
        <h4 class="text-justify">
          We are using superior environmentally friendly products with the
          latest technologies and the finest raw materials.
        </h4>
        <h4 class="text-justify">
          We evaluate all international standards and norms in our TESTING LAB.
          After repeated quality checking and approval from R&D and QC
          ANALYTICAL TEAM, we are dispatching the materials; since we are into
          international business, we are updating all our manufacturing process
          as per international norms.
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-container {
  .aboutSection {
    height: calc(100vh - 100px);
  }
  .banner.about {
    width: 50vh;
    position: relative;
    margin: auto 4%;
    /* border-radius: 100%; */
  }
  .missionHead {
  }
  .banner.about::before {
    content: "";
    height: 100%;
    width: 100%;
    z-index: 5;
    background: #eee0ea;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
  }
  /* .banner.about::after {
  content: "";
  z-index: 3;
  background: black;
  opacity: 0.6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 2%;
  left: 2%;
  border-radius: 100%;
} */
  .center-text {
    position: absolute;
    top: 3%;
    left: -50%;
    /* color: black; */

    text-align: center;
    width: 100%;
    z-index: 6;
  }

  .headText,
  .center-text.headText {
    font-size: 5rem;
    font-weight: bold;
  }
  .content {
    padding: 2rem;
  }
  .right.about-content {
    width: 60%;
    padding: 5%;
    margin: auto 4%;
    /* height: 100%; */
  }
  .left.about-content {
    position: relative;
    width: 30%;
    height: 50vh;
  }
  .mission {
    padding: 5%;
    margin: auto 4%;
  }
}

@media (min-width: 320px) {
  .about-container {
    .aboutSection {
      min-height: calc(100vh - 100px);
      height: auto;
      flex-direction: column-reverse;
    }
    .center-text {
      font-size: 6rem;
      left: -31%;
      width: 100%;
    }
    .banner.about {
      width: 100vh;
      margin: auto;
    }
    .right.about-content {
      width: 100%;
      padding: 1%;
      margin: auto;
    }
    .left.about-content {
      position: relative;
      width: 80%;
      height: 35vh;
    }
    .content {
      padding: 1rem;
    }
    .headText {
      font-size: 3rem;
    }
    .mission {
      padding: 1%;
      margin: auto;
    }
  }
}

@media (min-width: 768px) {
  .about-container {
    .aboutSection {
      min-height: calc(10vh - 100px);
      height: 40vh;
      flex-direction: row;
    }
    .center-text {
      left: -50%;
      width: 100%;
      font-size: 6rem;
    }
    .banner.about {
      width: 50vh;
      margin: auto 2%;
    }
    .right.about-content {
      width: 60%;
      padding: 5%;
      margin: auto 4%;
    }
    .left.about-content {
      position: relative;
      width: 40%;
      height: 25vh;
    }
    .content {
      padding: 1rem;
    }
    .headText {
      font-size: 3rem;
    }
    .mission {
      padding: 5%;
      margin: auto 4%;
    }
  }
}

@media (min-width: 992px) {
  .about-container {
    .aboutSection {
      min-height: calc(100vh - 100px);
      flex-direction: row;
    }
    .center-text {
      left: -50%;
      width: 100%;
    }
    .banner.about {
      width: 50vh;
      margin: auto 4%;
    }
    .right.about-content {
      width: 60%;
      padding: 5%;
      margin: auto 4%;
    }
    .left.about-content {
      position: relative;
      width: 30%;
      height: 50vh;
    }
    .content {
      padding: 2rem;
    }
    .headText {
      font-size: 3rem;
    }
    .mission {
      padding: 5%;
      margin: auto 4%;
    }
  }
}
</style>