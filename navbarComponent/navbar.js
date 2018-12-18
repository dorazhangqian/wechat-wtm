// navbarComponent/navbar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  navbar:{
    type: Object,
    value:''
    },
    navbarA:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gobackZQ: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
