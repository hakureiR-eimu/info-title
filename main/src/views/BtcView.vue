<template>
  <div>
    <h1>比特币合约价格</h1>
    <p v-if="price">当前价格:{{ price }}</p>
    <p v-else>加载中</p>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
const price = ref(null)
const wsUrl = 'wss://fstream.binance.com/ws/btcusdt@markPrice'
const ws = new WebSocket(wsUrl)
ws.onopen = () => {
  console.log('open')
}
ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  price.value = data.p
  price.value = parseFloat(price.value).toFixed(1)
}
ws.onerror = (error) => {
  console.log('ws error', error)
}
onMounted(() => {
  console.log('ws mounted')
})
watch(price, (newPrice) => {
  if(newPrice){
    document.title = `${newPrice}`
  }
})
</script>
