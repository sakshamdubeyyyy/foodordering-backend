const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/MenuItemControllers");

router.post("/", menuItemController.createMenuItem);
router.get("/", menuItemController.getMenuItems);
router.get("/:id", menuItemController.getMenuItemById);
router.put("/:id", menuItemController.updateMenuItem);
router.delete("/:id", menuItemController.deleteMenuItem);

module.exports = router;
