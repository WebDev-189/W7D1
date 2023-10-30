const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

app.get("/", (req, res, next) => {
	res.send("<h1>Homepage</h1>")
})

app.use((req, res, next) => {
	console.log("We are in a middleware...")
	// req.user = { name: "Bob", isAdmin: true }
	next()
})

app.get("/about", (req, res, next) => {
	console.log(req.user)
	res.send("<h1>About page</h1>")
})

// Request (url === '/private')
app.get("/private", setUserAsAdmin, checkIfAdmin, (req, res, next) => {
	res.json({ bigSecret: "Started to like Mac computers..." })
})

app.get("*", (req, res, next) => {
	console.log("In the catch all route")
	res.status(404).send("404")
})

app.listen(5005, () => {
	console.log("Server 🏃 on http://localhost:5005")
})

function checkIfAdmin(req, res, next) {
	if (req.isAdmin) {
		next()
	} else {
		res.status(401).json({ message: "You are not authorized" })
	}
}

function setUserAsAdmin(req, res, next) {
	req.isAdmin = false
	next()
}
