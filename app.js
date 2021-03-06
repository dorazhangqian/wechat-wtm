//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#EB5E47",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "抢红包",
          "iconPath": "icon/icon_home_grab_red_envelope@2x.png",
          "selectedIconPath": "icon/icon_home_grab_red_envelope_selected@2x.png"
        },
        {
          "pagePath": "/pages/coupon/coupon",
          "text": "优惠券",
          "iconPath": "icon/icon_coupon@2x.png",
          "selectedIconPath": "icon/icon_coupon_selected@2x.png"
        },
        {
          "pagePath": "/pages/middle/middle",
          "iconPath": "icon/icon_home_advertise.png",
          "isSpecial": true
        },
        {
          "pagePath": "/pages/tasktab/tasktab",
          "text": "任务",
          "iconPath": "icon/icon_task@2x.png",
          "selectedIconPath": "icon/icon_coupon2.png"
        },
        {
          "pagePath": "/pages/mine/mine",
          "text": "我的",
          "iconPath": "icon/icon_my@2x.png",
          "selectedIconPath": "icon/icon_my_selected@2x.png"
        }
      ]
    }
  }
})