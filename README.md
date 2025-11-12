# 🎵 FaithPoints

Faith Points ist ein webbasiertes Verwaltungssystem zur Erfassung und Auswertung von Kinderpunkten in kirchlichen oder schulischen Gruppen.
Das System wurde entwickelt, um Betreuern die digitale Verwaltung von Punkten für Hymnen, Verhalten und Anwesenheit zu ermöglichen. Inklusive Kinderprofilen mit Bildern, Kontaktdaten und automatischer Speicherung in einer MySQL-Datenbank.

---

## 📘 Inhaltsverzeichnis
1. [Über das Projekt](#-über-das-projekt)
2. [Funktionen](#-funktionen)
3. [Funktionsübersicht](#-kurzübersicht)
4. [Funktionen Detalliert](#-funktionendetalliert)
5. [Technologien](#-technologien)
6. [Installation & Setup](#️-installation--setup)
7. [REST-API-Endpunkte](#-rest-api-endpunkte)
8. [Projektstruktur](#️-projektstruktur)

---

## 💡 Über das Projekt

**Faith Points** ist ein Verwaltungssystem, das für Kinderaktivitäten in kirchlichen oder schulischen Gruppen entwickelt wurde.  
Jedes Kind hat zugeordnete Punkte für:
- **Hymnen**
- **Verhalten**
- **Anwesenheit (Gruppe G und U)**  
und kann zusätzlich mit Informationen wie **Klasse**, **Eltern** und **Telefonnummer** versehen werden.

Das Projekt besteht aus:
- einem **Backend** (Node.js + Express + MySQL),
- einem **Frontend** (HTML, CSS, JS),
- und einer **REST-API** zur Kommunikation zwischen beiden.

---

## ✨ Funktionen

✅ Kinderverwaltung – Kinderprofile hinzufügen, bearbeiten, löschen
✅ Punkteverwaltung – Punkte für Hymne, Verhalten und Anwesenheit speichern
✅ Kontaktinformationen – Eltern, Telefonnummer und Klasse speichern
✅ Bilder-Upload – Kinderbilder verwalten (z. B. Platzhalter oder eigenes Bild)
✅ Login-System – Zugangsschutz für Betreuer oder Lehrer
✅ REST-API – Kommunikation zwischen Frontend und Backend per JSON
✅ Automatische Speicherung – Alle Änderungen werden direkt in MySQL gespeichert


---

#### ✅ Kurzübersicht

| Bereich | Was du machen kannst |
|----------|----------------------|
| **Login** | Anmeldung mit E-Mail & Passwort |
| **+ / – Buttons** | Kinder hinzufügen oder löschen |
| **Doppelklick auf Namen** | Namen ändern |
| **Doppelklick auf Punkte** | Punktzahl direkt bearbeiten |
| **Sortierung** | Automatisch nach Gesamtpunkten |
| **Farben** | Zeigen inaktiv oder doppelt an |
| **Suchleiste** | Nach Kindernamen suchen |
| **Details-Seite** | Bilder, Klasse & Elterninfos bearbeiten |
| **Logout** | Sicher abmelden |

---

## ✨ Funktionen(Detalliert)

# 🚪 Anmeldung

Beim Start siehst du die **Login-Seite**.  
Gib dort die E-Mail-Adresse und das Passwort Das wir dir für die jewalliege Klasse geben werden.

Nach dem Klick auf **„Login“** gelangst du zur Hauptseite mit allen Kindern deiner Klasse.  
Wenn du später fertig bist, klick einfach auf **„Logout“**, um dich sicher abzumelden.

---

#### 👦 Kinderverwaltung

In der Hauptansicht findest du eine Tabelle mit allen Kindern deiner Gruppe.  
Hier kannst du **Kinder hinzufügen, bearbeiten oder löschen**.

### ➕ Kind hinzufügen
1. Klicke auf das **„+“ Symbol**.  
2. Gib den **Namen des Kindes** ein.  
3. Bestätige die Eingabe – das Kind erscheint in der Liste.  

> 💡 Wenn du einen Namen hinzufügst, der schon existiert, wird das Kind **gelb markiert**.  
> So erkennst du doppelte Einträge sofort.


### ➖ Kind löschen
1. Klicke auf das **„–“ Symbol**.  
2. Gib den **Namen des Kindes** ein, das du entfernen möchtest.  
3. Bestätige die Eingabe – das Kind wird aus der Liste gelöscht.


### ✏️ Namen ändern
- **Doppelklicke auf den Namen** eines Kindes, um ihn zu bearbeiten.  
- Gib den neuen Namen ein und bestätige mit Enter oder einem Klick außerhalb.  


#### 📊 Punkteverwaltung

Jedes Kind hat Punkte in mehreren Kategorien:
- 🎵 **Hymne**
- 💬 **Verhalten**
- 🙏 **Anwesenheit (G/U)**
- 🧮 **Gesamt**

### 🔼 Punkte ändern
- Klicke auf eine Punktespalte.  
- Es erscheinen kleine **Die jewalliegen Punkte, die man hinzufügen als auch entfernen kann**.   
- Die Gesamtpunkte werden automatisch neu berechnet.

### ✏️ Punkte direkt bearbeiten
- Mit **Doppelklick** auf eine Punktezahl kannst du den Wert direkt eintippen.  
- So kannst du schnell mehrere Punkte anpassen.


#### 🔢 Sortierung
FaithPoints sortiert die Tabelle **automatisch nach der Gesamtpunktzahl**.  
Das Kind mit den meisten Punkten steht immer ganz oben.


##### 🎨 Farben und Bedeutung

Die Farben der Kinderkästen zeigen, wie aktuell ihre Daten sind:

| Farbe | Bedeutung |
|--------|------------|
| 🟩 **Grün** | Kind wurde kürzlich geändert |
| 🟧 **Orange** | Seit **1 Monat** keine Änderung |
| 🟥 **Rot** | Seit **2 Monaten** keine Änderung |
| 🟨 **Gelb** | Name doppelt vorhanden |

> Wenn du mit der Maus über einen farbigen Kasten fährst, siehst du den Hinweis:  
> „Letzte Änderung am: [Datum]“

So erkennst du sofort, welche Kinder länger keine Punkte bekommen haben.

---

#### 🧩 Detailansicht eines Kindes

Wenn du auf **„Zu den Kinder-Details“** klickst, öffnet sich eine Seite mit **weiteren Informationen** über alle Kinder.  
Hier kannst du:

- 📸 **Ein Bild** des Kindes hochladen  
- 🗑️ **Ein Bild löschen**  
- 🏫 **Die Klasse** eintragen  
- 👨‍👩‍👧 **Elternnamen** und **Telefonnummer** speichern  

Alle Änderungen werden automatisch übernommen.


## 🖼️ Bilder hochladen oder löschen

### 🔼 Bild hinzufügen
1. Klicke auf **„Bild auswählen“**.  
2. Wähle das Foto des Kindes aus deinem Gerät.  
3. Nach dem Hochladen erscheint es direkt in der Tabelle.

### ❌ Bild löschen
1. Klicke auf das **Mülleimer-Symbol**.  
2. Das Foto wird entfernt und durch ein Standardbild ersetzt.



#### 🔍 Suchfunktion

Oberhalb der Tabelle befindet sich ein **Suchfeld**.  
Damit kannst du gezielt nach einem Kind suchen:

1. Tippe den **Namen** des Kindes ein.  
2. Das gesuchte Kind wird in der Liste **gelb markiert**.  

So findest du einzelne Kinder schnell – auch in großen Gruppen.

---

## 🧠 Technologien

| Bereich | Technologie |
|----------|-------------|
| **Backend** | Node.js, Express.js, MySQL2 |
| **Frontend** | HTML5, CSS3, JavaScript |
| **API-Format** | REST (JSON) |
| **Entwicklung** | Visual Studio Code |

---

## ⚙️ Installation & Setup

🔹 Voraussetzungen

Node.js (v16 oder höher)

MySQL-Datenbank

Git (optional)

🔹 Installation
# Projekt klonen
git clone https://github.com/deinBenutzername/Al7an_Punkte.git

# In das Backend-Verzeichnis wechseln
cd Al7an_Punkte/backend

# Abhängigkeiten installieren
npm install

# Datenbank einrichten

Die Datenbank wird automatisch erstellt,
wenn die Tabelle „kinder“ noch nicht vorhanden ist.
Oder
Öffne MySQL und erstelle diese Tabelle:

CREATE DATABASE Faith_Points;

Table: kinder

CREATE TABLE IF NOT EXISTS kinder (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
hymne INT,
verhalten INT,
anwesenheit_G INT,
anwesenheit_U INT,
gesamt INT,
klasse VARCHAR(50),
eltern VARCHAR(100),
telefon VARCHAR(20),
bildUrl VARCHAR(255),
user_id INT,
user_email VARCHAR(255),
last_updated_hymne TIMESTAMP DEFAULT NOW(),
last_updated_anwesenheit_g TIMESTAMP DEFAULT NOW(),
last_updated_anwesenheit_u TIMESTAMP DEFAULT NOW()
);


# Passe deine .env - Datei an:

DB_HOST= Datenbank URL
DB_USER=beshoy
DB_PASSWORD= von deiner Datenbank gegeben
DB_NAME=faith_points
DB_PORT=5432
PORT=3000


# Starte den Server:
Du musst im den Pfad zu backend führen: cd backend

node server.js

# Stoppe den Server:
netstat -ano | findstr :3000

taskkill /PID (Die Zahl die ganz rechts steht) /F     

# Öffne das Frontend über:

http://localhost:3000/frontend/main/index.html


# Info: Emails/Passwort stehen im server.js 
(Änderung/Erweiterungen möglich)

---

## 🔌 REST-API-Endpunkte

| Methode  | Endpoint          | Beschreibung                                           |
| -------- | ----------------- | ------------------------------------------------------ |
| `GET`    | `/api/kinder`     | Liste aller Kinder abrufen                             |
| `POST`   | `/api/kinder`     | Neues Kind hinzufügen                                  |
| `PUT`    | `/api/kinder/:id` | Kinderprofil aktualisieren                             |
| `DELETE` | `/api/kinder/:id` | Kind löschen                                           |
| `GET`    | `/api/punkte/:id` | Punktestand eines Kindes abrufen                       |
| `POST`   | `/api/punkte`     | Punkte für Hymne, Verhalten oder Anwesenheit speichern |

---

## 🗂️ Projektstruktur

Al7an_Punkte/
├── backend/
│   ├── db.js              # Verbindung zur MySQL-Datenbank
│   ├── server.js          # Express-Server mit API-Endpunkten
│   ├── package.json       # Node.js-Abhängigkeiten
│
└── frontend/
    ├── main/
    │   ├── index.html     # Hauptseite (Kinderübersicht)
    │   ├── style.css      # Styling der Hauptseite
    │   └── script.js      # Logik der Übersicht
    │
    ├── details/
    │   ├── details.html   # Detailansicht für ein Kind
    │   ├── details.css    # Styling der Detailseite
    │   └── details.js     # Bearbeitungslogik
    │
    ├── login/
    │   ├── login.html     # Login-Seite
    │   ├── login.css      # Styling der Login-Seite
    │   └── login.js       # Login-Validierung
    │
    ├── images/
    │   ├── logo.jpeg      # Logo der Anwendung
    │   └── platzhalter.png # Standard-Bild für Kinder
│
└── README.md
