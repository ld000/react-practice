module.exports = (app) => {

  app.get('/api/blog', (req, res) => {
    var blogs = [
      {title: 'test1', createTime: '2017-01-01', content: '# Marked in browser\n\nRendered by **marked**.'},
      {title: 'test2', createTime: '2017-01-01', content: 'Test content placeholder'}
    ];
    res.json(blogs);
  });

  app.get('/api/info', (req, res) => {
    var info = {
      user: 'ld000',
      imageAddress: '',
      address: 'ld000.space'
    };
    res.json(info);
  });

  app.get('/api/menu', (req, res) => {
    var menu = [
      {name: '归档', url: '/1'},
      {name: '归档2', url: '/2'}
    ];
    res.json(menu);
  });

}
