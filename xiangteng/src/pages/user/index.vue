<template>
  <div class="main">
    <div v-if="flag == true">
      <div class="logo">
        <img src="/static/images/1.jpg" alt />
      </div>

      <div class="u-list">
        <div class="u-top">
          <div class="u-t-left">23</div>
          <div class="u-t-right">
            <div>【小米】的视频列表</div>
            <div>2020年02月</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
      </div>
      <div class="u-list">
        <div class="u-top">
          <div class="u-t-left">23</div>
          <div class="u-t-right">
            <div>【小米】的视频列表</div>
            <div>2020年02月</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
        <div class="u-l-banner">
          <div class="b-img">
            <img src="/static/images/1.jpg" alt />
            <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="remen" v-if="flag == false">
      <div class="u-l-banner">
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="u-l-banner">
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="u-l-banner">
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="u-l-banner">
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div @click="back">
        <img src="/static/images/jia1.png" alt />首页
      </div>
      <div @click="remen">
        <img src="/static/images/huo1.png" alt v-if="flag" />
        <img src="/static/images/huo2.png" alt v-else />
        <span :class="[flag == false ? 'black' : '' ]">热门</span>
      </div>
    </div>
    <div style="height:8vh;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    remen() {
      this.flag = !this.flag;
    },
    back(){
      wx.redirectTo({
        url: "../index/main"
      });
    }
  }
};
</script>

<style  scoped>
.main {
  margin: 0;
  padding: 0;
}
.black {
  color: #000;
}
.u-list,
.remen {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 90%;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  text-align: right;
}
.logo > img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-top: 20rpx;
  border: 1px solid #999;
}

.tabbar {
  width: 100%;
  height: 6vh;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.tabbar > div {
  width: 50%;
  height: 100%;
  color: #ccc;
  font-size: 34rpx;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.tabbar > div:nth-child(1) {
  border-right: 1px solid #ccc;
}
.tabbar > div > img {
  width: 50rpx;
  height: 50rpx;
  margin-right: 10rpx;
}
.u-top {
  width: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
}
.u-t-left {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60rpx;
  font-weight: bold;
  padding: 30rpx;
}
.u-t-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.u-t-right > div:nth-child(1) {
  font-size: 38rpx;
  font-weight: bold;
}
.u-t-right > div:nth-child(2) {
  font-size: 28rpx;
  /* font-weight: bold; */
}
.u-l-banner {
  width: 90%;
  /* padding: 30rpx; */
  margin-top: 30rpx;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.b-img {
  border-radius: 10rpx;
  width: 100%;
  position: relative;
  /* background-color: #fff; */
}
.b-img > div {
  position: absolute;
  bottom: 10rpx;
  font-size: 18px;
  color: #fff;
  width: 100%;
  padding: 10rpx 20rpx;
  box-sizing: border-box;
  /* border-radius: 10rpx; */
  border-bottom-left-radius: 10rpx;
  border-bottom-right-radius: 10rpx;
  background-color: rgba(0, 0, 0, 0.5);
}
.b-img > img {
  border-radius: 10rpx;
  width: 100%;
}
</style>
