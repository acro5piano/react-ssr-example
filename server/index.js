const app = require('express')();
const { renderToString } = require('react-dom/server');

console.log(renderToString)

app.use(require('cors')())

app.get('/posts', (req, res) => {
  res.send('ok')
});

app.get('/api/posts', (req, res) => {
  res.send([{
    title: 'hoge',
    content: 'fugafuga',
  }]);
});

app.listen(20589, () => {
  console.log('listening');
});
