<template>
  <div style="height: 45px">
    <div class="nav">
      <div class="nav-name font-16">{{navName}}</div>
      <template v-if="navRight">
        <div class="nav-right">
          <span class="font-14" style="font-weight: 600">{{navRight}}k</span>
          <i class="iconfont icon-masonry"></i>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      navName: {
        type: String,
        required: true
      },
      navRight: {
        type: Number,
        default: 0
      }
    },
    name: 'Nav',
    data () {
      return {
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  .nav{
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #fff;

    &-name{
      font-weight: 700;
    }
    &-right{
     position: absolute;
      right: 15px;
      top: 0;
    }
    .icon-masonry{
      color: mediumvioletred;
    }
  }
</style>
