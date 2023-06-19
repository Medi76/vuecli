<template>
   <OverlayView>
      <form action="">
        <div>
        <input type="text" v-model="employe.nom" autofocus required>
      </div>
    <div>
        <input type="text" v-model="employe.prenom">
      </div>
    <div>
        <input type="text" v-model="employe.age">
      </div>
    <div>
        <input type="text" v-model="employe.genre">
      </div>
      </form>
   </OverlayView>
</template>

<script>
import OverlayView from "./OverlayView.vue"
export default {
 props:["suppprops"],
 name: 'ModifierConge',
 components:{
   OverlayView,
 },
 data() {
   return {
       
   };
 },
};
</script>