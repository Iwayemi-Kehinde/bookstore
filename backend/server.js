import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

function Logger(req, res, next) {
  console.log(req.method, req.originalUrl);
  next();
}

//middlewares2
app.use(Logger);
app.use(cors());
app.use(express.json());

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

async function run() {
  try {
    //connect the client to the server
    await client.connect();

    //create a collection of document
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    //get all books from database

    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    //update a book data : patch or update methods

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };
      //update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a book

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    //find by category

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    //get a single book

    app.get("/book/:id", async (req, res) => {
      const { id } = req.params;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result)
    });

    //send a ping to confirm sucessful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Mongodb connected");
  } finally {
  }
}

run();

app.listen(PORT, function () {
  console.log("App listening on port " + PORT);
});
