// let age :number =25;
// let nama: string ="obon"

// let siswa :{
//     umur :number,
//     nama :string,
//     ispelajar :boolean,
//     alamat?:string,
// }
//  siswa = {
//     nama :"rafa",
//     umur :24,
//     ispelajar :false,
//     alamat :"jakarta",
// };

// siswa = {
//     nama :"ahmed",
//     umur :35,
//     ispelajar :true,
// };

// //interface untuk mendifinisikan tipe data object

// interface product {

//     id : number
//     name: string
//     price:number
//     note?:string
//     ispremium :boolean

// }

// const produck1 : product ={
//     id :1,
//     name : "HP",
//     price : 20000,
//     ispremium: false,
// }

// const produck2 : product ={
//     id :2,
//     name : "TV",
//     price : 40000,
//     ispremium: false,
//     note : "bagus",
// }

// //nested object

// interface ProductDetail {
//     manufacture: string;
//     year: number;
//   }

//   interface ProductItem {
//     id: number;
//     productName: string;
//     price: number;
//     Detail: ProductDetail;
//   }

//   const Product3: ProductItem = {
//     id: 1,
//     productName: "Mobil",
//     price: 17000000,
//     Detail: {
//       manufacture: "toyota",
//       year: 2020,
//     },
//   };

// console.log("pabrik", Product3.Detail.manufacture);
// console.log("pabrik", Product3.Detail);

// // squre backet

// let b :number[]
// b = [1,2,3,4,5]

// let c :string[]
// c = ["faris , idris, faisal"]

// let d : (string | number | boolean)[]
// d = ["1, haris",2, false]

// //object array

// let e : {nama: string; umur:number;}[] = {
//     nama: "akbar", umur:17

// }
// [];

// ///

// //functio

// function rumusLuaspp(panjang: number, lebar: number) :number {
//   const Luas = panjang * lebar;
//   return Luas;

// }

// console.log(penjumlahan());

// const persegi1 = rumusLuaspp(3,4);
// const persegi2 = rumusLuaspp(5,2);
// const persegi3 = rumusLuaspp(3,2);

// Function Declaration

// function volumebalok(panjang: number, lebar: number, tinggi: number) :number {
//   const balok = panjang * lebar * tinggi;
//   return balok;

// }

// const balok1 =volumebalok (3,4,5);
// const balok2 =volumebalok (5,2,3);
// const balok3 =volumebalok (3,2,1);

// console.log(volumebalok(3,4,5));

// function penjumlahan (a: number, b: number, c = 0) : number
// {
//   const hasil = a + b + c;
//   return hasil;
// }

// const hasil1 = penjumlahan(10,2,3);
// const hasil2 = penjumlahan(9,2,3);

// console.log(hasil1, hasil2);

// function pembagian({a, b ,c = 1}: {a: number, b: number, c?: number}) : number
// {
//   const hasil = (a / b )* c;
//   return hasil;
// }

// const kali1 = pembagian({a:10, b:2, c:3});
// const kali2 = pembagian({a:10, b:2});

// console.log("kali1",kali1);
// console.log("kali2",kali2);

// interface ResponsiveAPI {
//   msg : string,
//   status : string,

// }

// interface satuInterface {

//   a : number,
//   b : number,

// }

// function empat ({a , b} : satuInterface) : ResponsiveAPI {
//   return{
//    msg : "berhasil",
//    status : "oke",
//   }

// }

// const hasil4 = empat({a:10, b:2});

// console.log(hasil4);

// function checkNumberInArray(value: number, array: number[]): boolean {
//   return array.includes(value);
// }

// // Contoh penggunaan
// const array: number[] = [1, 2, 3, 4, 5, 6];
// const number: number = 3;

// if (checkNumberInArray(number, array)) {
//   console.log(`${number} ada di dalam array.`);
// } else {
//   console.log(`${number} tidak ada di dalam array.`);
// }

// class User {
//   id: number;
//   firstName: string;
//   lastName: string;

//   constructor(id: number, firstName: string, lastName: string) {
//     (this.id = id), (this.firstName = firstName), (this.lastName = lastName);
//   }

//   login(): boolean {
//     if(this.id === 1) {
//       return true;
//     }else {
//       return false;
//     }
//   }
//   register(): string {
//     return "Register Berhasil";
//   }
// }

// const idris = new User(1, "ihsan", "santana"); // instance
// const hardi = new User(2, "arif", "san"); // instance

// console.log("idris", idris.login());
// console.log("hardi", hardi.login());

// console.log("idris", idris.register());

class Profile {
  user: {
    id: number;
    firstName: string;
  }[];

  constructor() {
    this.user = [
      {
        id: 12345,
        firstName: "ihsan",
      },
      {
        id: 23456,
        firstName: "arif",
      },
      {
        id: 34567,
        firstName: "firdaus",
      },
      {
        id: 2345,
        firstName: "afwan",
      },
      {
        id: 3456,
        firstName: "jordi",
      },
    ];
  }

  login = () => {
    const filter = this.user.filter(({ id }) => id === 12345);
    console.log(filter);

    if (filter.length === 1) {
      return false;
    }

    console.log(filter.length);
    return true;
  };
}

// // Example usage
// const profile = new Profile();
// console.log(profile.login()); // Should print the filtered user array and true






// sub class

// merupkankan turunan dari clas baik properti maupun methodnya



