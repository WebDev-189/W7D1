/**
 * Node used to not support import / export
 * Most of the documentation is written using `require`
 * import express from 'express'
 * const express = require('express')
 */

const express = require("express")

/**
 * Express gives us back a function we can execute to create our application
 * This function gives us an object with a lot of methods allowing us to create our server
 */

const app = express()

/**
 * Configuration of the app:
 *
 */

app.use(express.static("public"))

app.get("/", (request, response, next) => {
	// response.send("<h1>Hellooooo</h1>")
	response.sendFile(__dirname + "/views/homepage.html")
})

// const dataToSend = require("./data.json")
console.log(__dirname)

app.get("/miscellaneous", (req, res, next) => {
	/**
	 * One request should trigger just one response.
	 */
	res.sendFile(__dirname + "/data.json")
	// res.send("test")
	// res.json({ name: "bob" })
})

app.get("*", (req, res, next) => {
	res
		.status(404)
		.json({ message: `The route ${req.originalUrl} does not exist.` })
})

app.listen(5005, () => console.log("Server running on http://localhost:5005"))

/**
 * STEPS
 *
 * npm init
 * Allow you to create a package.json file.
 * install express and nodemon
 * add a "dev" script in your package.json The dev script should use nodemon to run your server.
 * create a file index.js or server.js or app.js
 * require express 👀
 * Create the app object using express.
 *
 * Create a route using app.get(path, callback)
 * The callback have 3 arguments, request, response and next (a function we will talk about later)
 *
 * Send back a response
 *
 *
 * → Don't forget that your server needs to listen to a specific port :)
 *
 *
 */
