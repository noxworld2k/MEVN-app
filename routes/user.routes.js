const express = require('express');
const User = require('../schema/user.model');
const bcrypt = require('bcrypt');

const router = express.Router();

// CRUD - Create, Read, Update, Delete

// CREATE
router.post('/', async (req, res) => {
    // ... (kod związany z tworzeniem użytkownika)
});

// READ
router.get('/', async (req, res) => {
    // ... (kod związany z odczytywaniem wszystkich użytkowników)
});

router.get('/:id', async (req, res) => {
    // ... (kod związany z odczytywaniem pojedynczego użytkownika)
});

// UPDATE
router.put('/:id', async (req, res) => {
    // ... (kod związany z aktualizacją użytkownika)
});

// DELETE
router.delete('/:id', async (req, res) => {
    // ... (kod związany z usuwaniem użytkownika)
});

// Dodaj endpoint do weryfikacji hasła
router.post('/verifyPassword', async (req, res) => {
    // ... (kod związany z weryfikacją hasła)
});

module.exports = router;
