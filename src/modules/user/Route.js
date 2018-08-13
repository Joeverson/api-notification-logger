import Express from 'express';

const App = Express.Router();

App.route('/')
  .get((req, res) => {
    res.send('teste 123')
  })

export default App