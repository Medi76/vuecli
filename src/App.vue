<template>
 <div>
  <router-view v-if="$store.state.connected"></router-view>
  <LoginView v-if="!$store.state.connected"></LoginView>
 </div>
 
</template>
<script>
import LoginView from "./components/LoginView.vue"
export default{
   components:{
    LoginView,
   }
}
</script>
<style src="./style.css">

</style >
