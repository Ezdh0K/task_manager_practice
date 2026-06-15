import userController from "./user.controller";

const express = require('express');
const router = Router();

router.post('/', userController.);
router.get('/', userController.);
router.put('/:id', userController.);
router.delete('/:id', userController.);

module.exports = router;