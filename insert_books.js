
// Import MongoDB client
const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';


const dbName = 'plp_bookstore';
const collectionName = 'books';


const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
    {
    title: "Beneath Nairobi Skies",
    author: "Wanjiru Mwangi",
    genre: "Drama",
    published_year: 2021,
    price: 13.99,
    in_stock: true,
    pages: 290,
    publisher: "Nairobi Press"
  },
  {
    title: "Habits of a Kenyan Achiever",
    author: "Otieno Okoth",
    genre: "Self-help",
    published_year: 2020,
    price: 14.50,
    in_stock: true,
    pages: 240,
    publisher: "Upeo Publishers"
  },
  {
    title: "Freedom Fighters",
    author: "Muthoni Wacera",
    genre: "History",
    published_year: 2005,
    price: 10.00,
    in_stock: false,
    pages: 320,
    publisher: "Safari Books"
  },
  {
    title: "Lessons from the Village",
    author: "Kiprono Chebet",
    genre: "Memoir",
    published_year: 2018,
    price: 12.00,
    in_stock: true,
    pages: 260,
    publisher: "Rift Valley Publishers"
  },
  {
    title: "The River Between",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Fiction",
    published_year: 1965,
    price: 9.99,
    in_stock: true,
    pages: 212,
    publisher: "East African Publishing"
  },
  {
    title: "Becoming Kenyan",
    author: "Achieng Atieno",
    genre: "Biography",
    published_year: 2019,
    price: 15.99,
    in_stock: false,
    pages: 360,
    publisher: "Nia House"
  },
  {
    title: "Think Like a Nairobian",
    author: "Brian Oloo",
    genre: "Self-help",
    published_year: 2017,
    price: 11.50,
    in_stock: true,
    pages: 190,
    publisher: "Capital Books"
  },
  {
    title: "Jua Kali Chronicles",
    author: "Kamau Maina",
    genre: "Fiction",
    published_year: 2010,
    price: 7.99,
    in_stock: true,
    pages: 200,
    publisher: "Mashambani Press"
  },
  {
    title: "Maisha Mtaani",
    author: "Fatuma Yusuf",
    genre: "Classic",
    published_year: 2008,
    price: 8.45,
    in_stock: false,
    pages: 185,
    publisher: "Pamoja Publishers"
  },
  {
    title: "Nyayo Era",
    author: "Mutiso Muli",
    genre: "Politics",
    published_year: 1995,
    price: 11.00,
    in_stock: true,
    pages: 410,
    publisher: "Uhuru Books"
  },
  {
    title: "Hug the Porcupine",
    author: "Victor Kibisu",
    genre: "Fiction",
    published_year: 2010,
    price: 12.45,
    in_stock: true,
    pages: 90,
    publisher: "Moran Publishers"
  }
];

//insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    
    await client.connect();
    console.log('Connected to MongoDB server');

    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

insertBooks().catch(console.error);

//  1. Find all books:
    db.books.find()
 
//  2. Find books by a specific author:
   db.books.find({ author: "George Orwell" })

//  3. Find books published after 1950:
   db.books.find({ published_year: { $gt: 1950 } })
 
  // 4. Find books in a specific genre:
    db.books.find({ genre: "Fiction" })
 
  // 5. Find in-stock books:
   db.books.find({ in_stock: true })
 