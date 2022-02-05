<template>
  <div>
    
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <div class="navbar-brand col-sm-3 col-md-2 mr-0">CafeOpolis Admin</div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a @click="signOut()" class="nav-link" >Sign out</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <Sidebarvue/>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 mb-5">

          <div class="row mb-3">
            <div class="col-8">
              <h2>Products</h2>
            </div>
            <div class="col-4 text-right">
             
              <button v-if="auth == 0" data-toggle="modal" data-target="#nuevoProducto" class="btn btn-primary btn-lg">+</button>
            </div>
          </div>
          
          <div v-if="auth == 0" class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Order</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="prod in products">
                  <td>
                    <img class="img-fluid max-100" :src="prod.foto" alt="">
                  </td>
                  
                  <td>
                    <strong>{{ prod.nombreEs }} {{ prod.id }}</strong> 
                  </td>
                  <td>
                    <!-- <button @click="orderbtn(prod.id, prod.foto, prod.precio, prod.nombreEs, prod.nombreEn, prod.nombreFr, prod.categoria, prod.desEs, prod.desEn, prod.desFr)" class="btn btn-sm btn-success" > + </button> -->
                    {{prod.order}}
                  </td>
                  <td>
                    <p> {{prod.categoria.category}}  </p> 
                  </td>
                  <td>{{prod.desEs}}</td>
                  <td>$ {{ prod.precio }}</td>
                  <td>
                    <button @click="borrar(prod.id)" class="btn btn-danger form-control p-1 mb-1">x</button>
                    <button @click="valEdit(prod.id)" data-toggle="modal" data-target="#editarProducto"  class="btn btn-primary form-control p-1">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="nuevoProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form v-on:submit.prevent="save()">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Agregar Producto</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                 <h4>Posicion</h4>
                <input v-model="order" type="number" class="form-control" required>
                <h4>Nombre</h4><hr>
                Español<br>
                <input v-model="nombreEs" type="text" class="form-control" required>
                Ingles<br>
                <input v-model="nombreEn" type="text" class="form-control" required>
                Frances<br>
                <input v-model="nombreFr" type="text" class="form-control" required>
                <h2>Descripcion</h2><hr>
                Español<br>
                <textarea v-model="desEs" type="text" class="form-control" ></textarea>
                Ingles<br>
                <textarea v-model="desEn" type="text" class="form-control" ></textarea>
                Frances<br>
                <textarea v-model="desFr" type="text" class="form-control" ></textarea>

                <h4>Foto</h4>
                <img v-if="bannerimg != ''" class="w-100" v-bind:src="bannerimg" >
                  <div class="custom-file">
                      <input @change="cargarBanner($event)" type="file" class="custom-file-input" name="bannerI" id="bannerI">
                      <label class="custom-file-label" for="customFileLang">{{ bannerUrl }}</label>
                  </div>
                <div class="input-group my-3" v-bind:style="{'display':display}">
                    <div class="w-100 text-center"><p class="mb-0 mt-2 p-0">{{ progress }}%</p></div>
                    <div class="wrapper w-100">
                        <div class="progress-bar bg-success" v-bind:style="{'width':progress+'%'}"></div>
                    </div>
                </div>

                <h4>Precio</h4><hr>
                <input v-model="precio" step=".01" type="number" class="form-control" required>
                <h4>Categoria</h4><hr>
              
                <select v-model="categoria" class="form-control"> 
                  <option v-for="cat in categoriaR" :value="cat">
                    {{ cat.category }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <input type="Submit" class="btn btn-primary" value="Guardar">
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal fade" id="editarProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form v-on:submit.prevent="Editar()">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Agregar Producto</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h4>Posicion</h4>
                <input v-model="order" type="number" class="form-control" required>
                <h4>Nombre</h4>
                Español<br>
                <input v-model="EdnombreEs" type="text" class="form-control" required>
                Ingles<br>
                <input v-model="EdnombreEn" type="text" class="form-control" required>
                Frances<br>
                <input v-model="EdnombreFr" type="text" class="form-control" required>
                <hr><h2>Descripcion</h2>
                Español<br>
                <textarea v-model="EddesEs" type="text" class="form-control" ></textarea>
                Ingles<br>
                <textarea v-model="EddesEn" type="text" class="form-control" ></textarea>
                Frances<br>
                <textarea v-model="EddesFr" type="text" class="form-control" ></textarea>
                <h4>Foto</h4>
                <img v-if="bannerimg != ''" class="w-100" v-bind:src="bannerimg" >
                <div class="custom-file">
                    <input @change="cargarBanner($event)" type="file" class="custom-file-input" name="bannerI" id="bannerI">
                    <label class="custom-file-label" for="customFileLang">{{ bannerUrl }}</label>
                </div>
                <div class="input-group my-3" v-bind:style="{'display':display}">
                    <div class="w-100 text-center"><p class="mb-0 mt-2 p-0">{{ progress }}%</p></div>
                    <div class="wrapper w-100">
                        <div class="progress-bar bg-success" v-bind:style="{'width':progress+'%'}"></div>
                    </div>
                </div>
                <hr><h4>Precio</h4>
                <input v-model="Edprecio" type="number" step=".01" class="form-control" required>
                <hr><h4>Categoria</h4>
              
                <p>{{ Edcategoria.category }}</p>
              </div>
              <div class="modal-footer">
                <input type="Submit" class="btn btn-primary" value="Guardar">
              </div>
            </form>
          </div>
        </div>
      </div>
    <!-- fin modal -->

  </div>
</template>
<script>
import Sidebarvue from '@/components/Sidebarvue.vue'
export default {
  name:"Products",
  data(){
    return{
      auth:1,
      nombreEs:"",
      nombreEn:"",
      nombreFr:"",
      desEs:"",
      desEn:"",
      desFr:"",
      foto:"",
      precio:"",
      categoria:"",
        EdId:"",
        EdnombreEs:"",
        EdnombreEn:"",
        EdnombreFr:"",
        EddesEs:"",
        EddesEn:"",
        EddesFr:"",
        Edfoto:"",
        Edprecio:"",
        Edcategoria:"",
      categoriaR:[],
      products:[],
        file:"",
        bannerUrl:"Seleccionar Archivo",
        progress:0,
        display:"inline",
        bannerimg:'',
        url:"",
        extendName:"",
        name:"",
        order:0
    }
  },
  created(){
    this.aut()
    this.getProducts()
    this.getCategory()
  },
  methods:{
    orderbtn(id,foto,precio,nombreEs,nombreEn,nombreFr,categoria,desEs,desEn,desFr){
//alert(id+"-"+foto+"-"+precio+"-"+nombreEs+"-"+nombreEn+"-"+nombreFr+"-"+categoria+"-"+desEs+"-"+desEn+"-"+desFr)
      firebase.firestore().collection('productos').doc(id).set({
          id,
          foto,
          precio,
          nombreEs,
          nombreEn,
          nombreFr,
          categoria,
          desEs,
          desEn,
          desFr,
          order:0
      }).then(()=>{
        //alert("Update success")
        this.getProducts()

      })
    },
    cargarBanner(e){
        this.file = e.target.files
        var file =  this.file[0];
        this.display = "inline";
        var storage = firebase.storage();
        var extend = "cafeOpolis"+Math.floor(Math.random()*1000);
        var bannerName = file.name;
        var extendName = extend+bannerName
        this.bannerUrl = extendName
        var ref = storage.ref('banner/'+extendName)
        ref.put(file).on('state_changed',(snap)=>{
            var percent = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
            this.progress = percent;
            if(percent > 9){
                ref.getDownloadURL().then((url)=> {
                    /*  this.guardado(url,extendName); */
                    this.url = url
                    this.extendName = extendName
                    
                    this.bannerimg = url;
                });
            }
        })
    },
    aut(){
      var user = firebase.auth().currentUser;
      if (user) {
        console.log("Autenticado")
        this.auth=0
      } else {
        console.log("No autenticado")
        this.auth=1
        this.$router.push("/admin")
      }
    },
     signOut(){
     firebase.auth().signOut().then(()=>{
        
        this.$router.push("/admin")
      }) /* */
    },
    borrar(id){
      firebase.firestore().collection("productos").doc(id).delete()
      .then(()=>{
        this.getProducts()
      })
      
    },
    valEdit(id){
      
      firebase.firestore().collection("productos").doc(id).get().then((doc)=>{
        this.EdnombreEs = doc.data().nombreEs,
        this.EdnombreEn =doc.data().nombreEn,
        this.EdnombreFr=doc.data().nombreFr,
        this.EddesEs=doc.data().desEs,
        this.EddesEn=doc.data().desEn,
        this.EddesFr=doc.data().desFr,
        this.bannerimg=doc.data().foto,
        this.Edprecio=doc.data().precio,
        this.Edcategoria=doc.data().categoria,
        this.order=doc.data().order
      })
      
      this.EdId = id
    
    },
    Editar(){
       var id = this.EdId
      firebase.firestore().collection("productos").doc(id).update({
        nombreEs:this.EdnombreEs,
        nombreEn:this.EdnombreEs,
        nombreFr:this.EdnombreFr,
        desEs:this.EddesEs,
        desEn:this.EddesEn,
        desFr:this.EddesFr,
        foto:this.bannerimg,
        precio:this.Edprecio,
        order: parseInt(this.order) 

      }).then(()=>{
         $("#editarProducto").modal('hide')
        $('body').removeClass('modal-open')
        $('.modal-backdrop').remove()
        this.percent=0
        this.bannerimg=""
        this.bannerName=""
        this.bannerUrl=""
        this.display="none"
      }).then(()=>{
        this.getProducts()
      }) 
      .catch(error => alert(error.message)) 
    },
    save(){
      db.collection("productos").add({
        nombreEs:this.nombreEs,
        nombreEn:this.nombreEn,
        nombreFr:this.nombreFr,
        desEs:this.desEs,
        desEn:this.desEn,
        desFr:this.desFr,
        foto:this.bannerimg,
        categoria:this.categoria,
        precio:this.precio,
        order:this.order

      }).then((docRef)=> {
        console.log("Document written with ID: ", docRef.id)
        $("#nuevoProducto").modal('hide')
        $('body').removeClass('modal-open')
        $('.modal-backdrop').remove()
        this.percent=0
        this.bannerimg=""
        this.bannerName=""
        this.bannerUrl=""
        this.display="none"
      }).then(()=>{
        this.getProducts()
        console.log("product added successfully")
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert(error.message)
      })
    },
    getCategory(){
      this.categoriaR=[]

      firebase.firestore().collection("category").get().then((querysnapshot) =>{
        querysnapshot.forEach(doc => {  

            this.categoriaR.push({ 
              id:doc.id,
              category:doc.data().category,
          })
        })
      })
    },
    getProducts(){
      this.products=[]
      firebase.firestore().collection("productos").orderBy("categoria").get().then((querysnapshot) =>{
        querysnapshot.forEach(doc => {
            this.products.push({ 
              id:doc.id,
              nombreEs:doc.data().nombreEs,
              nombreEn:doc.data().nombreEn,
              nombreFr:doc.data().nombreFr,
              desEs:doc.data().desEs,
              desEn:doc.data().desEn,
              desFr:doc.data().desFr,
              foto:doc.data().foto,
              categoria:doc.data().categoria,
              precio:doc.data().precio,
              order:doc.data().order
          })
        })
      })
    }
  },
  components:{
      Sidebarvue
  }
}
</script>
<style scoped>
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }
  
  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }
  .progress-bar{
    background: tomato;
    border:1px solid green;
  }
</style>