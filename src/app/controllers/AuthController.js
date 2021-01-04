import { User } from '../models';

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ errors: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ errors: 'Incorrect password' });
      }
      const { id, name } = user;
      return res.json({
        user: { id, name, email },
        token: user.generateToken(),
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.status(200).json({
        user: { id, name, email },
        token: user.generateToken(),
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  async me(req, res) {
    const { id, name, email } = req.user;
    return res.status(200).json({
      user: { id, name, email },
      token: req.token,
    });
  }
}

export default new AuthController();
