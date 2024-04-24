const { User } = require("../../../models");

module.exports = async (req, res) => {
  const userIds = req.query.user_ids;
  const userNames = req.query.user_names;

  const sqlOptions = {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  };
  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }
  if (userNames.length) {
    sqlOptions.where = {
      name: userNames,
    };
  }
  const users = await User.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
