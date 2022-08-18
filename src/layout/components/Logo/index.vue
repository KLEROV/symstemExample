<template>
  <div class="logo">
    <!-- <img src="~@/assets/images/newlogo.png" alt="" :class="{ 'mr-2': !collapsed }" /> -->
    <div style='font-size:25px;'>CLS后台</div>
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
