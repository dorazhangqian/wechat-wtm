// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "iconPath": "icon/icon_coupon.png",
            "selectedIconPath": "icon/icon_coupon2.png",
            "text": "抢红包"
          },
          {
            "pagePath": "/pages/index/index",
            "iconPath": "icon/icon_coupon.png",
            "selectedIconPath": "icon/icon_coupon2.png",
            "text": "优惠券"
          },
          {
            "pagePath": "/pages/middle/middle",
            "iconPath": "icon/icon_home_advertise.png",
            "isSpecial": true
          },
          {
            "pagePath": "/pages/mine/mine",
            "iconPath": "icon/icon_coupon2.png",
            "selectedIconPath": "icon/icon_coupon2.png",
            "text": "任务"
          },
          {
            "pagePath": "/pages/mine/mine",
            "iconPath": "icon/icon_my.png",
            "selectedIconPath": "icon/icon_my.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
