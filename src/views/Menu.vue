<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="img/logo-blanco-cafeopolis.png" height="40px" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button class="navbar-toggler text-white" @click="calculaTotal()" data-toggle="modal" data-target="#carritoModal">
        {{ carrito }}<i class="fa fa-shopping-cart text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link active" to="/menu/1">Menu</router-link>
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

                <div v-if="ca.id != 'u3x4gvCitL2FeBXSrcZC'" v-for="ca in catm" class="mx-0 p-0 text-left btn btn-sm w-100 text-black">
                  <button class="btn btn-trans" @click="gotomenu(ca.id)"> {{ca.name}} </button> 
                </div>

              </div>
            </div>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <div @click="calculaTotal()" data-toggle="modal" data-target="#carritoModal" id="carrito" to="/cart" class="text-white carrito">{{ carrito }} <i class="fa fa-shopping-cart"></i> </div>
        </form>
      </div>
    </div>
  </nav>
    <main role="main">

      <section class="banner-menu mb-4">

        <div v-if="$route.params.id != 'u3x4gvCitL2FeBXSrcZC'" class="container pt-5 pb-3 text-center">
          <h1  class="text-white mt-5">Menu<i v-if="spin == true" class="text-white fas fa-spin fa-spinner"></i></h1>
          <p class="text-white"> {{ idioma.m1 }} </p>
        </div>

        <div v-if="$route.params.id == 'u3x4gvCitL2FeBXSrcZC'" class="container pt-5 pb-3 text-center">
          <h1 class="text-white mt-5">Boutique<i v-if="spin == true" class="text-white fas fa-spin fa-spinner"></i></h1>
        </div>
      </section>

      <div v-if="$route.params.id == 1 && cat.id != 'u3x4gvCitL2FeBXSrcZC'" v-for="cat in categorias" class="container">
          <div class="row">
            <div class="col-sm-12 text-center my-3">
              <h3 class="marron1"> {{cat.name}}  </h3>
            </div>
          </div>
          <div v-if="cat.id == prod.categoria.id" v-for="prod in productos" class="row product">
            <div class="col-sm-2 text-center">
              <img class="img-fluid img-prd fit" :src="prod.foto" alt="">
            </div>
            <div class="col-sm-7">
              <h4 v-if="idioma.name == 'es'" class="marron1">#{{prod.orden}} - {{ prod.nombreEs }}</h4>
              <h4 v-if="idioma.name == 'en'" class="marron1">#{{prod.orden}} - {{ prod.nombreEn }}</h4>
              <h4 v-if="idioma.name == 'fr'" class="marron1">#{{prod.orden}} - {{ prod.nombreFr }}</h4>
              <p v-if="idioma.name == 'en'" class="lead">{{ prod.desEn}}</p>
              <p v-if="idioma.name == 'es'" class="lead">{{ prod.desEs}}</p>
              <p v-if="idioma.name == 'fr'" class="lead">{{ prod.desFr}}</p>
            </div>
            <div class="col-sm-3 text-center">
              <h3 class="">$ {{ prod.precio }} </h3>
              <button @click="subOrder(prod.id,prod.nombreEs,prod.precio,prod.foto)" data-toggle="modal" data-target="#orderModal" class="btn btn-danger img-prd" >
                {{ idioma.m2 }} <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
      </div>

      <div v-if="$route.params.id != 1 && $route.params.id == cat.id" v-for="cat in categorias" class="container">
          <div class="row">
            <div class="col-sm-12 text-center my-3">
              <h3 class="marron1"> {{cat.name}}  </h3>
            </div>
          </div>
          <div v-if="cat.id == prod.categoria.id" v-for="prod in productos" class="row product">
            <div class="col-sm-2 text-center">
              <img class="img-fluid img-prd fit" :src="prod.foto" alt="">
            </div>
            <div class="col-sm-7">
              <h4 v-if="idioma.name == 'es'" class="marron1">#{{prod.orden}} - {{ prod.nombreEs }}</h4>
              <h4 v-if="idioma.name == 'en'" class="marron1">#{{prod.orden}} - {{ prod.nombreEn }}</h4>
              <h4 v-if="idioma.name == 'fr'" class="marron1">#{{prod.orden}} - {{ prod.nombreFr }}</h4>
              <p v-if="idioma.name == 'en'" class="lead">{{ prod.desEn}}</p>
              <p v-if="idioma.name == 'es'" class="lead">{{ prod.desEs}}</p>
              <p v-if="idioma.name == 'fr'" class="lead">{{ prod.desFr}}</p>
            </div>
            <div class="col-sm-3 text-center">
              <h3 class="">$ {{ prod.precio }} </h3>
              <button @click="subOrder(prod.id,prod.nombreEs,prod.precio,prod.foto)" data-toggle="modal" data-target="#orderModal" class="btn btn-danger img-prd" >
                {{ idioma.m2 }} <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
      </div>


<!--   aqui erminan los for -->
    </main>

