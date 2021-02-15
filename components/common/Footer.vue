<template>
  <footer class="footer">
    <b-container class="bv-example-row p-0" fluid>
     
      <b-row class="footer-primary">
         
        <b-col cols="12" sm="12" md="12" lg="5">
          <b-media>
            <template #aside>
              <b-img src="ultratech-logo-50.png" alt="placeholder"></b-img>
            </template>

            <h4 class="mt-0">Ultratech Chemical Industries</h4>
            <p>Invigorating Chemistry</p>
          </b-media>
           <div class="p-2 bd-highlight">
             <div class="d-flex">Email : 
            <a class="footer-link" href="mailto:test@test.com">&nbsp;ultratech@gmail.com</a></div>
          </div>
        </b-col>
     
        <b-col cols="12" sm="12" md="5" lg="3">
           <div class="p-2 bd-highlight">
             <p class="font-weight-bold m-0">Company</p>
           </div>
          <div class="pl-2 pt-2 bd-highlight">
            <nuxt-link class="footer-link" to="/"> Home </nuxt-link>
          </div>
          <div class="pl-2 bd-highlight">
            <nuxt-link class="footer-link" to="/About"> About </nuxt-link>
          </div>
          <div class="pl-2 bd-highlight">
            <nuxt-link class="footer-link" to="/Contact"> Contact </nuxt-link>
          </div>
        
        </b-col>
        <b-col cols="12" lg="4" md="7" sm="12">
           <div class="p-2 bd-highlight">
             <p class="font-weight-bold m-0">Reach Us</p>
           </div>
          
          <div class="ml-auto p-2 bd-highlight">
            Established in 2007 , <br/>
            Located in Mumbai, Maharashtra 
          </div>
        </b-col>
      </b-row>

      <!-- <p class="copyrights">&copy; <span class="copy-year">2021</span> Ultratech Chemical Industries. All Rights Reserved.</p> -->

      <b-row class="footer-second">
        <b-col>
          <div
            class="d-flex flex-lg-row flex-md-row flex-column justify-content-end bd-highlight"
          >
          <div class="d-flex">
             <div class="p-2 bd-highlight">Follow Us:</div>
            <div class="p-2 bd-highlight">
              <nuxt-link class="footer-link" to="/">
                <img class="social-icons" src="social/facebook-1.png" />
              </nuxt-link>
            </div>
            <div class="p-2 bd-highlight">
              <nuxt-link class="footer-link" to="/Contact">
                <img class="social-icons" src="social/twitter-1.png" />
              </nuxt-link>
            </div>
            <div class="p-2 bd-highlight">
              <nuxt-link class="footer-link" to="/Contact">
                <img class="social-icons" src="social/instagram.png" />
              </nuxt-link>
            </div>
          </div>
           
            <div class="ml-auto p-2 bd-highlight">
              &copy; <span class="copy-year">2021</span> Ultratech Chemical
              Industries. All Rights Reserved.
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style>
.footer .footer-primary,
.footer .footer-second {
  margin: 0;
}
.social-icons {
  height: 20px;
}
.footer-second p.copyrights {
}
</style>