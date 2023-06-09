const db = require('../database/models');
const CreateError = require('../utils/createError');
const verifyHash = require('../utils/verifyPassword');
const { generateToken } = require('../utils/tokenManager');

const authService = {
        login: async (email, password) => {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            throw new CreateError('NotFoundError', 'Usuário não encontrado');
        }
        const validLogin = verifyHash(user.password, password);
        if (!validLogin) {
            throw new CreateError('UnauthorizedError', 'Email ou senha inválidos');
        }
        const { name, role } = user;
        const token = generateToken({ id: user.id, email: user.email, name, role });
        const retorno = {
            token,
            name,
            role,
            email,
            id: user.id,
        };
        return retorno;
    },
    
};

module.exports = authService;
