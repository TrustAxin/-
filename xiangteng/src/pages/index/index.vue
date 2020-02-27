<template>
  <!-- <div> -->
  <!-- 我是首页 -->
  <!-- <button open-type="share" class="btn">分享</button> -->

  <!-- </div> -->
  <div class="main">
    <div class="loading" v-if="flag == 0">
      <img src="/static/images/Loading.png" />
    </div>
    <div class="shuaxin" @click="shuaxin">
      <img src="/static/images/shuaxin.png" />
    </div>
    <div class="banner">
      <ul class="top">
        <li :class="[currentTab===0?'tColor':'']" @click="repeat(0)">首页</li>
        <li :class="[currentTab===1?'tColor':'']" @click="repeat(1)">祝福</li>
        <li :class="[currentTab===2?'tColor':'']" @click="repeat(2)">正能量</li>
        <li :class="[currentTab===3?'tColor':'']" @click="repeat(3)">搞笑</li>
        <li :class="[currentTab===4?'tColor':'']" @click="repeat(4)">生活</li>
        <li :class="[currentTab===5?'tColor':'']" @click="repeat(5)">其他</li>
      </ul>
    </div>

    <div class="list" v-if="flag == 1" :style="'height:'+winHeight+'px'">
      <!-- <div class="list-banner" v-for="(item,index) in list" :key="index" @click="jump">
        <div class="list-b-img">
          <img :src="item.imgUrl" alt />
          <div>{{item.title}}</div>
        </div>
      </div>-->

      <swiper
        class="content"
        :style="'height:'+winHeight+'px'"
        :duration="100"
        :current="currentTab"
        @change="swiperChange"
        circular="true"
      >
        <swiper-item>
          <scroll-view
            v-if="currentTab == 0"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 首页</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 首页</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 首页</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 首页</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            v-if="currentTab == 1"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 祝福</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 祝福</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 祝福</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 祝福</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            v-if="currentTab == 2"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 正能量</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 正能量</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 正能量</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 正能量</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            v-if="currentTab == 3"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 搞笑</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 搞笑</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 搞笑</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 搞笑</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            v-if="currentTab == 4"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 生活</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 生活</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 生活</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 生活</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view
            v-if="currentTab == 5"
            scroll-y="true"
            :style="'height:'+winHeight+'px'"
            refresher-enabled="true"
            refresher-threshold="10"
            refresher-default-style="black"
          >
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/1.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 其他</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 其他</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 其他</div>
              </div>
            </div>
            <div class="list-banner" @click="jump">
              <div class="list-b-img">
                <img src="/static/images/2.jpg" alt />
                 <div class="bf">
                <img src="/static/images/bofang.png" alt />
                </div>
                <div>测试呀我也不知道写什么 奥利给奥利给奥利给 其他</div>
              </div>
            </div>
          </scroll-view>
        </swiper-item>
      </swiper>
      <!-- <div style="height:80rpx"></div> -->
      <!-- <div class="list-banner" @click="jump">
        <div class="list-b-img">
          <img src="/static/images/1.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="list-banner" @click="jump">
        <div class="list-b-img">
          <img src="/static/images/2.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="list-banner" @click="jump">
        <div class="list-b-img">
          <img src="/static/images/3.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="list-banner" @click="jump">
        <div class="list-b-img">
          <img src="/static/images/4.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>
      <div class="list-banner" @click="jump">
        <div class="list-b-img">
          <img src="/static/images/5.jpg" alt />
          <div>测试呀我也不知道写什么 奥利给奥利给奥利给 {{type}}</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import { post } from "@/utils/requestMethod.js";
