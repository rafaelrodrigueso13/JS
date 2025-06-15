import Aluno from '../models/Aluno'

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafa',
      sobrenome: 'Rod',
      email: 'rafa@email.com',
      idade: 22,
      peso: 200.4,
      altura: 3.5,
    });
    res.json(novoAluno);
  }
}

export default new Home();
