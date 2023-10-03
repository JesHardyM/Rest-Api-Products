import AdminModel from '../models/AdminModel.js';

// GET - REVIEW OF CRUD

export const getAllAdmins = async (_req, res) => {
    try{
        const admins = await AdminModel.findAll()
        res.json(admins);
    }catch (error){
        res.status(500).json({
            message: error.messge})
    }
}

//POST - CREATE OF CRUD

export const createAdmin = async (req, res) => {
    try{
        await AdminModel.create(req.body)
        res.status(200).json({message: "This administrator has been added successfully!"})
    }catch (error){
        res.status(500).json({message: "Administrator could not be added, please be sure to complete all fields."})
    }
}


//PUT - UPDATE OF CRUD

export const updateAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findByPk(req.params.id);
        if (!admin) {
            return res.status(500).json({ message: 'Administrator not found' });
        }
        await AdminModel.update(req.body, {where: {id:req.params.id}} );
        res.status(201).json({ message: 'The Administrator has been updated successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//DELETE - DELETE OF CRUD

export const deleteAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findByPk(req.params.id);
        if (!admin) {
            return res.status(500).json({ message: 'Administratior not found' });
        }
        await AdminModel.destroy({where: {id:req.params.id}} );
        res.status(203).json({ message: 'This administrator has been deleted successfully!' });
    } catch (error) {console.error(error);
        res.status(500).json({ message: error.message });
    }
};