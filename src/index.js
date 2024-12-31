
import express from "express";

const PORT = 8000;

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.post("/api/v1/login", (request, response) => {
    const data = request.body;
    console.log(data.email)

});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
