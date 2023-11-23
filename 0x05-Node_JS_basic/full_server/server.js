const app = require('express')();

const router = require('./routes/index');

app.use(router);

app.listen(1245, () => console.log('app listening on port 1245'));

export default app;
