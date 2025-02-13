/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}

/*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean = false
  ) {}
}

function getStudentStatus(student: Student): string {
  student.passed = student.name === "Sebastian" && student.handedInOnTime;
  return student.passed ? "VG" : "IG";
}

/*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */

class TemperatureReding {
  constructor(
    public location: string,
    public date: Date,
    public temprature: number
  ) {}
}

function averageWeeklyTemperature(heighestTempratures: TemperatureReding[]) {
  let result = 0;
  const oneWeekAgo = Date.now() - 604800000;

  for (let i = 0; i < heighestTempratures.length; i++) {
    if (heighestTempratures[i].location === "Stockholm") {
      if (heighestTempratures[i].date.getTime() > oneWeekAgo) {
        result += heighestTempratures[i].temprature;
      }
    }
  }

  return result / 7;
}

/*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */

class Product {
  constructor(
    public name: string,
    public price: string,
    public image: string,
    public parent: HTMLElement
  ) {}
}

function showProduct(Product: Product, parent: HTMLElement) {
  const container = document.createElement("div");
  container.innerHTML = `
    <h4>${Product.name}</h4>
    <img src="${Product.image}" alt="${Product.name}">
    <p>${Product.price}</p>
  `;
  parent.appendChild(container);
}

/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */

function presentStudents(students: Student[]) {
  students.forEach((student) => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = student.handedInOnTime;

    container.appendChild(checkbox);

    const listId = student.handedInOnTime ? "passedstudents" : "failedstudents";
    document.querySelector(`ul#${listId}`)?.appendChild(container);
  });
}

/*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
function concatenateStrings() {
  return ["Lorem", "ipsum", "dolor", "sit", "amet"].join("");
}

/* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
class User {
  name: string;
  birthday: Date;
  email: string;
  password: string;

  constructor(name: string, birthday: Date, email: string, password: string) {
    this.name = name;
    this.birthday = birthday;
    this.email = email;
    this.password = password;
  }

  getAge(): number {
    const age = new Date().getFullYear() - this.birthday.getFullYear();
    return age;
  }

  createUser(): string {
    const userAge = this.getAge();

    if (userAge < 20) {
      return "Du är under 20 år";
    }

    console.log(`Användare skapad: ${this.name}, Ålder: ${userAge}`);
    return "Användare skapad!";
  }
}

const newUser = new User(
  "John Doe",
  new Date(2005, 5, 10),
  "john.doe@example.com",
  "password123"
);

console.log(newUser.createUser());
