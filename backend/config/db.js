var mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://127.0.0.1/mypos", {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("[database] go ahead !"));

mongoose.connection.on("connected", () => {
  console.log("[database] connection open");
});

mongoose.connection.on("error", (err) => {
  console.log("[database] connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("[database] connection disconnected");
});

//catches ctrl+c event
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("[database] connection disconnected through app termination");
    process.exit(0);
  });
});
