const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');

router.get('/', async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);    
    } catch(error) {
        res.json({fatal: error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await Inmueble.create(req.body);
        res.json(result);    
    } catch (error) {
        res.json({fatal: error.message});
    }
});

router.put('/:inmuebleId', async (req, res) => {
    const {inmuebleId} = req.params;
    try {
        const result = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, {new: true});
        res.json(result);    
    } catch(error) {
        res.json({fatal: error.message});
    }
});

router.delete('/:inmuebleId', async (req, res) => {
    const {inmuebleId} = req.params;
    try {
        const result = await Inmueble.findByIdAndDelete(inmuebleId);

        if(!result) {
            return res.json({fatal: 'El id de inmueble no existe'});
        }
        res.json(result);    
    } catch(error) {
        res.json({fatal: error.message});
    }
});


module.exports = router;