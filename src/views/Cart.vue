<template>
  <div>
    <Navegador/>
    <main role="main">

      <section class="banner-menu mb-4">
        <div class="container pt-5 pb-3 text-center">
          <h1 class="text-white mt-5">Shoping Cart</h1>
        </div>
      </section> 

      <div class="container mb-5">
        
        <div class="row">
          <div class="col-sm-10">

            <div class="row product">
              <div class="col-sm-1 text-center">
                <img class="img-fluid img-prd max-100" src="img/titus.jpeg" alt="">
              </div>
              <div class="col-sm-5 text-center">
                <h5 class="marron1">AREPA TELITA DE COLORES</h5>
              </div>
              <div class="col-sm-2 col-6">
                Cantidad
                <input class="form-control" value="1" type="number" id="">
              </div>
              <div class="col-sm-1 col-4">
                Total
                <p>$0.0</p>
              </div>
              <div class="col-sm-2 col-2">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                  X
                </button>
              </div>
            </div>

            <div class="row product">
              <div class="col-sm-1 text-center">
                <img class="img-fluid img-prd max-100" src="img/papelon.jpg" alt="">
              </div>
              <div class="col-sm-5 text-center">
                <h5 class="marron1">Papelon con limon</h5>
              </div>
              <div class="col-sm-2 col-6">
                Cantidad
                <input class="form-control" value="1" type="number" id="">
              </div>
              <div class="col-sm-1 col-4">
                Total
                <p>$0.0</p>
              </div>
              <div class="col-sm-2 col-2">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                  X
                </button>
              </div>
            </div>

            <div class="row product">
              <div class="col-sm-1 text-center">
                <img class="img-fluid img-prd max-100" src="img/chicha.png" alt="">
              </div>
              <div class="col-sm-5 text-center">
                <h5 class="marron1">CHICHA</h5>
              </div>
              <div class="col-sm-2 col-6">
                Cantidad
                <input class="form-control" value="1" type="number" id="">
              </div>
              <div class="col-sm-1 col-4">
                Total
                <p>$0.0</p>
              </div>
              <div class="col-sm-2 col-2">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                  X
                </button>
              </div>
            </div>

          </div>
          <div class="col-sm-2 text-center bg-total p-2">
            <strong>Cantidad articulos</strong> 12
            <p>$45</p>
            <a href="#" class="btn btn-success form-control">Pagar</a> 
          </div>
        </div>
      </div>

    </main>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Arepa telita de colores</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>Cantidad</h3>
            <input type="number" class="formcontrol" value="1">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navegador from '@/components/Navegador.vue'
export default {
  name: 'Cart',
  components: {
    Navegador
  }
}
</script>