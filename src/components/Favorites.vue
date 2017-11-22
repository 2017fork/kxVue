<template>
  <div class="favorites">
    <kx-nav
      :nav-name="kxNav.name"
    ></kx-nav>
    <div class="content">
      <div style="height: 40px">
        <div class="you-liked font-14">YUO LIKED</div>
      </div>
      <ul class="favorites-list color-36">
        <template v-for="(key, i) in data">
          <li @click="YouLiked(i)">
            <div class="favorites-avatar"
                 :class="{'link': key.like === 1}"
                 :style="{backgroundImage: 'url('+ key.avatar +')'}">
            </div>
            <h4 class="favorites-name font-14">{{key.name}}</h4>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
  import Nav from './modules/Nav'
  import avatar1 from '../assets/img/acatar.jpg'
  export default {
    name: 'SignIn',
    components: {
      'kx-nav': Nav
    },
    data () {
      return {
        kxNav: {
          name: 'Favorites'
        },
        data: [
          {name: 'Maybell Dynes', like: 1, avatar: avatar1},
          {name: 'Maybell Dynes2', like: 1, avatar: avatar1},
          {name: 'Maybell Dynes3', like: 2, avatar: avatar1},
          {name: 'Maybell Dynes4', like: 1, avatar: avatar1},
          {name: 'Maybell Dynes5', like: 2, avatar: avatar1}
        ]
      }
    },
    methods: {
      YouLiked (i) {
        this.data[i].like = this.data[i].like === 1 ? 2 : 1
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  .favorites {
    .you-liked{
      position: fixed;
      top: 45px;
      left: 0;
      right: 0;
      z-index: 9;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-weight: 500;
      background-color: #fff;
      border-bottom: 1px solid #000;
    }
    & ul {
      display: flex;
      flex-wrap: wrap;
      padding-top: 40px;
      padding-bottom: 20px;
    }
    &-list {
      & > li {
        width: 50%;
        margin-bottom: 15%;
      }
    }
    &-avatar {
      position: relative;
      width: 56%;
      padding-top: 56%;
      margin: auto;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 200px;

      &.link:after{
        position: absolute;
        right: 15%;
        bottom: 1%;
        content: '';
        width: 15%;
        height: 15%;
        border-radius: 100%;
        background-color: #4CD964;
      }
    }
    &-name {
      margin-top: 15px;
      text-align: center;
    }
  }
</style>
