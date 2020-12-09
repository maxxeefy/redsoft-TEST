<template>
    <div class="lds-dual-ring"></div>
</template>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-right: 30px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 6px solid #fcf;
  border-color: #fcf transparent #fcf transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>