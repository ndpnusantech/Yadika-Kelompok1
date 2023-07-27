const express = require("express")
const { createTransaction, getTransactions, deleteTransaction, getTransactionById } = require("../controllers/TransactionController")
const router = express.Router()

router.post("/transaction",createTransaction)
router.get("/transaction",getTransactions)
router.get("/transaction/:id",getTransactionById)
router.delete("/transaction/:id",deleteTransaction)

module.exports = router