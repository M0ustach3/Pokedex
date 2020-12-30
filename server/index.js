const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static('static'));

app.use('/api/pokemons', require('./routes/pokemons_routes'));
app.use('/api/items', require('./routes/items_routes'));
app.use('/api/moves', require('./routes/moves_routes'));
app.use('/api/types', require('./routes/types_routes'));

app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
