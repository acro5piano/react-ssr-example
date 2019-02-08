const app = require('express')();

app.use(require('cors')())

app.get('/api/posts', (req, res) => {
  res.send([{
    title: 'hoge',
    content: 'fugafuga',
  }]);
});

app.listen(20589, () => {
  console.log('listening');
});
