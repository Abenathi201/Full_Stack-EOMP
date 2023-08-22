<template>
    <div class="container">
        <div class="containe py-5 ">
        <div class="contact">
            <h3 class="fw-bold">Get in Touch</h3>
            <p><img height="15" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/> 2826 Uxolo St, Old Cross Roads, Cape Town</p>
            <p><img height="15" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/> +27 63 304 6337 / +27 65 838 0423</p>
            <p><img height="15" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/> inamnkabi1@gmail.com / abenathisindaphi201@gmail.com</p>
        </div>
        <div class="exact-contact">
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8588560730477!2d18.601187275265726!3d-33.99615897317811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc459d6c1e5c75%3A0x35d45f12a795aa6d!2s2826%20Uxolo%20St%2C%20Crossroads%2C%20Cape%20Town%2C%207750!5e0!3m2!1sen!2sza!4v1688380510541!5m2!1sen!2sza" width="600"  height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="form">
                                <form
  action="https://formspree.io/f/xayzrnye"
  method="POST" @submit="formValidation"
>

    <div class="mb-3 contact">
        <input type="text" name="fullName" v-model="fullName" required>
        <span>Your Full Name</span>
      </div>
    <div class="mb-3 contact">
      <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" required>
      <span>Email Address</span>
    </div>
    <div class="mb-3 contact">
        <textarea name="" id="message" v-model="message" required></textarea>
        <span>Your Message here...</span>
    </div>
    <button type="submit" class="bg-black text-white px-3 py-1 border-0 fw-bold">Submit</button>
</form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      fullName: "",
      email: "",
      message: "",
      emailError: false,
    };
  },
    methods: {
    submitForm() {
      this.emailError = !this.validateEmail(this.email);
      if (!this.fullName || this.emailError || !this.message) {
        alert("Please fill in all required fields.");
        return;
      }
    },
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
button {
  animation: wiggle 2s linear infinite;
}
.contact {
    animation: fadeInDown; 
    animation-duration: 2s;
}
.form {
    animation: fadeInRight; 
  animation-duration: 2s;
}
.map {
  animation: fadeInLeft; 
  animation-duration: 2s;
}
/* Keyframes */
@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}
.containe {
    
}
  .contact input {
    width: 100% !important;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    border: none !important;
    border-bottom: 2px solid black !important;
    outline: none;
    border-radius: 0;
    resize: none;
}
.container {
    font-family: inconsolata;
}
@media screen and (max-width: 650px) {
    iframe {
        width: 550px;
    }
    .form {
        min-width: 550px;
    }
}
@media screen and (max-width: 600px) {
    iframe {
        width: 500px;
    }
    .form {
        min-width: 500px;
    }
}
@media screen and (max-width: 550px) {
    iframe {
        width: 450px;
    }
    .form {
        min-width: 450px;
    }
}
@media screen and (max-width: 480px) {
    iframe {
        width: 400px;
    }
    .form {
        min-width: 400px;
    }
}
@media screen and (max-width: 420px) {
    iframe {
        width: 350px;
    }
    .form {
        min-width: 350px;
    }
}
@media screen and (max-width: 380px) {
    iframe {
        width: 300px;
    }
    .form {
        min-width: 300px;
    }
}
@media screen and (max-width: 320px) {
    iframe {
        width: 280px;
    }
    .form {
        min-width: 280px;
    }
}
form {
    width: 100%;
}
.form {
    margin-top: 3rem;
    width: 600px;
}
.contact textarea {
    width: 100% !important;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    border: none !important;
    border-bottom: 2px solid black !important;
    outline: none;
    resize: none;
}
.exact-contact {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.contact span {
    position: relative ;
    left: 0;
    padding: 5px 0 !important;
    font-size: 15px !important;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;  
}
</style>