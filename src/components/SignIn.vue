<template>
  <div class="signin">
    <div class="connectwith">
      <i class="iconfont icon-upward font-24 color-6f"></i>
      <div class="facebook-btn">CONNECT WITH FACEBOOK</div>
    </div>

    <div class="signin-title color-36">
      <h2 class="font-18">SIGN IN</h2>
    </div>
    <div class="signin-form kx-whitespace">
      <div class="input-mod" :class="{'is-form': formVerify.email}">
        <label class="font-12">Email</label>
        <div class="clear">
          <input type="Email" placeholder="email"
                 v-model="form.email"
                 @blur="focusclick()"
                 @click="Focus"
          >
          <i class="iconfont icon-clear"
             v-if="form.email.length > 1"
             @click="onClear('email')"
          ></i>
        </div>
      </div>
      <div class="input-mod" :class="{'is-form': formVerify.password}">
        <label class="font-12">Password</label>
        <div class="clear">
          <input type="password" placeholder="Nwe password"
                 v-model="form.password"
                 @blur="focusclick()"
                 @click="Focus"
          >
          <i class="iconfont icon-clear"
             @click="onClear('password')"
             v-if="form.password.length > 1"
          ></i>
        </div>
      </div>
      <h4 class="forgot color-6f">Forgot your password?</h4>
      <div class="signin-submit-btn"
           :class="{'focus': focus}"
           @click="onSubmit"
      >SIGN IN</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    data () {
      return {
        focus: false,
        form: {
          email: '',
          password: ''
        },
        formVerify: {
          email: false,
          password: false
        }
      }
    },
    created () {
    },
    methods: {
      onClear (msg) {
        if (msg === 'email') {
          this.form.email = ''
        } else {
          this.form.password = ''
        }
      },
      // 手机里键盘遮挡问题解决方案：
      // （在一些指定设备和浏览器中异步获取 window.innerHeight 进行前后对比而得出键盘高度，控制也没向上滚动）
      focusclick () {
        this.focus = false
        this.formVerify.email = this.isMail(this.form.email)
        this.formVerify.password = this.formVerify.password !== ''
      },
      Focus () {
        this.focus = true
      },
      isMail (szMail) {
        const szReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        const bChk = szReg.test(szMail)
        return !bChk
      },
      onSubmit () {
        this.focusclick()
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  input::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 1.3;
    color: #6F6F6F;
    -webkit-appearance: none
  }

  .signin {
    height: 100vh;
    background-color: #fff;
    .connectwith{
      padding: 20px 0;
      border-bottom: 1px solid #EBEBEB;
      .facebook-btn{
        width: 80%;
        height: 50px;
        margin:10px auto 0 auto;
        line-height: 50px;
        color: #fff;
        font-weight: 700;
        border-radius: 40px;
        background-image: -webkit-linear-gradient(90deg, #6A409F 0%, #901EB1 100%);
        background-image: linear-gradient(90deg, #6A409F 0%, #901EB1 100%);

        &:active{
          background-image: -webkit-linear-gradient(90deg, #4a3172 0%, #691883 100%);
          background-image: linear-gradient(90deg, #4a3172 0%, #691883 100%);
        }
      }
    }
    &-title {
      padding-top: 20px;
      margin-bottom: 10%;
      font-weight: 700;
      h2 {
        display: inline-block;
        line-height: 1;
        padding-bottom: 15px;
        border-bottom: 2px solid #363636;
      }
    }
    &-form {
      width: 100%;
      text-align: left;
      label {
      }
      .input-mod {
        margin-bottom: 15px;
        border-bottom: 1px solid #e9e9e9;

        &.is-form{
          border-bottom: 1px solid #FD4C9D;
          & > label{
            color: #FD4C9D;
          }
        }
        .clear {
          position: relative;
        }
        .icon-clear {
          font-family: iconfont !important;
          font-size: 22px;
          line-height: 44px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: .2px;
          display: block;
          color: rgba(0, 0, 0, .5);
          color: #c7c7c7;
          content: "\e650";
          position: absolute;
          right: 15px;
          top: 50%;
          margin-top: -22px;
          margin-right: -10px;
        }
        & input {
          width: 100%;
          height: 45px;
          border: 0;
          display: inline-block;
          font-size: inherit;
          line-height: 1;
          outline: none;

        }
      }
    }
    .forgot {
      margin-top: 15%;
      margin-bottom: 20px;
      text-align: center;
    }
    &-submit-btn {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      background-color: #FD4C9D;

      &:active{
        background-color: #e44c84;
      }
      &.focus{
        position: relative;
      }
    }
  }
</style>
