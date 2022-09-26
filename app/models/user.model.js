
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
      firstName: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
      sex: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },

      username: {
        type: Sequelize.STRING,
        allowNull: true,
        required: false
    },
      password: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
      phoneNumber: {
          type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
      avatarUrl: {
         type: Sequelize.STRING,
          allowNull: true,
          required: false
      },
  }, {
      timestamps: true
  });

  return User;
};

