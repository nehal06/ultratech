<template>
  <div class="circle d-flex mb-2 mb-lg-0">
    <h2 class="text-uppercase align-middle mx-auto my-auto">{{card.title}}</h2>
  </div>
</template>

<script>
export default {
name:"BrandCardSelf",
props: ['card']
}
</script>

<style>
.circle {
 
    border-radius: 50%;
    width: 220px;
    height: 220px;
    /* color: black; */
}
.circle h2{
  padding: 1rem;
}
/* @media (min-width: 768px) {
div.circle:nth-child(2){
  margin-left: 1rem;
  background: blue;
}
}
@media (min-width: 992px) {
div.circle:nth-child(even){
  margin-left: 0;
}
} */
</style>