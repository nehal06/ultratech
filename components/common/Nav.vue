<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand class="brand-logo" href="/">
        <img class="logo" src="/ultratech-logo-100.png"/>
      </b-navbar-brand>
      <b-navbar-brand class="d-none d-md-flex flex-column text-muted" href="/">
        <span class="brandName"><h4 class="mt-md-1 mt-lg-1">Ultratech Chemical Industries</h4></span>
         <span class="brandName"><small class="align-top">Invigorating Chemistry</small></span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mt-4 mt-md-0">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/About">About</b-nav-item>
          <b-nav-item href="/Contact">Contact</b-nav-item>
          <b-nav-item v-b-toggle="'collapse-2'" @click.prevent>
            Product
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-collapse id="collapse-2">
      <b-card border-variant="primary">I am collapsible content!</b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {};
</script>

<style>
.brand-logo{
  position: absolute;
  height: 100px;
  top: 2%;
  z-index: 10000;
}
.logo{
  border-radius: 50%;
   background: white;
  height: 100px;
}
.brandName{
  margin-left: 6rem;
}
@media (min-width: 320px) {
  .brand-logo{
  position: absolute;
  height: 100px;
  top: 2%;
  z-index: 10000;
} 
 .logo{
   height: 80px;
 }
}

@media (min-width: 768px) {
 .brand-logo{
  position: absolute;
  height: 100px;
  top: 2%;
  z-index: 10000;
}
}

@media (min-width: 992px) {
 .brand-logo{
  position: absolute;
  height: 100px;
  top: 2%;
  z-index: 10000;
}
}
</style>