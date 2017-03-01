module.exports = (app) => {

  app.get('/api/blog', (req, res) => {
    var blogs = ['a', 'b'];
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
