const express = require('express');

const router = express.Router();

const Account = require('./account-model');

router.get('/', async (req, res) => {
   try {
      const data = await Account.getAll();
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
});

router.get('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const data = await Account.getById(id)
      res.json(data)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
});

router.post('/', async (req, res) => {
   try {
      const newAccount = req.body;
      const data = await Account.create(newAccount);
      res.json(data)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
});

router.put('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const editedAccount = req.body;
      await Account.update(id, editedAccount);
      const updated = await Account.getById(id)
      res.json(updated)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
});

router.delete('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      await Account.delete(id)
      res.json({ message: `Account with the id ${id} was deleted.`})
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
});



module.exports = router;