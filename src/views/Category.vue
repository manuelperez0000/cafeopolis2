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
    <div class="container-fluid mb-5">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">
            <i class="fas fa-shopping-cart"></i>
            {{ idioma.productos }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/category" class="nav-link">
              <i class="fas fa-list"></i>
            {{ idioma.categoria }}
            </router-link>
        </li>
      </ul>
    </div>
  </nav>

        <main v-if="auth == 0" role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

          <div class="row mb-3">
            <div class="col-8">
              <h2> {{ idioma.categoria }}</h2>
            </div>
            <div class="col-4 text-right">
              <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary btn-lg">+</button>
            </div>
          </div>
          
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <tbody>

                <tr v-for="cat in idCat">
                  <td class="bg-light mw-100">
                    <button @click="cambioOrden(cat.id,1,cat.order,cat.name)" class="btn btn-success m-1 fleche"> ↑ </button> 
                    <button @click="cambioOrden(cat.id,-1,cat.order,cat.name)" class="btn btn-success m-1 flecha"> ↓ </button>
                  </td>
                  <td>
                    <strong>{{cat.order}} - {{ cat.name }} </strong> 
                  </td>
                  <td class="text-right">
                    <button @click="borrar(cat.id)" class="btn btn-danger mx-1 w-40">x</button>
                    
                    <button @click="valEdit(cat.id)" data-toggle="modal" data-target="#modalEditar" class="btn btn-primary mx-1 w-40">Edit</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </main>
      </div>
      </div>
<!-- Footer -->
 
    <footer class="container pt-3">
      <p class="text-center">&copy; 2020 Cafeopolis Bistro. - {{ idioma.disenadopor }} <a target="_blanc" href="https://redi-developers.com">redi-developers.com</a> &middot;</p>
    </footer>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregar Categoria</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="category" type="text" class="form-control" placeholder="Name">
            <input v-model="order" type="number" class="form-control" placeholder="Order">
          </div>
          <div class="modal-footer">
            <button @click="save()" type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalEditar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar categoria</h5>
            
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>id:{{ideditCaegory}}</p>
            <input v-model="editCategory" type="text" class="form-control">
            <input v-model="order" type="number" class="form-control" placeholder="Order">
          </div>
          <div class="modal-footer">
            <button @click="editar()" type="button" class="btn btn-primary">Editar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
     <div class="idioma">
        {{ idioma.idiomas }}
        <button class="btn-es" @click="idiomas('es')"></button>
        <button class="btn-en" @click="idiomas('en')"></button>
        <button class="btn-fr" @click="idiomas('fr')"></button>
      </div>
 
      <!---->
  </div>
</template>
<script>
import Sidebarvue from '@/components/Sidebarvue.vue'
export default {
  data(){
    return{
      editCategory:"",
      ideditCaegory:"",
      category:"",
      order:"",
      idioma:"",
      idCat:[],
      auth:1,
      order:0
    }
  },
  components:{
      Sidebarvue
  },
  created(){
    this.aut();
    this.idiomas("es")
  },
  mounted(){
    this.getProducts()
  },
  methods:{
    cambioOrden(id,num,ord,name){
      //var res = ord+num
      if(ord){
        var res = ord+num
      }else{
        var res = 1
      }
      firebase.firestore().collection("category").doc(id).set({
      order:res,
      category:name
      }).then(()=>{
        this.getProducts()
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
      firebase.auth().signOut()
      this.$router.push("/admin")
    },
    valEdit(id){
      firebase.firestore().collection("category").doc(id).get().then((doc)=>{
        this.editCategory = doc.data().category
        this.order = parseInt(doc.data().order) 
      })
      
      this.ideditCaegory = id
    },
    editar(){
      var id = this.ideditCaegory
      firebase.firestore().collection("category").doc(id).update({
        category:this.editCategory,
        order: parseInt( this.order)
      }).then(()=>{
         $("#modalEditar").modal('hide')
        $('body').removeClass('modal-open')
        $('.modal-backdrop').remove()
      }).then(()=>{
        this.getProducts()
      }) 
      .catch(error => alert(error.message))
    },
    borrar(id){
      firebase.firestore().collection("category").doc(id).delete()
      .then(()=>{
        this.getProducts()
      })
      
    },
    idiomas(i){
      var dir =""
      if(i == "es"){
        dir = "es.json"
      }else if(i == "en"){
        dir ="en.json"
      }else{
        dir = "fr.json"
      }
      fetch("idiomas/"+dir)
      .then(response => response.json())
      .then(data => {
        this.idioma = data
      })
    },
    getProducts(){
      this.idCat=[]
      firebase.firestore().collection("category").orderBy('order').get().then((querysnapshot) =>{
        querysnapshot.forEach(doc => {  
          this.idCat.push({ 
             id:doc.id,
             name:doc.data().category,
             order:doc.data().order
          })
        })
      })
    },
    save(){
      db.collection("category").add({
        category:this.category,
        order:parseInt(this.order)
      }).then((docRef)=> {
        console.log("Document written with ID: ", docRef.id)
        $("#exampleModal").modal('hide')
        $('body').removeClass('modal-open')
        $('.modal-backdrop').remove()
      }).then(()=>{
        this.getProducts()
        this.category =""
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        alert(error.message)
      })
    }
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
</style>
