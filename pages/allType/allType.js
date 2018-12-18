// pages/allType/allType.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:'所有类目分类 ',
    type:[
      '泊车','办事','砍价','杂工','店铺','好消息','合伙人','自推','房产','二手','本地通','出租','职场','租房'
    ],
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

  },
  gobackZQ: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})