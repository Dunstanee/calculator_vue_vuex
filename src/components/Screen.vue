<script setup>
import {useStore} from "vuex";
import {computed, onMounted, watch} from "vue";

const store = useStore();

function numberFormat(number){
  const check = +number % 1;
  if(!check)
  {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }else {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

}

const syntaxValue = computed(()=>store.getters["calculator/syntax"]);
const fullEquation = computed(()=>{
  return numberFormat(store.getters["calculator/fullEquation"])
});


</script>

<template>
<div class=" bg-[#ffffff] p-2 m-2 rounded grid grid-cols-1 gap-2 content-end"  >
  <div class="text-right userInput"><sup style="font-size: 12px;" class="float-left mt-2">ans = </sup>{{ fullEquation }}</div>
  <div class="text-right userAnswer ">
    <input class="text-right w-[100%] inputRequest not-allowed" id="inputRequest" disabled type="text" :value="syntaxValue" ></div>
</div>
</template>

<style scoped>
.userInput{
  color: #11a411;
  padding-right: 4px;
  font-size:35px;
  font-weight: 500;
  border-bottom: 1px solid #11a411;
  font-family: 'valko',serif !important;
  line-height: 40px;
}
.inputRequest{
  cursor: none;
  font-family: "Digital7", serif;
}
.userInput{
  font-family: "Digital7", serif;
}
.not-allowed {cursor: default;}

.userAnswer{
  color: black;
  padding-right: 4px;
  font-size: 25px;
  font-weight: 400;
}
</style>