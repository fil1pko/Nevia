<script>
    export default {
        data: () => {
            return {
                isloaded: false
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if (document.readyState == "complete") { 
                    this.isloaded = true;
                } 
            }
        },
    }
</script>

<template>
    <div class="page-loader" v-if="!isloaded">
        <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>    
</template>

<style lang="scss">
  @import '../assets/style/base.scss';
  @import '../assets/style/colors.scss';
  .page-loader{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $bg;
    z-index: 1999;
}
.lds-default {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-default div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  -webkit-animation: lds-default 1.2s linear infinite;
          animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.lds-default div:nth-child(2) {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.lds-default div:nth-child(3) {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.lds-default div:nth-child(4) {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.lds-default div:nth-child(5) {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.lds-default div:nth-child(6) {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.lds-default div:nth-child(7) {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.lds-default div:nth-child(8) {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.lds-default div:nth-child(9) {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.lds-default div:nth-child(10) {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.lds-default div:nth-child(11) {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.lds-default div:nth-child(12) {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@-webkit-keyframes lds-default {
  0%, 20%, 80%, 100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}
@keyframes lds-default {
  0%, 20%, 80%, 100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}
</style>