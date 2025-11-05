import express from "express";
import cors from "cors";
import db from "./db.js"; // db ist db.promise()

const app = express();
app.use(cors());
app.use(express.json());

// === Alle Kinder abrufen ===
app.get("/api/kinder", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM kinder");
    res.json(rows);
  } catch (err) {
    console.error("GET Fehler:", err);
    res.status(500).json({ error: err.message });
  }
});

// === Neues Kind hinzufügen ===
app.post("/api/kinder", async (req, res) => {
  const { name, klasse = "", eltern = "", telefon = "" } = req.body;
  if (!name) return res.status(400).json({ error: "Name ist erforderlich" });

  try {
    const [result] = await db.query(
      `INSERT INTO kinder 
       (name, hymne, verhalten, anwesenheit_G, anwesenheit_U, gesamt, klasse, eltern, telefon) 
       VALUES (?, 0, 0, 0, 0, 0, ?, ?, ?)`,
      [name, klasse, eltern, telefon]
    );

    res.json({
      id: result.insertId,
      name,
      hymne: 0,
      verhalten: 0,
      anwesenheit_G: 0,
      anwesenheit_U: 0,
      gesamt: 0,
      klasse,
      eltern,
      telefon
    });
  } catch (err) {
    console.error("POST Fehler:", err);
    res.status(500).json({ error: err.message });
  }
});

// === Kind aktualisieren ===
app.put("/api/kinder/:id", async (req, res) => {
  const { id } = req.params;
  const fields = Object.keys(req.body);
  const values = Object.values(req.body);

  if (fields.length === 0) return res.status(400).json({ error: "Keine Felder zum Aktualisieren" });

  const setString = fields.map(f => `${f} = ?`).join(", ");

  try {
    await db.query(`UPDATE kinder SET ${setString} WHERE id = ?`, [...values, id]);
    res.json({ success: true });
  } catch (err) {
    console.error("PUT Fehler:", err);
    res.status(500).json({ error: err.message });
  }
});

// === Kind löschen ===
app.delete("/api/kinder/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM kinder WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    console.error("DELETE Fehler:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Server läuft auf http://localhost:3000"));
