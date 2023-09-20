<script setup>

import Screen from "@/components/Screen.vue";
import {useStore} from "vuex";
import {computed, onMounted, watch} from "vue";

const store = useStore();

const EnterNumber = (num)=> {
    store.dispatch('calculator/enterNumber',num)
}

const getAnswer = ()=>{
  store.dispatch('calculator/giveAnswer')
}
const clearScreen = ()=>{
  store.dispatch('calculator/clearNumber')
}
const syntaxValue = computed(()=>store.getters["calculator/syntax"]);
const getKeyClicked = (event) =>{
  store.dispatch('calculator/getKeyValue',event.key)
}

onMounted(()=>{
  document.getElementById("screenWindow").focus();
})
watch(syntaxValue,()=>{
  document.getElementById("screenWindow").focus();
})

</script>

<template >
  <div class="sm:max-w-[320px] md:w-[90vw] bg-[#142f44] mt-5 p-5 rounded  m-auto" id="screenWindow"  @keyup="getKeyClicked" tabindex="0">
    <div class="grid grid-cols-1 gap-2 p-2">
      <h3 class="text-white">Calculator</h3>
    </div>
    <Screen></Screen>
    <div class="grid grid-cols-4 gap-2 p-2">
      <div  class="numberCount" @click="EnterNumber(1)">1</div>
      <div  class="numberCount" @click="EnterNumber(2)">2</div>
      <div  class="numberCount" @click="EnterNumber(3)">3</div>
      <div  class="numberCount" @click="EnterNumber('+')">+</div>
      <div  class="numberCount" @click="EnterNumber(4)">4</div>
      <div  class="numberCount" @click="EnterNumber(5)">5</div>
      <div  class="numberCount" @click="EnterNumber(6)">6</div>
      <div  class="numberCount" @click="EnterNumber('-')">-</div>
      <div  class="numberCount" @click="EnterNumber(7)">7</div>
      <div  class="numberCount" @click="EnterNumber(8)">8</div>
      <div  class="numberCount" @click="EnterNumber(9)">9</div>
      <div  class="numberCount" @click="EnterNumber('*')">*</div>
      <div  class="numberCount" @click="EnterNumber(0)">0</div>
      <div  class="numberCount" @click="EnterNumber('.')">.</div>
      <div  class="numberCount" @click="EnterNumber('00')">00</div>
      <div  class="numberCount" @click="EnterNumber('/')">/</div>
    </div>
    <div class="grid grid-cols-3 gap-2 p-2">
      <div  class="numberCountClear bg-[red]" @click="clearScreen">CLEAR</div>
      <div  class="numberCount col-span-2" @click="getAnswer">=</div>
    </div>
  </div>
</template>

<style scoped>
.numberCount{
  background-color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.numberCountClear{
  background-color: #800000;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
#screenWindow:focus{
  border: 0;
  outline: 0;
}

.numberCount:hover{
  background-color: #86919d;
  color: white;
}
</style>