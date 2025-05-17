const router = require('express').Router();
const {registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser} = require("../controllers/userControllers")

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)

module.exports = router;