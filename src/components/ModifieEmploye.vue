<template>
   <OverlayView>
       <form action="">
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="text">
       </form>
   </OverlayView>
</template>

<script>
import OverlayView from "./OverlayView.vue"
export default {
 props:["employeProps"],
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