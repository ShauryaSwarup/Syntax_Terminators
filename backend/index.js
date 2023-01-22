const express = require("express");
const mongoose = require("mongoose");
// const session = require('express-session')
// const passport = require('passport')
// const LocalStrategy = require('passport-local')

const userRoutes = require("./routes/users");

const User = require("./models/user");

// express app
const app = express();

// middleware
app.use(express.json());

// const sessionConfig = {
//     secret: 'thisshouldbeabettersecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         expires: Date.now() + 1000*60*60*24*7,
//         maxAge: 1000*60*60*24*7
//     }
// }
// app.use(session(sessionConfig))

// app.use(passport.initialize())
// app.use(passport.session())
// passport.use(new LocalStrategy(User.authenticate()))

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//routes
app.use("/comparazon/user", userRoutes);

// connect to db
mongoose
	.connect(
		"mongodb+srv://Comparazon:sharayu2000@cluster0.vkvevwe.mongodb.net/test",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("CONNECTION FOR MONGODB OPEN!!!");
	})
	.catch((err) => {
		console.log("OH NO ERROR FOR MONGODB!!!!");
		console.log(err);
	});

app.listen(4000, () => {
	console.log("Listening to port 4000");
});
