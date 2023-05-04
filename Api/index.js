const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log("%s aqui entras at 3001"); // eslint-disable-line no-console
  });
});
