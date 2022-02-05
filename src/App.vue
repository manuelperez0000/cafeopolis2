<template>
  <div id="app">
    <router-view/>
    <!-- <div class="container fixed">
      <div class="row">
        <div class="co-12">
          xxx
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      probando:""
    }
  },
  methods:{
      prueba(i){
        this.probando = i
      }
    }
}
</script>
<style scoped>
  .fixed{
    position:fixed;
    bottom: 10px;
    left:10px;
    border:1px solid red;
    background: yellow;

  }
</style>