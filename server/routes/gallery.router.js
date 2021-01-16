const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')
const { default: axios } = require('axios')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id

    const queryText = `UPDATE image_gallery SET likes = likes + 1 WHERE id = $1`

    pool
    .query(queryText, [id])
    .then((result) => res.sendStatus(200))
    .catch((err) => res.sendStatus(500))
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM image_gallery ORDER BY likes DESC`

    pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })

}); // END GET Route

router.post('/', (req, res) => {
    const queryText = `INSERT INTO image_gallery (path, description) VALUES ($1, $2)`

    pool
    .query(queryText, [req.body.path, req.body.description])
    .then((result) => res.sendStatus(201))
    .catch((err) => res.sendStatus(500))
})

router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM image_gallery WHERE id = $1`

    pool
    .query(queryText, [req.params.id])
    .then((result) => res.sendStatus(200))
    .catch((err) => res.sendStatus(500))
})

module.exports = router;