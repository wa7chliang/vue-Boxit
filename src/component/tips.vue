<template>
    <div>
        <div class="container">
            <span>上:↑</span>
            <span>下:↓</span>
            <span>左:←</span>
            <span>右:→</span>
        </div>
    </div>
</template>
<script>
  export default{
    name: 'tips'
  }
</script>
<style scoped>
    .container {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
    }
    span {
        font-size: 18px;
        font-weight: 800;
        margin-right: 20px;
    }
</style>