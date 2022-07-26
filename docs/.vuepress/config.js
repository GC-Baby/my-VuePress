module.exports = {
  title: 'GCBaby', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'GCBaby的学习记录', // meta 中的描述文字，用于SEO
  head: [
    ['link', {rel: 'icon', href: '/title_icon.png'}]
  ],
  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    logo: '/title_icon.png',  //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      {text: '首页', link: '/'},

      {
        text: '前端',
        ariaLabel: '分类',   //用于识别的label
        items: [
          {text: 'VuePress', link: '/pages/front/test1.md'}
        ]
      },

      //格式三：跳转至外部网页，需http/https前缀
      {text: 'Github', link: 'https://github.com/GC-Baby/my-VuePress'},
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/pages/': [
        {
          title: '测试菜单1',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['test2.md', '子菜单2'],
          ]
        },
      ],

      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}
