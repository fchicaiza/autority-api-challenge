import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class Todo extends Model {
    get description(){
      return `${this.description}`
    }
    static associate(models) {
      Todo.belongsTo(models.user, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }
  Todo.init(
    {
      name: { 
        type: DataTypes.STRING(30), 
        allowNull:false 
      },
      description: {
        type:DataTypes.TEXT,
        allowNull: false
      },
      author: {
        type:DataTypes.STRING,
        allowNull: false
      },
      isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false
       },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false 
      }
    },
    {
      modelName: "todo",
      sequelize,
    }
  );
  return Todo;
}
