
const funcS = () => {
	switch(process.env.NODE_ENV) {
		case 'production':
			return "http://trelloforest.herokuapp.com"
		case 'development':
			return "http://localhost:8080"
		default:
			return 'http://localhost:8080'
	}
}
// export SERVER_PORT;
export const SERVER_PORT = funcS();
