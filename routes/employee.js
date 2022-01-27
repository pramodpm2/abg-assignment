const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employee")

router.post("/createemployee", employeeController.addEmployee);
router.get("/getemployees", employeeController.getEmployees)
router.put("/editemployee/:id", employeeController.editEmployee);
router.delete("/deleteemployee/:id", employeeController.deleteEmployeeById);

module.exports = router;