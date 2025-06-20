const express = require('express');
const router = express.Router();
const Post = require('../models/Matricula'); // importo el modelo

router.get('/', async (req, res) => {
    try {
        const matriculas = await Matricula.find();
        res.json(matriculas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una matrícula por ID
router.get('/:matriculaId', async (req, res) => {
    try {
        const matricula = await Matricula.findById(req.params.matriculaId);
        res.json(matricula);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una matrícula
router.post('/', async (req, res) => {
    const matricula = new Matricula({
        estudiante: req.body.estudiante,
        curso: req.body.curso
    });

    try {
        const savedMatricula = await matricula.save();
        res.json(savedMatricula);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar una matrícula
router.patch('/:matriculaId', async (req, res) => {
    try {
        const updatedMatricula = await Matricula.updateOne(
            { _id: req.params.matriculaId },
            { $set: { estudiante: req.body.estudiante, curso: req.body.curso } }
        );
        res.json(updatedMatricula);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar una matrícula
router.delete('/:matriculaId', async (req, res) => {
    try {
        const removedMatricula = await Matricula.findByIdAndDelete(req.params.matriculaId);
        res.json({ message: 'Matrícula eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
 // exporto el router



