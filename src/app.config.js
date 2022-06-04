export default {
  pages: [
    'pages/home/index',
    'pages/me/index',
    'pages/news/index'
  ],
  subPackages: [
    {
      root: 'packageA',
      pages: [
        'pages/investdetail/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2962FF',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    list: [
      {
        'iconPath': 'assets/home1.png',
        'selectedIconPath': 'assets/home0.png',
        pagePath: 'pages/home/index',
        // text:'主页'
      },
      {
        'iconPath': 'assets/love1.png',
        'selectedIconPath': 'assets/love0.png',
        pagePath: 'pages/news/index',
        // text:'收藏'
      },
      {
        'iconPath': 'assets/me1.png',
        'selectedIconPath': 'assets/me0.png',
        pagePath: 'pages/me/index',
        // text:'我的'
      }
    ]
  }
}
