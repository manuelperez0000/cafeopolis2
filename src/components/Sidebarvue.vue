<template>
  <nav class="col-md-2 bg-light ">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/products" class="nav-link text-dark">
            <i class="fas fa-shopping-cart"></i>
            Products
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/category" class="nav-link text-dark">
            <i class="fas fa-list"></i>
            Category
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
        idiomaV:""
    }
  },
  mounted(){
    this.idiomaV = this.langg
  },
  name: 'Sidebarvue',
  props:['langg']
}
</script>