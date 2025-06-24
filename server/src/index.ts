import express from "express"
import cors from "cors";
import eventRoute from "./routes/eventRoute"

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

app.use("/", eventRoute);

app.get("/", (req, res) => {
    res.send("Status is ok");
})

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})