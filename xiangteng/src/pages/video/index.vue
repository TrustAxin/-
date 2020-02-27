<template>
  <div class="main">
    <div class="video">
      <video
        id="myVideo"
        :src="src"
        autoplay
        controls
        direction="0"
        show-center-play-btn="false"
        @ended="end"
        v-if="video == 'url'"
      ></video>
      <!-- <video id="myVideo" src="blob:https://www.bilibili.com/1c2fc2bd-dfb3-4643-96f5-ef88cb7d1b89" autoplay  controls direction='0'></video> -->
      <div class="again" v-if="flag == 1">
        <div class="a-left" @click="again">
          <img src="/static/images/chongbo.png" alt />重播
        </div>
        <button class="a-right" open-type="share">
          <img src="/static/images/weixin.png" alt />转发
        </button>
      </div>
      <txv-video
        vid="k0033kml05u"
        playerid="txv1"
        autoplay="true"
        v-if="video == 'vid'"
        @ended="end"
      ></txv-video>
    </div>
    <div class="share">
      <button open-type="share">
        <img src="/static/images/zhuanfa.png" alt />发送给好友
      </button>
      <button open-type="share">
        <img src="/static/images/zhuanfa.png" alt />分享到群
      </button>
    </div>
    <div class="user">
      <div class="u-left" @click="remen">
        <div class="u-logo">
          <img src="/static/images/1.jpg" alt />
        </div>
        <div class="u-name">
          <div>樱桃</div>
          <div>666个视频</div>
        </div>
      </div>
      <div class="u-right">
        <div @click="more">相关推荐</div>
        <div @click="back">
          <img src="/static/images/jia.png" alt />返回首页
        </div>
      </div>
    </div>
    <div class="title">一爱打架卡的好大的安吉达可来得及啊七日为己任</div>
    <div
      class="line"
      style="background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpUlEQVQ4T7WTP0gcQRjF39u73VPSCFrJZU4l6q2CiLGzsdAmhYVYio1iI1iJKaMGCwuTwsZKsAgEEhQEEbRQA4Kdnbenhe4q2PinEOFuz51P9uCCx60giNMMzMz3e4/3zUe8cfGN9Xg/wOknJIKCOazB2zbXXz9Rif4A0hMDD1q8/E7JeaSD05TZFWiugLILQaeQexTpFXKfwCiAZNrzi7UVACdpdcCQH2LExvRD7tpIxLthGJu2538oqTrKuiA53urmt8oAjrKuCNwIUEtwQyADEHFAhupTtptfDCEZZc2Eu+35M/8Bjkr8A2Qp7fl/io8+Wr/ixHyz5x+fqKomQbD8SHxtdwtHTsrakkAv2JePe0VARpmfAf62Pb/5pbZmlTmigW7bK0w6ypKyDI4aUFOtrbvSYRSkaJu8psgchd9bL/I/y0IMqSS/hMFEAcJ7AH9BYzrt5s4q2uikqhpF9Dar/a50FvfPIaE6gW9RDsu6kEnGexkzViHYF61XQA6RnBBgNkw8ylnFP8jWo07HzUGCfRQe6hjX7PPc+Uvhvt8svHZKnwCi4qIRqePGXgAAAABJRU5ErkJggg==')"
    ></div>
    <div class="more">一一更多推荐欣赏一一</div>
    <div class="list">
      <div class="banner">
        <div class="b-title">爱很简单had骄傲大当家阿道夫 为温柔情人让我如鄂温克仍无法</div>
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
        </div>
      </div>
      <div class="banner">
        <div class="b-title">爱很简单had骄傲大当家阿道夫 为温柔情人让我如鄂温克仍无法</div>
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
        </div>
      </div>
      <div class="banner">
        <div class="b-title">爱很简单had骄傲大当家阿道夫 为温柔情人让我如鄂温克仍无法</div>
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
        </div>
      </div>
      <div class="banner">
        <div class="b-title">爱很简单had骄傲大当家阿道夫 为温柔情人让我如鄂温克仍无法</div>
        <div class="b-img">
          <img src="/static/images/1.jpg" alt />
        </div>
      </div>
    </div>
    <div
      class="line"
      style="background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpUlEQVQ4T7WTP0gcQRjF39u73VPSCFrJZU4l6q2CiLGzsdAmhYVYio1iI1iJKaMGCwuTwsZKsAgEEhQEEbRQA4Kdnbenhe4q2PinEOFuz51P9uCCx60giNMMzMz3e4/3zUe8cfGN9Xg/wOknJIKCOazB2zbXXz9Rif4A0hMDD1q8/E7JeaSD05TZFWiugLILQaeQexTpFXKfwCiAZNrzi7UVACdpdcCQH2LExvRD7tpIxLthGJu2538oqTrKuiA53urmt8oAjrKuCNwIUEtwQyADEHFAhupTtptfDCEZZc2Eu+35M/8Bjkr8A2Qp7fl/io8+Wr/ixHyz5x+fqKomQbD8SHxtdwtHTsrakkAv2JePe0VARpmfAf62Pb/5pbZmlTmigW7bK0w6ypKyDI4aUFOtrbvSYRSkaJu8psgchd9bL/I/y0IMqSS/hMFEAcJ7AH9BYzrt5s4q2uikqhpF9Dar/a50FvfPIaE6gW9RDsu6kEnGexkzViHYF61XQA6RnBBgNkw8ylnFP8jWo07HzUGCfRQe6hjX7PPc+Uvhvt8svHZKnwCi4qIRqePGXgAAAABJRU5ErkJggg==')"
    ></div>
    <div class="back">
      <div @click="back">
        <img src="/static/images/jia.png" alt />返回首页
      </div>
    </div>
  </div>
