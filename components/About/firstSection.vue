<template>
<div>
   <div class="banner">
    <img src="/about.jpg" alt="">
    <h1 class="center-text">'US'</h1>
  </div>
  <div class="content container-fluid">
    <h1 class="text-center">Who we are...</h1>
  </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style>
.banner{
  height: 100vh;
  width: 100%;
  position: relative;
}
.banner img{
  height: 100%;
  width: 100%;
  z-index: 2;
}
.banner::before{
  content: "";
  z-index: 3;
  background: black;
  opacity: 0.7;
  height: 100%;
  width: 100%;
  position: absolute;
    top: 0;
    left: 0;
}
.center-text{
  font-size: 15rem;
  font-weight: 900;
  position: absolute;
  top:30%;
  left:35%;
  color: white;
   z-index: 4;
}
.content{
  padding: 2rem;
}
</style>