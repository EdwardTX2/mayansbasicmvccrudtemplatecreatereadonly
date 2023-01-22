const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) // get the edit page with item id
router.get('/remove/:id', editController.deleteItem) // remove the item
router.post('/update/:id', editController.updateItem) // updates item using form data

module.exports = router