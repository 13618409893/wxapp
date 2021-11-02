//index.js
const util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    ad: [],
    domain: app.globalData.domain,
    random: '',
    keywords: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadIndex()
    this.createNonceStr()
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

  /**
   * 加载幻灯片、广告、楼层分类
   */
  loadIndex: function () {
    var url = 'Index/index'
    var params = {}
    util.wxRequest(url, params, data => {
      if(data.code == 200){
        this.setData({ banner: data.banner, ad: data.ad })
        // console.log(data.ad)
      }
    }, data => {}, data => {})
  },

  /**
   * 生成一个随机数
   */
  createNonceStr: function () {
    var random = Math.random().toString().substr(2,15)
    this.setData({ random: random })
  },

  /**
   * 获取搜索框的值
   */
  inputing: function(e){
    this.setData({ keywords: e.detail.value })
  },

  /**
   * 搜索功能
   */
  searchGoods: function(){

  }

})
