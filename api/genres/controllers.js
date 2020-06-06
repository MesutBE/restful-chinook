const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM genres`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {

    const id = req.params.id;
    console.log(id);


    const sql = `SELECT * FROM genres  Where GenreId="${Number(id)}"`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  create: (req, res) => {
    // read row data from body
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);

    const sql = `
      INSERT INTO genres (Name)
      VALUES ("${dataParsed.Name}")
      `;

    // Sample body for request
    // {
    //   "Name": "New Genre",
    // }

    db.run(sql, function (err) {
      if (err) {

        res.status(400).json({ "error": err.message });
        return; a
      }
      res.json({
        message: `A row has been inserted with GenreId: ${this.lastID}`
      });
    });

  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);
    const sql = `
      UPDATE genres
      SET Name = "${dataParsed.Name}"
      WHERE GenreId = ${Number(id)}
      `;

    // Sample body for request
    // {
    //   "Name": "New Genre updated"
    // }
    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      //return the last id if the table 
      res.json({ message: `Row(s) updated: ${this.changes}` });
    });


  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql = `
      DELETE FROM genres
      WHERE GenreId = "${Number(id)}"
      `;
    // console.log(sql);

    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      // console.log(this);

      res.json({ message: `Row(s) deleted: ${this.changes}` });
    });

  }
}

module.exports = controllers;
