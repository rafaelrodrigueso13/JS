"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserC = require('../controllers/UserC'); var _UserC2 = _interopRequireDefault(_UserC);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deve existir
// router.get('/', loginRequired, UserC.index); // Lista usuários
// router.get('/:id', UserC.show); // Lista um usuário

router.post('/', _UserC2.default.create);
router.put('/', _loginRequired2.default, _UserC2.default.update);
router.delete('/', _loginRequired2.default, _UserC2.default.delete);

exports. default = router;
