export default {
  pages: [
    'pages/index/index',
    'pages/cart/index',
    'pages/me/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/cart/index',
      text: '购物车'
    }, {
      pagePath: 'pages/me/index',
      text: '我的'
    }]
  },
}
