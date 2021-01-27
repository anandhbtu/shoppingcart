const env = {
      PORT: 8080,
      DB_DIALECT: "mysql",
      DB_DATABSE: "shopping_cart",
      DB_USERNAME: "root",
      DB_PASSWORD: 'password',
      DB_HOST : "localhost",
      secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

module.exports = env;