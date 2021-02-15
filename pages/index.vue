<template>
 <div>
    <Banner/>
    <Brands/>
    <About/>
 </div>
</template>

<script>
import Banner from '~/components/home/Banner.vue'
import Brands from '~/components/home/Brands.vue'
import About from '~/components/home/About.vue'
export default {
  components:{
    Banner,
    Brands,
    About
  }
}
</script>

<style> 

</style>
