const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./routes/employee");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use("/abgitservices/api/", employeeRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nx86a.mongodb.net/EmployeeDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
