Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击；
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList:[]

  },
  //点击导航按钮触发
  activeNav(e){
    // console.log(index);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  //获取导航条数据
  getNavList(){
    let self = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
         res.data.code === 0 ? self.setData({navList:res.data.data.navList}) : " "
      }
    })
  },
  //轮播图数据
  getswiperList(){
    let self = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        res.data.code === 0 ? self.setData({swiperList:res.data.data.swiperList}) : " "
      }
    })
  },
  getvideosList(){
    let self = this;
    wx.request({  
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res){
        res.data.code === 0 ? self.setData({videosList:res.data.data.videosList}) : " "
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航数据
    this.getNavList();
    this.getswiperList();
    this.getvideosList();
    //获取轮播图数据
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
})