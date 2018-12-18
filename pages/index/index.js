//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //tabbar
    tabbar: {},
    imgUrls: [
      '../../assets/imgs/head_bg.jpg',
      '../../assets/imgs/head_bg.jpg',
      '../../assets/imgs/head_bg.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    
    list:[
      { 'img':"../../assets/imgs/icon_menu_cx@2x.png",'text':'车讯'},
      { 'img': "../../assets/imgs/icon_menu_yj@2x.png", 'text': '瑜伽' },
      { 'img': "../../assets/imgs/icon_menu_sj@2x.png", 'text': '司机' },
      { 'img': "../../assets/imgs/icon_menu_ls@2x.png", 'text': '老师' },
      { 'img': "../../assets/imgs/icon_menu_fy@2x.png", 'text': '翻译' },
      { 'img': "../../assets/imgs/icon_menu_bj@2x.png", 'text': '搬家' },
      { 'img': "../../assets/imgs/icon_menu__ba@2x.png", 'text': '保安' },
      { 'img': "../../assets/imgs/icon_menu_wx@2x.png", 'text': '维修' },
      { 'img': "../../assets/imgs/icon_menu_jsj@2x.png", 'text': '计算机' },
      { 'img': "../../assets/imgs/icon_menu_zg@2x.png", 'text': '杂工' },
      { 'img': "../../assets/imgs/icon_menu_ck@2x.png", 'text': '财会' },
      { 'img': "../../assets/imgs/icon_menu_fs@2x.png", 'text': '风水' },
      { 'img': "../../assets/imgs/icon_menu_hz@2x.png", 'text': '化妆' },
      { 'img': "../../assets/imgs/icon_menu_bs@2x.png", 'text': '办事' },
      { 'img': "../../assets/imgs/icon_menu_gd@2x.png", 'text': '更多' }
    ],
    agreement:false,
    region: ['北京', '', ''],
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
    app.editTabbar();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showAgreement:function(){
    console.log(this.data.agreement);
    this.setData({
      agreement: true
    })
  },
  closeModel:function(){
    console.log(this.data.agreement);
    this.setData({
      agreement: false
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  toBanner:function(){
   wx.navigateTo({//banner详情
     url: '../../pages/banner/banner'
   })
  },
  toTask: function () {//类目页面
    wx.navigateTo({
      url: '../../pages/task/task'
    })
  },
  toTaskDetail: function () {//任务详情
    wx.navigateTo({
      url: '../../pages/taskDetail/taskDetail'
    })
  },
  toSeeTackList :function(){//已查看任务列表
    wx.navigateTo({
      url: '../../pages/seeTackList/seeTackList'
    })
  },
  tosearchResult:function(){//搜索结果
    wx.navigateTo({
      url: '../../pages/searchResult/searchResult'
    })
  },
  toreleaseTask:function(){//发布任务页面
    wx.navigateTo({
      url: '../../pages/releaseTask/releaseTask'
    })
  },
  tomyTask: function () {//我的任务页面
    wx.navigateTo({
      url: '../../pages/myTask/myTask'
    })
  }
})
