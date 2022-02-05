<template>
  <div>
    
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input  v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        <i v-if="spin == true" class="text-white fas fa-spin fa-spinner"></i>
        Sign in
      </button>
    </form>
    <div class="text-center mb-5">
      <router-link to="/">Back to home</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      spin:false,
      email:"",
      password:""
    }
  },
  methods:{
    login(){
      this.spin = true
      let email = this.email
      let password = this.password
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log("success log")
        this.spinOff();
        this.$router.push("/products")
        /* window.location.href = "/products" */
      })
      .catch((error)=> {
        alert(error.message)
        this.spinOff()
      });
    },
    spinOff(){
      this.spin = false
    }
  }
}
</script>
<style scoped>

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 50px auto 50px;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>