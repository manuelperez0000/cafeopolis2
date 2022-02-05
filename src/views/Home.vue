<template>
  <div class="home">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="img/logo-blanco-cafeopolis.png" height="40px" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-shopping-cart"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- <router-link class="nav-link text-white" to="/login">Ingresa</router-link> -->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu/1">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu/u3x4gvCitL2FeBXSrcZC">Boutique</router-link>
          </li>
          <li class="nav-item">
            <div class="dropdown drop">
              <button class="btn btn-cat dropdown-toggle" type="button" id="drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{idioma.categorias}}
              </button>
              <div class="dropdown-menu mh-500" aria-labelledby="drop">
                <div  v-if="ca.id != 'u3x4gvCitL2FeBXSrcZC'" v-for="ca in cat" class="mx-0 p-0 text-left btn btn-sm w-100 text-black">
                 <button class="btn btn-trans" @click="gotomenu(ca.id)"> {{ca.name}} </button> 
                </div>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    <main role="main">

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src="img/fondo-p3.png" alt="First slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>{{ idioma.p1 }} cafeOpolis Bistro</h1>
                <p>{{ idioma.p2 }} 514 721 1000</p>
                <p>
                  <router-link class="btn btn-lg btn-danger img-prd" to="/menu/1">Menu <i class="fa fa-arrow-right"></i></router-link>
                  </p>
                <img src="img/Logo-footer-60.png" alt="">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img class="second-slide" src="img/fondo-p2.png" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>{{ idioma.p1 }} cafeOpolis Bistro</h1>
                <p>{{ idioma.p2 }} 514 721 1000</p>
                <p>
                  <router-link class="btn btn-lg btn-danger img-prd" to="/menu/1">Menu <i class="fa fa-arrow-right"></i></router-link>
                </p>
                <img src="img/Logo-footer-60.png" alt="">
              </div>
            </div>
          </div>

        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container marketing">

        <div class="row featurette">
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="img/img1.jpg" alt="Generic placeholder image">
          </div>
          <div class="col-md-7">
            <h1 class="">{{ idioma.p3 }} </h1>
            <h3><span class="text-muted">{{ idioma.p4 }}</span></h3> 
            <h4><b>{{ idioma.p5 }}</b></h4>
            <p class="lead text-justify">{{ idioma.p6 }}</p>
            <p class="lead mt-2 text-justify">{{ idioma.p7 }}</p>
          </div>
          
        </div>


        <div class="row featurette my-5">
          
          <div class="col-md-7">
            <h1>Cafeopolis Bistro </h1>
            <h3><span class="text-muted">{{ idioma.p8 }}</span></h3> 
            
            <p class="lead  text-justify">{{ idioma.p9 }}</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="img/img2.jpeg" alt="Generic placeholder image">
          </div>
        </div>
        <hr class="featurette-divider">
        <!-- /END THE FEATURETTES -->
      </div>

      <div class="section bg-black-2">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-sm-4">
              <h3 class="text-white ligth text-center">{{ idioma.p10 }}</h3>
              <p class="text-white lead text-justify">{{ idioma.p11 }}</p>
            </div>
            <div class="col-sm-4 p-0">
              <img width="100%" src="img/arepa1.jpg" alt="">
            </div>
            <div class="col-sm-4">
              <p class="text-white text-justify lead">{{ idioma.p12 }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 p-0">
              <img width="100%" src="img/tequenos1.jpg" alt="">
            </div>
            <div class="col-sm-4">
              <h3 class="text-white ligth text-center">{{ idioma.p13 }}</h3>
              <p class="text-white text-justify lead">{{ idioma.p14 }}</p>
            </div>
            <div class="col-sm-4 p-0">
              <img width="100%" src="img/arepa2.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="text-center  bg-black-2">
        <div class="circulo text-center">
          
          <router-link class="btn btn-lg btn-danger img-prd menu-btn" to="/menu/1">Menu <i class="fa fa-arrow-right"></i></router-link>
        </div>
      </div>
      
    </main>
    <section class="bg-black-2 py-5"> <!-- footer -->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <img src="img/logo-blanco-cafeopolis.png" alt="Logo Cafeopolis" class="img-fluid">

            <h3 class="text-white">{{ idioma.p15 }}</h3>
            <p class="text-white">info@cafeopolis.com</p>
            
            <p class="text-white">{{ idioma.p16 }}: <a href="tel:5147211000">514 721 1000</a></p> 

          <h3 class="text-white">{{ idioma.p17 }}</h3>
          <a target="_blanck" href="https://www.facebook.com/cafeopolis_bistro-105986444592279">
            <img class="img-social" src="img/fb.png">
          </a>
          <a target="_blanck" href="https://www.instagram.com/cafeopolis_bistro/">
             <img class="img-social" src="img/ig.png">
          </a>
          </div>
          <div class="col-sm-8">
            <h3 class="text-white">{{ idioma.p18 }}</h3>
            <p class="text-white">3790 Rue Masson. Montreal Quebec Canada H1X1S6</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5587.455500748104!2d-73.570231!3d45.555802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91c008d4b77ad%3A0xe9c5c50ac09406b1!2s3790%20Rue%20Masson%2C%20Montr%C3%A9al%2C%20QC%20H1X%201S6%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2sve!4v1604941947624!5m2!1ses-419!2sve" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center py-3">
      © 2020 Cafeopolis Bistro. - {{idioma.disenadopor}} <a target="_blanck" href="https://redi-developers.com">redi-developers.com</a>  ·
    </section>
    <div class="idioma">
      {{ idioma.idiomas }}
      <button class="btn-es" @click="idiomas('es')"></button>
      <button class="btn-en" @click="idiomas('en')"></button>
      <button class="btn-fr" @click="idiomas('fr')"></button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      idioma:{},
      cat:[]
    }
  },
  name: 'Home',
  created(){
    this.idiomas("fr")
    this.catmenu()
  },
  methods:{
    gotomenu(id){
       this.$router.push("/menu/"+id) 
    },
    catmenu(){
      firebase.firestore().collection("category").orderBy("order").get().then((query)=>{
        query.forEach(doc => {
          this.cat.push({
            id:doc.id,
            name:doc.data().category
          })
        });
      })
    },
    idiomas(i){
      console.log("idioma: "+i);
      var dir ="";
      if(i == "es"){
        dir = "es.json"
      }else if(i == "en"){
        dir ="en.json"
      }else{
        dir = "fr.json"
      }
      fetch("./idiomas/"+dir)
      .then(response => response.json())
      .then(data => {
      this.idioma = data
      })
    },
  }
}

</script>
<style scoped>
  #carrito{
  border-bottom: 2px solid rgba(0,0,0,0);
}
#carrito:hover{
  border-bottom: 2px solid #fff;;
  color:#e8f34d;
  cursor:pointer;

}
.circulo{
  height: 150px;
  width: 150px;
  border-radius: 200px;
  background-color: rgba(156, 156, 156, 0.082);
  margin:0px auto;
}
.menu-btn{
  margin-top:55px;
 
}


</style>