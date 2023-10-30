const http = require("http")

const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.write("Hello")
		response.end()
	} else if (request.url === "/about") {
		response.write(`<ul><li>Test</li><li>Test 2</li></ul>`)
		response.end()
	} else {
		response.statusCode = 404
		response.write("Wrong way buddy")
		response.end()
	}
})
console.log("Restarting server")
server.listen(3000)
