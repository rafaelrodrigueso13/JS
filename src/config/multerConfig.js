import multer from 'multer';
import { extName, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000)


export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser do formato PNG ou JPG.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${file.originalname}`);
    },
  })
};
