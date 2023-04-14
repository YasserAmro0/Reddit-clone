const app = require("./app");

app.listen(app.get('port'), () => {
    console.log(`Server is Listening at http://localhost:${app.get('port')}`);
})