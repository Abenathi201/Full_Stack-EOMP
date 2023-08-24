<template>
      <!-- <div class="col-md-3"> -->
        <div class="product col-lg-4 col-md-4 col-12" v-for="product in products" :key="product.prodID">
           
             <div class="img">
            <img class="img-fluid" :src="product.prodUrl" alt="product.prodName" />
            <!-- <img src="https://i.postimg.cc/DZ3KwMxk/DIESEL-S-UKIYO-LOW-SNEAKERS-WITH-CONTRAST-OVERLAYS.jpg" alt="Product" class="img-responsive" /> -->
          </div>
          <div class="text">
            <div class="category">
              <router-link class="details text-decoration-none" :to="'/singleProd'">View Details</router-link>
            </div>
            <div class="title-product">
             <h3>{{ product.prodName }}</h3>
            </div>
            <div class="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div class="card-footer">
              <div class="left"><span class="price">R {{ product.amount }}</span></div>
              <div class="right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
            </div>
          </div>   
        </div>
      <!-- </div> -->
</template>
<script>
import SingleProductComp from './SingleProductComp.vue'
export default {
    props: ["products"],
    components: { SingleProductComp }
}
</script>
<style scoped>
.product{
  background:#fff;
  padding:15px;
  width: 400px;
  border-radius:6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position:relative;
  margin:20px auto;
}
.img{
  position:absolute;
  top:5px;
  left:50%;
  transform:translate(-50%);
  -webkit-transform:translate(-50%);
  -ms-transform:translate(-50%);
  -moz-transform:translate(-50%);
  -o-transform:translate(-50%);
  -khtml-transform:translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
}
.img img{
  width:100%;
  transition: all 0.2s ease-in-out;
  border-radius:6px;
}
.product:hover .img{
  top:-40px;
}
.product:hover .img img{
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.text{
  padding-top:150%;
}
.text .category{
  text-align:center;
  font-size:12px;
  font-weight:bold;
  padding:5px;
  margin-bottom:45px;
  position:relative;
  transition: all 0.2s ease-in-out;
}
.text .category > *{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  -khtml-transform: translate(-50%,-50%);
    
}
.text .category > .details{
  padding: 12px 30px;
  border: 1px solid #313131;
  background:#212121;
  color:#fff;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius:27px;
  transition: all 0.05s ease-in-out;
  
}
.product:hover .text .category > .details{
  border-color:#ddd;
  box-shadow: none;
  padding: 11px 28px;
}
.product:hover .text .category{
  margin-top: 0px;
}
.text .title-product{
  text-align:center;
}
.text .title-product h3{
  font-size:20px;
  font-weight:bold;
  margin:15px auto;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  width:100%;
}
.text .description-prod p{
  margin:0;
}
/* Truncate */
.text .description-prod {
  text-align:center;
  width: 100%;
  height:62px;
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  margin-bottom:15px;
}
.card-footer{
  padding: 25px 0 5px;
  border-top: 1px solid #ddd;
}
.card-footer:after, .card-footer:before{
  content:'';
  display:table;
}
.card-footer:after{
  clear:both;
}

.card-footer .left{
  float:left;
  
}

.card-footer .right{
  float:right;
}

.price{
  font-size:18px;
  font-weight:bold;
}

a.buy-btn{
  display:block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  width:35px;
  height:35px;
  line-height:35px;
  border-radius:50%;
  border:1px solid #212121;
  transition: all 0.2s ease-in-out;
}
a.buy-btn:hover , a.buy-btn:active, a.buy-btn:focus{
  border-color: #FF9800;
  background: #FF9800;
  color: #fff;
  text-decoration:none;
}
.btn{
  display:inline-block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  border-color: #FF9800;
  background: #FF9800;
  padding:12px 30px;
  border-radius:27px;
  margin: 0 5px;
}
.btn:hover, .btn:focus, .btn:active{
  text-decoration:none;
  color:#fff;
}  
.red{
  color:#F44336;
  font-size:22px;
  display:inline-block;
  margin: 0 5px;
}
@media screen and (max-width: 991px) {
  .product{
    margin:40px auto;
  }
  .product .img{
  top:-40px;
}
.product .img img{
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
  .product .text .category > .details{
  border-color:#ddd;
  box-shadow: none;
  padding: 11px 28px;
}
.product .text .category{
  margin-top: 0px;
}
a.buy-btn{
  border-color: #FF9800;
  background: #FF9800;
  color: #fff;
}
}
</style>