export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "/static/images/user.png"
      },
      type: "首页",
      page: 1,
      list: [],
      flag: 0,
      winWidth: 0,
      winHeight: 0,
      currentTab: 0
    };
  },
  computed: {
    navbarSliderClass() {
      if (this.currentTab == 0) {
        return "tColor";
      }
      if (this.currentTab == 1) {
        return "tColor";
      }
      if (this.currentTab == 2) {
        return "tColor";
      }
      if (this.currentTab == 3) {
        return "tColor";
      }
      if (this.currentTab == 4) {
        return "tColor";
      }
      if (this.currentTab == 5) {
        return "tColor";
      }
    },
    contentHeight() {
      return this.winHeight + "px";
    }
  },
  components: {},

  methods: {
    repeat(currentTab) {
      console.log(currentTab);
      this.currentTab = currentTab;
      this.list = [];
      // wx.setNavigationBarColor({//设置顶部的背景颜色
      //   frontColor: "#ffffff",
      //   backgroundColor: "#ff0000" // 窗口的背景色为白色
      // });
      // this.postData(this.type);
      setTimeout(() => {
        // console.log(this.list);
      }, 1000);

      this.flag = 0;
      setTimeout(() => {
        this.flag = 1;
      }, 1000);
    },
    shuaxin() {
      // this.flag = 0;
      // setTimeout(() => {
      //   this.flag = 1;
      // }, 1000);

      this.list = [];
      this.postData(this.type);
    },
    postData(type, page) {
      this.flag = 0;
      post("data", { type: type, page: page })
        .then(v => {
          // console.log(v);
          this.list = v.data;
          setTimeout(() => {
            this.flag = 1;
          }, 1000);
          // this.flag = 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    jump() {
      // console.log(1111);
      wx.navigateTo({ url: "../video/main" });
    },
    swiperChange(e) {
      console.log(e);
      this.currentTab = e.mp.detail.current;
      this.flag = 0;
      setTimeout(() => {
        this.flag = 1;
      }, 1000);
      // this.activeIndex = this.currentTab;
    }
  },
  onShareAppMessage() {},
  onPullDownRefresh() {
    //下拉刷新触发
    console.log("下拉刷新");
    this.list = [];
    // this.postData(this.type);
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1200);
  },
  onReachBottom() {
    //上拉加载
    console.log("上刷新");
    post("data", { type: this.type, page: this.page })
      .then(v => {
        this.list.push(...v.data);
        // console.log(this.list)
      })
      .catch(err => {
        console.log(err);
      });
  },
  created() {
    // let app = getApp()
    // let  ref = post("data", { aa: "asdhjkasfdsaklfdsaf" });
    // this.postData(this.type);

    setTimeout(() => {
      this.flag = 1;
    }, 1500);
  },
  onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
    // console.log(this.winWidth);
    console.log(this.winHeight);
  }
};
</script>

<style scoped>
.main {
  position: relative;
}
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading > img {
  width: 80px;
  height: 80px;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.content {
  box-sizing: border-box;
  height: 100%;
  /* padding-top: 50px; */
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
}
.swiper-item {
  height: 100%;
  text-align: center;
}
.swiper-item {
  height: 100%;
  text-align: center;
}
.shuaxin {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 0;
  bottom: 100rpx;
  z-index: 1;
}
.shuaxin > img {
  width: 100%;
  height: 100%;
}
.banner {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 10;
}
.top {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
  padding: 5rpx 0;
  border-bottom: 1px solid rgba(204, 204, 204, 0.1);
  box-sizing: border-box;
}
.top > li {
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 10rpx;
}
.tColor {
  color: red;
  border-bottom: 3px solid red;
  box-sizing: border-box;
}

.list {
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 80rpx;
}
.list-banner {
  width: 100%;
  padding: 0 30rpx 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.list-b-img {
  border-radius: 10rpx;
  width: 90%;
  position: relative;
  /* background-color: #fff; */
}
.list-b-img > div {
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
.list-b-img > img {
  border-radius: 10rpx;
  width: 100%;
}
.bf{
  width: 100rpx !important;
  height:100rpx !important;
  padding: 0 !important;
  position: absolute;
  left: 0 ;
  right: 0 ;
  top: 0;
  bottom: 0 !;
  margin:  auto;
  border-radius: 50% !important;
}
.bf>img{
  width: 100rpx;
  height:100rpx;
}
.btn {
  width: 100rpx;
  height: 50px;
  font-size: 12px;
}
</style>
