const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const { NotFoundError } = require("./utils/errors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ user: "token" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running http://localhost:${PORT}`);
});
