import BrandModel from '../models/BrandModel.js';

    //POST - CREATE OF CRUD
export const createBrand = async (req, res) => {
    try{
        await BrandModel.create(req.body)
        res.json({message: "The brand has been added successfully!"})
    }catch (error){
        res.status(500).json({message: error.messge})
    }
};

    //GET THE R OF CRUD
export const getAllBrands = async (_req, res) => {
    try{
        const brands = await BrandModel.findAll()
        res.json(brands)
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
};

    //PUT - UPDATE OF CRUD
export const updateBrand = async (req, res) => {
    try {
        const brand = await BrandModel.findByPk(req.params.id);
        if (!brand) {
            return res.status(500).json({ message: 'Brand not found' });
        }
        await BrandModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The brand information has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

    //DELETE - DELETE OF CRUD
export const deleteBrand = async (req, res) => {
    try {
        const brand = await BrandModel.findByPk(req.params.id);
        if (!brand) {
            return res.status(500).json({ message: 'Brand not found' });
        }
        await BrandModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'The Brand has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};