<!-- Modal -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="orderModalLabel">
              <img :src="foto" height="30px" class="img-prd" alt="">
              {{ nombreEs }} - $ {{ precio }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>{{ idioma.m3 }}</h3>
            <!-- <input type="hidden" v-model="id"> -->
            <input v-on:keyup="calcular()" @click="calcular()" type="number" class="form-control" v-model="cantidad">
            <h4>$ {{total}}</h4>
          </div>
          <div class="modal-footer">
            <button @click="order()" class="btn btn-primary">{{ idioma.m2 }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="carritoModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          
          <div class="modal-header">
            <h5 class="modal-title" id="orderModalLabel">
             {{ idioma.m4 }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
             <h5 v-if="vacio != ''"> {{ idioma.m5 }} </h5>
             <div v-for="car in arrayCar" class="row">
                <div class="col-2">
                 <img :src="car.foto" height="30px" class="img-prd" alt="">
               </div>
               <div class="col-1">
                 <p> {{car.cantidad}} </p>
               </div>
               <div class="col-3">
                 <p> {{car.nombre}}</p>
               </div>
               
               <div class="col-2">

                 <p> $ {{car.precio}} </p>
               </div>
               <div class="col-2">

                 <p> $ {{car.total}} </p>
               </div>
               <div class="col-2">
                 <button @click="borrarEl(car.contador,car.cantidad)" class="btn btn-danger"> X </button>
               </div> 
             </div>
              <h4>Total: ${{totalPago}} </h4>
              <form v-on:submit.prevent="envio()" >
                <div class="text-left bg-light p-3">
                  {{ idioma.m6 }}<br>
                  <input v-model="nombre" type="text" class="form-control" required>
                  {{ idioma.m7 }}<br>
                  <input v-model="direccion" type="text" class="form-control" required>
                </div>
                <div class="text-right bg-light px-3 pb-3">
                  <button type="submit" class="btn btn-success">{{ idioma.m8 }}</button>
                </div>
            
                
            </form>
          
          
        </div></div>
      </div>
    </div>
 <!-- Fin modal -->
 
 <!--    <Footer/> -->
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
      categorias:[],
      vacio:"Votre panier est vide",
      productos:[],
      contador:0,
      nombre:"",
      direccion:"",
      spin:false,
      carrito:0,
      pedido:[],
      cantidad:0,
      nombreEs:"",
      precio:0,
      total:0,
      totalPago:0,
      id:"",
      arrayCar:[],
      foto:"",
      cat:"",
      catm:[]
    }
  },
  name: 'Menu',
  created(){
   this.catmenu()
    this.idiomas("fr")
    this.getMenu()
    this.getCat()

    fetch('/new-message', {
    method: 'POST',
    body: JSON.stringify({message: "message value"}),
    headers: {
      'Content-Type': 'application/json'
    }})
  },
  methods:{
     gotomenu(id){
       this.$router.push("/menu/"+id) 
    },
    catmenu(){
      firebase.firestore().collection("category").orderBy("order").get().then((query)=>{
        query.forEach(doc => {
          this.catm.push({
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
    borrarEl(c,cant){
      this.carrito -= cant
      var arr = this.arrayCar
      arr.splice( c, 1 );
      var i = 0
      this.contador--
      for(i=0; i < this.arrayCar.length; i++){
        this.arrayCar[i].contador = i
      }
     
    },
    envio(){
      var pedido
      var i
      var array = this.arrayCar
      var fin = array.length
      for(i=0; i<fin; i++){
        pedido += array[i].cantidad+"%20"+array[i].nombre+" > "
      }
      var a= String(pedido)
      var b = a.split("undefined")
      var c = b[1]
      var d = "A%20nombre%20de:%20"+this.nombre+" - %20Direccion:%20"+this.direccion+" - %20peido:%20"
     window.location.href = "https://api.whatsapp.com/send?phone=+14388882929&text=Pedido%20web-"+d+c
    },
    calcular(){
      if(this.cantidad < 0){
        this.cantidad = 0
      }
      this.total = this.precio * this.cantidad
    },
    subOrder(id,nombre,precio,foto){
      this.id = id
      this.nombreEs = nombre
      this.cantidad = 1
      this.precio = precio
      this.total = this.precio * this.cantidad
      this.foto = foto
    },
    calculaTotal(){

      var array = this.arrayCar
      var fin = array.length
      var i
      var cuenta=0
      var totalcuenta=0
      for(i=0; i < fin; i++){
          cuenta = array[i].cantidad * array[i].precio
          console.log(cuenta)
          totalcuenta = cuenta + totalcuenta
      }
      this.totalPago = totalcuenta
    },
    order(){
      this.vacio = ''
      var id = this.id
      var carrito = parseInt(this.carrito)
      var cantidad = parseInt(this.cantidad)
      this.carrito = carrito + cantidad
      this.arrayCar.push({
        contador:this.contador,
        id:this.id,
        cantidad:this.cantidad,
        nombre:this.nombreEs,
        precio:this.precio,
        foto:this.foto,
        total:this.total
      })
        this.contador++
      

      $("#orderModal").modal('hide')
      $('body').removeClass('modal-open')
      $('.modal-backdrop').remove()
    },
    getMenu(){
      this.productos=[]
      firebase.firestore().collection("productos").orderBy("order").get().then((qs)=>{
        qs.forEach(doc =>{
          this.productos.push({
            nombreEs:doc.data().nombreEs,
            nombreEn:doc.data().nombreEn,
            nombreFr:doc.data().nombreFr,
            categoria:doc.data().categoria,
            foto:doc.data().foto,
            desEs:doc.data().desEs,
            desEn:doc.data().desEn,
            desFr:doc.data().desFr,
            precio:doc.data().precio,
            id:doc.id,
            orden:doc.data().order
          })
        })
      })
    },
    getCat(){
      this.spin = true
      this.categorias=[]
      firebase.firestore().collection("category").orderBy("order").get().then((qs)=>{
        /* console.log("Listando"); */
        this.spin = false
        qs.forEach((doc) => {
          /* console.log(doc.id); */
            this.categorias.push({
            name:doc.data().category,
            id:doc.id
          })
        });
      }) 
    }

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
</style>