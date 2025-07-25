import multer from 'multer';
import multerConfig from '../config/multerConfig';

import FotoModel from '../models/Foto'

const upload = multer(multerConfig).single('foto');

class Foto {
   store(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await FotoModel.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch(e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        })
      }



    })
  }
}

export default new Foto();
