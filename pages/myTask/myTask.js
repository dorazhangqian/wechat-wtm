// pages/myTask/myTask.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "navbar": "我的任务",
    "type":1,
    "notice":0,
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
  chooseType:function(event){
    console.log(event.currentTarget.dataset.type);
   this.setData({
     "type": event.currentTarget.dataset.type
   })
   
  },
  totop: function () {
    console.log(this.data.notice);
    this.setData({
      notice: 1
    })
  },
  todel: function () {
    console.log(this.data.notice);
    this.setData({
      notice: 2
    })
  },
  totopok: function () {
    console.log(this.data.notice);
    this.setData({
      notice: 3
    })
  },
  closeModel: function () {
    console.log(this.data.notice);
    this.setData({
      notice: 4
    })
  },
  tosTaskDetail: function () {//审核中任务详情
    wx.navigateTo({
      url: '../../pages/sTaskDetail/sTaskDetail'
    })
  }
  ,
  topTaskDetail: function () {//进行中任务详情
    wx.navigateTo({
      url: '../../pages/pTaskDetail/pTaskDetail'
    })
  },
  toxTaskDetail: function () {//下架任务详情
    wx.navigateTo({
      url: '../../pages/xTaskDetail/xTaskDetail'
    })
  }
})