<template>
  <div class="profile">
    <kx-nav
      :nav-name="kxNav.name"
      :nav-right="kxNav.right"
    ></kx-nav>
    <div class="content">
      <div class="profile-img">
        <div class="profile-img-active" :style="{backgroundImage: 'url('+ activeAvatar +')'}"></div>
        <ul class="profile-img-list">
          <template v-for="key in data">
            <li
              :style="{backgroundImage: 'url('+ key.avatar +')'}"
              :class="{'opacity': activeAvatar === key.avatar}"
              @click="onImg(key.avatar)"
            >
            </li>
          </template>
        </ul>
      </div>
      <div>
        <ul class="profile-liked-number sp-justify">
          <li>
            <h4>100</h4>
            <div class="font-12 color-6f">Liked you</div>
          </li>
          <li>
            <h4>112</h4>
            <div class="font-12 color-6f">You liked</div>
          </li>
          <li>
            <h4>15</h4>
            <div class="font-12 color-6f">Matched</div>
          </li>
        </ul>
        <div class="profile-about kx-whitespace">
          <h3 class="font-14">ABOUT</h3>
          <p class="nowrap-multi color-6f">Lorem ipsum dolor sit amet, consectetur adipis elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia quis nostrud exeritation ullamco laboris.
            Lorem ipsum dolor sit amet, consectetur adipis elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia quis nostrud exeritation ullamco laboris
          </p>
          <ul class="share sp-justify color-6f">
            <li class="iconfont icon-facebookicon"></li>
            <li class="iconfont icon-twitter"></li>
            <li class="iconfont icon-google"></li>
            <li class="iconfont icon-linkedin"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from './modules/Nav'
  import avatar1 from '../assets/img/acatar.jpg'
  import avatar2 from '../assets/img/acatar2.jpg'
  import avatar3 from '../assets/img/acatar3.jpg'

  export default {
    name: 'Profile',
    components: {
      'kx-nav': Nav
    },
    data () {
      return {
        kxNav: {
          name: 'Profile',
          right: 15
        },
        activeAvatar: avatar1,
        data: [
          {name: 'Maybell Dynes', like: 1, avatar: avatar1},
          {name: 'Maybell Dynes2', like: 1, avatar: avatar2},
          {name: 'Maybell Dynes3', like: 2, avatar: avatar3}
        ]
      }
    },
    methods: {
      onImg (img) {
        this.activeAvatar = img
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  .profile {
    &-img {
      display: flex;
      &-active{
        width: 70%;
        padding-top: 90%;
        background-size: cover;
        background-position: center;
        border-right: 1px solid #fff;
      }
      &-list{
        width: 30%;

        & > li{
          padding-top: 100%;
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid #fff;
          opacity: 0.4;

          &.opacity{
            opacity: 1;
          }
        }
      }
    }
    &-liked-number{
      background-color: #fff;
      &  li {
        width: 35%;
        margin: 15px 0;
        line-height: 1;

        h4{
          margin-bottom: 5px;
          font-weight: 700;
        }

        &:nth-child(2){
          width: 30%;
          border-left: 1px solid #e9e9e9;
          border-right: 1px solid #e9e9e9;
        }
      }
    }
    &-about{
      margin-top: 20px;
      padding-top: 20px;
      background-color: #fff;
      & h3{
        text-align: left;
        font-weight: 700;
        margin-bottom: 10px;
      }
      & p{
        line-height: 1.4;
        text-align: justify;
      }
      .share{
        margin-top: 30px;
        border-top: 1px solid #e9e9e9;

        & li{
          width: 25%;
          padding: 10px 0;
          font-size: 28px;
        }
      }
    }
  }
</style>
