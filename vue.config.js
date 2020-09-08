// 扩展webpack
module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.get('/api/goods', (req, res) => {
          res.json({
            code: 0,
            data: [{
                id: 1,
                title: 'Vue2.x实战',
                price: 100,
                img: '/img/0.jpg'
              },
              {
                id: 2,
                title: 'React16.2实战',
                price: 120,
                img: '/img/1.jpg'
              },
              {
                id: 3,
                title: 'nodeJs',
                price: 110,
                img: '/img/2.jpg'
              },
              {
                id: 4,
                title: '前端工程化',
                price: 80,
                img: '/img/3.jpg'
              },
              {
                id: 5,
                title: '面试',
                price: 200,
                img: '/img/4.jpg'
              },
              {
                id: 6,
                title: '前端安全',
                price: 30,
                img: '/img/5.jpg'
              },
              {
                id: 7,
                title: 'Python基础语法',
                price: 130,
                img: '/img/6.jpg'
              },
              {
                id: 8,
                title: 'Flask实战',
                price: 80,
                img: '/img/7.jpg'
              },
              {
                id: 10,
                title: 'Python语法进阶',
                price: 200,
                img: '/img/9.jpg'
              },
              {
                id: 11,
                title: 'java入门语法',
                price: 90,
                img: '/img/10.jpg'
              }
            ]
          })
        })
      }
    }
  }
}
