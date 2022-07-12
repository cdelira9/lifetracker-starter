const { UnauthorizedError } = require("../utils/erros");

class User {
  static async login(credentials) {

    throw new UnauthorizedError("Invalid email/password combo")
  }

  static async register(credentials) {

    
  }
}

module.exports = User;
