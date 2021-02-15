<template>
    <nuxt-link to="/">
    <b-card class="brand-card"
    overlay
    :img-src="card.src"
    :img-alt="card.alt"
    text-variant="white"
    :title="card.title"
    
  >
    <b-card-text v-if="card.text">
      {{card.text}}
    </b-card-text>
  </b-card>
    </nuxt-link>
</template>

<script>

export default {
name:"BrandCard",
props: ['card']
}
</script>

<style>
.brand-card{
  position: relative;
  height: 200px;
  width: 200px;
  transition: all 500ms ease-in-out;
}
.brand-card .card-text{
  position: absolute;
  bottom:2%;
  right: 4%;
   
}
.brand-card:hover {
  margin-top: 8%;
  cursor: pointer;
  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
@media (min-width: 320px) {
 .brand-card{
  height: 120px;
  width: 120px;
}
}

@media (min-width: 768px) {
 .brand-card{
  height: 150px;
  width: 150px;
}
}

@media (min-width: 992px) {
  .brand-card{
  height: 200px;
  width: 200px;
}
}
</style>