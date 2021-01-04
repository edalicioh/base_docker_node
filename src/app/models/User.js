/* eslint-disable func-names */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    },
  );

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function () {
    return jwt.sign(
      { id: this.id, email: this.email, name: this.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRATION || 120,
      },
    );
  };

  return User;
};
