require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRouter = require("./routes/note");
const app = express();

const connectDB = async () => {
  await mongoose
    .set("strictQuery", false)
    .connect(
      `mongodb+srv://nguyentienkha2908:Khadeptrai2908@cluster0.dmhzcjg.mongodb.net/myWeb`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Mongoose connected successfully"))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};
connectDB();
app.use(cors());
app.use(express.json()); // This middleware parses JSON payloads
app.use("/api/note", noteRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

//B thay doi