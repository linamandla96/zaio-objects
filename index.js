class Student {
    constructor(id, name, age, subjects) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.subjects = subjects;
    }
  
    addSubject(subject) {
      this.subjects = [...this.subjects, subject];
      console.log(this.subjects);
    }
  }
  
  const akhil = new Student(1, "akhil", 23, ["Maths"]);
  const asif = new Student(2, "asif", 23, ["Maths", "Chem"]);
  akhil.addSubject("Chemistry");
  console.log([akhil, asif]);
  
// function student(id, name, age, subjects) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.subjects = subjects;
//   }
  
//   const akhil = new student(1, "akhil", 23, ["Maths"]);
//   const asif = new student(2, "asif", 23, ["Maths", "Chem"]);
//   console.log(akhil, asif);
  

// netflix movie

class Movie {
    constructor(id, title, starring = [], genres = []) {
      this._id = id;
      this.title = title;
      this.starring = starring;
      this.genres = genres;
    }
  
    addGenre(...genre) {
      this.genres = [...this.genres, ...genre];
    }
  
    addStars(...stars) {
      this.starring = [...this.starring, ...stars];
    }
  }
  
  const harryPotter = new Movie(1, "Harry Potter 1");
  harryPotter.addGenre("Drama", "Action", "Mystery");
  harryPotter.addStars("Daniel Radcliffe", "Emma Watson");
  console.log(harryPotter);

// inheritance
class Person {
    constructor(id, name, age, email) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.email = email;
    }
    get id() {
        return this._id;
      }
      set id(id) {
        this._id = id;
      }
    showDetails() {
      console.log(`
    ID: ${this.id}
    Name: ${this.name},
    Age: ${this.age}
    Email: ${this.email}
    `);
    }
  }

  class Student extends Person {
    constructor(id, name, age, email, subjects) {
      super(id, name, age, email);
      this.subjects = subjects;
    }
  
    addSubject(subject) {
      this.subjects = [...this.subjects, subject];
      console.log(this.subjects);
    }
  }

  class Teacher extends Person {
    constructor(id, name, age, email, subjects) {
      super(id, name, age, email);
      this.subjects = subjects;
    }
  
    addSubject(subject) {
      this.subjects = [...this.subjects, subject];
      console.log(this.subjects);
    }
  }
  
  class Parent extends Person {
    constructor(id, name, age, email) {
      super(id, name, age, email);
    }
  }
  
  const nameStudent = new Student(1, "akhil", 23, ["Maths"]);
     nameStudent.showDetails();
   
nameStudent.id = 12345;
nameStudent.showDetails();
     
// blind

const isAuthenticated = true;
let user = {
  wishlist: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.addToWishlist = this.addToWishlist.bind(this);
  }

  handleAddToWishlist() {
    if (isAuthenticated) {
      setTimeout(this.addToWishlist, 1000);
    } else {
      console.log("Please sign in to add items to wishlist");
    }
  }

  addToWishlist() {
    user.wishlist.push(this.name);
    console.log(`${this.name} has been added to the wishlist`);
    console.log(user.wishlist);
}
}

const product1 = new Product("bat", 20);
console.log(product1.handleAddToWishlist());


// creating note
class Note {
    constructor(title, text) {
      this.title = title;
      this.text = text;
    }
  }
  
  class App {
    constructor() {
      this.notes = [];
    }
  
    addNote({ title, text }) {
      const id =2;
      const newNote = new Note(title, text);
      this.notes = [...this.notes, newNote];
    }
    editNote(id, { title, text }) {
        this.notes.map((note) => {
          if (note.id == id) {
            note.title = title;
            note.text = text;
          }
        });
      }
      deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id != id);
      }

      displayNotes() {
        this.notes.map((note) =>
          console.log(`
        ID: ${note.id}
        Title: ${note.title}
        Text: ${note.text}
        `)
        );
      }
}
  
  
  const note1 = {
    title: "Test note",
    text: "text"
  };
  const updatedNote = {
    title: " updated Test note",
    text: "updated text"
  };
  const app = new App();
  app.addNote(0, note1);
  app.addNote(1, note1);
  app.addNote(2, note1);
  app.addNote(3, note1);
console.log("After editing", app.notes);
app.editNote(2, updatedNote);
console.log("after editing", app.notes);

setTimeout(() => {
    app.editNote(2, updatedNote);
    console.log("after editing", app.notes);
  }, 1000);
  
  setTimeout(() => {
    app.deleteNote(2);
    console.log("after deleting", app.notes);
  }, 1000);

  app.displayNotes()