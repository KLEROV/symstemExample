<template>
  <div class="logo">
      <!-- <div style='font-size:20px;'>CLS</div> -->
    <img src="~@/assets/images/newlogo.png" alt="" :class="{ 'mr-2': !collapsed }" />
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {
      collapsed: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="less" scoped>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;

    img {
      width: auto;
      height: 44px;
    }

    .title {
      margin-bottom: 0;
      height: 44PX;
    }
  }
</style>
