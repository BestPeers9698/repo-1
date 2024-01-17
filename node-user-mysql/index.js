const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postRoutes = require('./router/postRoutes');
const userRoutes = require('./router/userRoutes');
const likeRoutes = require('./router/likeRoutes');
const commentRoutes = require('./router/commentRoutes');
const{sequelize} = require('./config/config');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/',postRoutes);
app.use('/',userRoutes);
app.use('/posts',likeRoutes);
app.use('/posts',commentRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync({ force: true });
  console.log('Database synced');
});
