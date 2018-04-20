const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

router.get('/', (req, res) => {
    db.Author.findAll()
    .then(author => {
        author ? res.status(200).json(author) : res.status(404).send('Opps! Something went wrong, no authors found')
    });
});

router.get('/:id', (req, res) => {
    db.Author.findById(req.params.id)
    .then(author => {
        author ? res.status(200).json(author) : res.status(404).send("Opps! Couldn't find author with that Id!")
    });
});

router.get('/:id/blogs', (req, res) => {
    db.Author.findAll(
        {
            where: {
                authorId: req.params.id
            }
        }.then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send("Opps! No blog's from authors with that Id!")
        })
    )
});

router.post('/', (req, res) => {
    db.Author.create(req.body)
    .then(author => {
        author ? res.status(200).json(author) : res.status(404).send('Something went wrong in creating the author, please ask anthony for help XD')
    })
});

router.put('/:id', (req, res) => {
    db.Author.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(author => {
        author ? res.status(204).json(author) : res.status(404).send("Opps something when wrong updating the author")
    });
});

router.delete('/:id', (req, res) => {
    db.Author.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(author => {
        author ? res.status(200).send("Author successfully deleted") : res.status(404).send('Uh Oh! Could not delete author for some reason')
    })
});

module.exports = router;
