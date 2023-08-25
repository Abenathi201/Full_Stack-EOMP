<template>
        <div class="header mb-3">
        <div class="routerlinks">
            <nav class="navbar navbar-expand-lg bg-black w-100">
                <div class="container-fluid">
                   <router-link class="navbar-brand links text-white fw-bold" to="/">WatchWisp & Wardrobe<br/> Co.</router-link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                         <li class="nav-item">
                            <router-link class="nav-link links text-white fw-bold fs-5" to="/products">Products</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links text-white fw-bold fs-5" to="/about">About</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links text-white fw-bold fs-5" to="/admin">Admin</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links text-white fw-bold fs-5" to="/contact">Contact</router-link>
                         </li>
                      </ul>
                   </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.header {
  font-family: montserrat;
}
.navbar-toggler {
    border: solid !important;
    color: white !important;
}
   .navbar-nav {
    
    /* background-color: blue; */
   }
   .collapse {
    padding-inline: 23% !important;
   }
   @media screen and (max-width: 991px) {
      .collapse {
         padding-inline: 0 !important;
      }
   }
   template {
    scroll-behavior: smooth;
   }
   @media screen and (max-width: 360px) {
    .navbar-brand {
        font-size: medium !important;
    }
   }
</style>