//soal latihan nomor 1

function minimal(a: number, b: number): number {
  return a <= b ? a : b;
}

// Contoh penggunaan:
console.log(minimal(1, 4)); // output: yang pertama
console.log(minimal(3, 2)); // Output: yang kedua
console.log(minimal(3, 3)); // Output: yang ketiga

//soal latihan nomor 2

function power(a: number, b: number): number {
  return Math.pow(a, b);
}

console.log(power(7, 3)); // 343
console.log(power(3, 3)); // output: 27
console.log(power(4, 0.5)); // output: 2

//soal latihan nomor 3

function penjumlahanBilangan(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

//latihan nomor 4

class Eagle1 {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// Contoh penggunaan:
const lion = new Eagle1("Lion", 5, true);
console.log(lion.name);      // Outputnya: Lion
console.log(lion.age);       // Outputnya: 5
console.log(lion.isMammal);  // Outputnya: true

const snake = new Eagle1("Snake", 2, false);
console.log(snake.name);     // Output: Snake
console.log(snake.age);      // Output: 2
console.log(snake.isMammal); // Output: false
console.log(lion.isMammal);  // Output: true



class Eagle2 {
  name: string;
  age: number;
  isMammal: boolean;

  constructor(name: string, age: number, isMammal: boolean) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
  }
}

class Rabbit extends Eagle2 {
  constructor(name: string, age: number) {
      super(name, age, true); // isMammal selalu bernilai true
  }

  eat(): string {
      return `${this.name} yang berumur ${this.age} lagi makan!`;
  }
}

// Contoh penggunaan:
const rabbit = new Rabbit("Bunny", 3);
console.log(rabbit.name);       // Output: Bunny
console.log(rabbit.age);        // Output: 3
console.log(rabbit.isMammal);   // Output: true
console.log(rabbit.eat());      // Output: Bunny yang berumur 3 sedang makan!


//nomor 6

class Animal {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Eagle extends Animal {
    speed: number;

    constructor(name: string, age: number) {
        super(name, age, false); // isMammal selalu bernilai false untuk Eagle
        this.speed = 220; // speed selalu bernilai 220
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string {
        return `${this.name} berlari dengan kecepatan ${speed} km`;
    }
}

// Contoh penggunaan:
const eagle = new Eagle("Garuda", 5);
console.log(eagle.name);        
console.log(eagle.age);         
console.log(eagle.isMammal);    
console.log(eagle.speed);       // Output: 220
console.log(eagle.fly());       // Output: Garuda yang berumur 5 sedang terbang!



// nomor 7

class Eagle3 {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Animal2 extends Animal {
    speed: number;

    constructor(name: string, age: number) {
        super(name, age, false); // isMammal selalu bernilai false untuk Eagle
        this.speed = 220; // speed selalu bernilai 220
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string {
        return `${this.name} berlari dengan kecepatan ${speed} km`;
    }
}

// Contoh penggunaan:
const E = new Eagle("Garuda", 5);
console.log(eagle.name);        // Output: Garuda
console.log(eagle.age);         // Output: 5
console.log(eagle.isMammal);    // Output: false
console.log(eagle.speed);       // Output: 220
console.log(eagle.fly());       // Output: Garuda yang berumur 5 sedang terbang!



//nomor 8

class Animal1 {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit1 extends Animal {
    constructor(name: string, age: number) {
        super(name, age, true); // isMammal selalu bernilai true untuk Rabbit
    }

    eat(): string {
        return `${this.name} yang berumur ${this.age} sedang makan!`;
    }
}

// Membuat instance dari class Rabbit
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.name);    // Output: Labi
console.log(myRabbit.age);     // Output: 2
console.log(myRabbit.isMammal);// Output: true
console.log(myRabbit.eat());   // Output: Labi yang berumur 2 sedang makan!



//nomor 9

class Animal4 {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Eagle4 extends Animal {
    speed: number;

    constructor(name: string, age: number) {
        super(name, age, false); 
        this.speed = 220;
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string {
        return `${this.name} berlari dengan kecepatan ${speed} km`;
    }
}

// Membuat instance dari class Eagle
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.name);    
console.log(myEagle.speed);   
console.log(myEagle.age);     
console.log(myEagle.isMammal);
console.log(myEagle.fly());   // Output: Elo yang berumur 4 sedang terbang!



