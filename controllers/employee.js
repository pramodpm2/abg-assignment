const Employees = require("../model/employee");

exports.addEmployee = (req, res) => {
  const { name, email, mobileNumber, department, salary } = req.body;
  Employees.findOne({ email: email }, (err, user) => {
    if (user) {
      res.status(409).json("employee already exist");
    } else {
      const user = new Users({ name, email, mobileNumber, department, salary });
      user.save((err) => {
        if (err) {
          res.status(404).json("error");
        } else {
          res.status(200).json("employee added");
        }
      });
    }
  });
};

exports.getEmployees = (req, res) => {
  try {
    Employees.find()
      .then((users) => {
        return res.status(200).json(users);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};

exports.editEmployee = (req, res) => {
  try {
    const { id } = req.params;
    const bodyData = req.body;
    Employees.updateOne({ _id: id }, { $set: { ...bodyData } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};

exports.deleteEmployeeById = (req, res, next) => {
  try {
    const id = req.params.id;
    Employees.deleteOne({ _id: id })
      .then((result) => {
        return res.status(200).json(`Employee with ${id} is deleted`);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};
