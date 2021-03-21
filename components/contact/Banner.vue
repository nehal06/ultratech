<template>
  <div>
    <div class="contact-banner">
      <div class="contact-back">
        <img src="contact/1.jpg" alt="" />
        <h1 class="headText text-center">Contact Us</h1>
      </div>

      <div class="second-back address-wrap">
        <h1 class="text-center">Get in touch !!</h1>
        <div class="d-flex address-wrapper justify-content-center flex-wrap">
          <div class="first">
            <img src="" alt="" />
            <h6>PHONE</h6>
            <p>Phone:1234567890</p>
          </div>
          <div class="second">
            <img src="" alt="" />
            <h6>ADDRESS</h6>
            <p>Mumbai , Maharashtra</p>
          </div>
          <div class="third">
            <img src="" alt="" />
            <h6>EMAIL</h6>
            <p>Email:ultratech@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://dribbble.com/shots/3631410-Dark-Modern-Style-Contact-Us-Page/attachments/810934
export default {};
</script>

<style lang="scss">
.contact-banner {
  width: 100%;
  height: 90vh;
  position: relative;
  .contact-back {
    height: 30vh;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    .headText {
      color: #fff;
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .address-wrap {
    position: relative;
    padding: 5% 0;
    .address-wrapper {
      margin: auto;
     
      padding-top: 3%;
      .first,
      .second,
      .third {
        padding: 5%;
     
      }
       .first,
      .second{      
        border-right: 3px solid black;
      }
 
    }
  }
}

@media (min-width: 320px) {
  .contact-banner {
    .contact-back {
      .headText {
        font-size: 3rem;
        top: 70px;
      }
    }
      .address-wrap {
        position: relative;
      .address-wrapper {
        width: 100%;              
        width: 100%;
        padding-top: 3%;
        .first,
        .second,
        .third {
          margin: auto;
          padding: 3%;
         width: 70%;
        }
         .first,
        .second{
            border-right: none;
        }
     
      }
    }
  }
}

@media (min-width: 768px) {
  .contact-banner {
    .contact-back {
      .headText {
        top: 120px;
        font-size: 3rem;
      }
    }
    .address-wrap {
    
      .address-wrapper {
      
        height: 15vh;
        width: 90%;
        padding-top: 3%;
        .first,
        .second,
        .third {
          padding: 3%;
        }
         .first,
        .second{
            border-right: 3px solid black;
        }
 
      }
    }
  }
}

@media (min-width: 992px) {
  .contact-banner {
    .contact-back {
      .headText {
        top: 50px;
        font-size: 3rem;
      }
    }
    .address-wrap {
    
      .address-wrapper {
      
        height: 20vh;
        width: 80%;
        padding-top: 3%;
        .first,
        .second,
        .third{
          padding: 0 5%;
        }
         .first,
        .second{         
          border-right: 3px solid black;
        }
     
      }
    }
  }
}
</style>