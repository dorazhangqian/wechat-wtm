// pages/task/task.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "navbar":'',
    "position":"保安",
    "location":"成都市",
    "showList":false,
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,
  gobackZQ: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  showType:function(){
    this.setData({
      "showList":true
    })
  },
  closeTypeList:function(){
    this.setData({
      "showList": false
    })
  }
})