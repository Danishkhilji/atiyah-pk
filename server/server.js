let express = require('express');
let bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
let app = express();
const session = require('express-session');
const db = require('./config/database');
var cors = require('cors')

require('dotenv').config()

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5000', 
  credentials: true,
    }
))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: process.env.SESSION_KEY, // Replace with a secret key for session encryption
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set to true if using SSL
}));

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");
const donorRoutes = require("./routes/donorRoutes");
const receiverRoutes = require("./routes/receiverRoutes");


app.use('/api/admin', adminRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/receiver', receiverRoutes);
app.use('/api', publicRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

