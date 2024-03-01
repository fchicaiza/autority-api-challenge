import { DataTypes, Model } from 'sequelize';

import { tokenHelper } from '@/helpers';


export default function (sequelize) {
  class User extends Model {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    generateToken(expiresIn = '1h') {
      const data = { id: this.id, email: this.email };
      return tokenHelper.generateToken(data, expiresIn);
    }

    static associate(models) {
      User.hasMany(models.Todo, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }

  User.init({
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    modelName: 'user',
    sequelize,
  });

  return User;
}
