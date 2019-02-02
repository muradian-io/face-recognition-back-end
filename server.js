const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image')

const db = knex({
  client: 'pg',
  connection: {
    host : 'port',
    user : '',
    password : '',
    database : 'database-name'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {
  res.send(database.users);
})

app.post('/signin', signin.handleSignin(req,res,db,bcrypt));

app.post('/register', register.handleRegister(req,res,db,bcrypt));

app.get('/profile/:id', profile.handleProfile(req,res,db));

app.put('/image', image.handleImage(req,res,db));



app.listen("PORT", ()=> {
  console.log('app is running');
})