</template>
<script>
import ''
export default {
  data() {
    return {
      //
      flag: 0,
      src:
        "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      video: "vid"
    };
  },
  methods: {
    end(e) {
      console.log(e);
      console.log("完了完了完了");
      // console.log(e.mp.detail.isAd)
      if (e.mp.detail.isAd) {
      } else {
        this.flag = 1;
      }
    },
    again() {
      const video = wx.createVideoContext("myVideo");
      video.play();
      this.flag = 0;

      const TxvContext = requirePlugin("tencentvideo");

      let txvContext = TxvContext.getTxvContext("txv1"); // txv1即播放器组件的playerid值
      txvContext.play();
    },
    more() {
      wx.pageScrollTo({
        selector: ".more",
        duration: 300
      });
    },
    remen() {
      wx.navigateTo({ url: "../user/main" });
    },
    back() {
      wx.redirectTo({
        url: "../index/main"
      });
      this.flag = 0;
    }
  },
  created() {
    console.log(1);
  },
  onShareAppMessage() {
    //转发事件
  }
};
</script>

<style  scoped>
.main {
  margin: 0;
  padding: 0;
}
.video {
  width: 100%;
  max-height: 80vh;
  background-color: #000;
  position: relative;
}
.video > video {
  width: 100%;
  /* height: 100%; */
}

.again {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}
.a-left {
  /* width: 100rpx; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
}
.a-right {
  margin-top: 40rpx;
  width: 200rpx;
  height: 200rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
}
.a-left > img,
.a-right > img {
  width: 100rpx;
  height: 100rpx;
}
.share {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
.share > button {
  width: 40%;
  height: 70%;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 36rpx;
  font-weight: bold;
}
.share > button:nth-child(1) {
  background-color: green;
}
.share > button:nth-child(2) {
  background-color: pink;
}
.share > button > img,
.u-right > div > img {
  width: 40rpx;
  height: 40rpx;
  margin: 0 10rpx;
}
.user {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
}
.u-left {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.u-logo {
  width: 70rpx;
  height: 70rpx;
  margin: 0 30rpx;
  border-radius: 50%;
  border: 1px solid #999;
}
.u-logo > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.u-name > div:nth-child(1) {
  font-weight: bold;
  font-size: 36rpx;
}
.u-name > div:nth-child(2) {
  font-size: 26rpx;
  color: #666;
}

.u-right {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background-color: skyblue; */
}
.u-right > div {
  padding: 10rpx 20rpx;
  box-sizing: border-box;
  font-size: 34rpx;
  font-weight: bold;
  color: #fff;
  border-radius: 10rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.u-right > div:nth-child(1) {
  background-color: red;
}
.u-right > div:nth-child(2) {
  background-color: green;
}

.title {
  width: 100%;
  padding: 0 40rpx;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 38rpx;
}

.line {
  width: 100%;
  height: 35rpx;
  margin: 40rpx 0;
  /* background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582365267565&di=f4e0083a51e3dfd1354f2e75e1235a21&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F39%2F53%2F98%2F58fad3af8e342.png') repeat-x; */
  /* background-position: 0% 0%; */
}
.more {
  color: red;
  font-size: 40rpx;
  text-align: center;
  padding: 60rpx 0;
}
.banner {
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  padding: 40rpx;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.b-title {
  width: 50%;
  font-size: 36rpx;
}
.b-img {
  width: 50%;
  height: 100%;
  border-radius: 10rpx;
}
.b-img > img {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}
.back {
  width: 100%;
  display: flex;
  justify-content: center;
}
.back > div {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: #fff;
  font-weight: bold;
  font-size: 44rpx;
  padding: 20rpx 0;
  box-sizing: border-box;
  border-radius: 10rpx;
}
.back > div > img {
  width: 70rpx;
  height: 70rpx;
  margin-right: 30rpx;
}
</style>