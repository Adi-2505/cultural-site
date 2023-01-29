// Config file to store url of the mongodb database.
module.exports = {
  // Store the connection and database name in .env file with names DB_URL and DB_NAME respectively
  url: `${process.env.DB_URL}/${process.env.DB_NAME}`,
};
