// ==========================
// 1. Data Types: String
// ==========================
let myName = "Asnia Marshela";
console.log("Data Type - String:", myName); // Output: Data Type - String: Asnia Marshela

// ==========================
// 2. Data Types: Boolean
// ==========================
let isStudent = true;
console.log("Data Type - Boolean:", isStudent); // Output: Data Type - Boolean: true

// ==========================
// 3. Data Types: Number
// ==========================
let age = 21;
console.log("Data Type - Number:", age); // Output: Data Type - Number: 21

// ==========================
// 4. Data Types: Array
// ==========================
// Array menyimpan kumpulan item dalam satu variabel.
let favoriteColors = ["Black", "White", "Gray"];
console.log("Data Type - Array:", favoriteColors); // Output: Data Type - Array: ["Black", "White", "Gray"]

// ==========================
// 5. Data Types: Object
// ==========================
// Object menyimpan data dalam pasangan key-value.
let profile = {
  name: "Asnia Marshela",
  occupation: "Student",
  skills: ["UI/UX Design", "HTML", "CSS", "JavaScript"]
};
console.log("Data Type - Object:", profile);
// Output: Data Type - Object: { name: "Asnia Marshela", occupation: "Student", skills: ["UI/UX Design", "HTML", "CSS", "JavaScript"] }

// ==========================
// 6. Console Log
// ==========================
// console.log adalah metode untuk menampilkan data ke konsol.
console.log("Console Log Example:");
console.log("Name:", myName);
console.log("Is Student:", isStudent);
console.log("Age:", age);
console.log("Favorite Colors:", favoriteColors);
console.log("Profile:", profile);

// ==========================
// 7. Logical Operator
// ==========================
// Operator Logika seperti AND (&&), OR (||), dan NOT (!) digunakan untuk ekspresi logika.
let hasSkills = profile.skills.includes("JavaScript") && profile.skills.includes("HTML");
console.log("Logical Operator - hasSkills (AND):", hasSkills); // true jika memiliki "JavaScript" dan "HTML"

let likesDesign = profile.skills.includes("UI/UX Design") || profile.skills.includes("Graphic Design");
console.log("Logical Operator - likesDesign (OR):", likesDesign); // true jika memiliki salah satu keterampilan desain

let isNotStudent = !isStudent;
console.log("Logical Operator - isNotStudent (NOT):", isNotStudent); // Output: false (kebalikan dari isStudent)

// ==========================
// 8. Equality Comparison
// ==========================
// Perbandingan menggunakan == (loose equality) dan === (strict equality).
console.log("Equality Comparison - age == 21:", age == 21); // true (loose equality)
console.log("Equality Comparison - age === 21:", age === 21); // true (strict equality, sama tipe dan nilai)
console.log("Equality Comparison - age === '21':", age === '21'); // false (strict equality, tipe berbeda)
console.log("Equality Comparison - isStudent == true:", isStudent == true); // true (loose equality)
console.log("Equality Comparison - isStudent === true:", isStudent === true); // true (strict equality)

// ==========================
// 9. Function to Display Data Using Alert
// ==========================
function showData() {
  alert("Data Type - String: " + myName);
  alert("Data Type - Boolean: " + isStudent);
  alert("Data Type - Number: " + age);
  alert("Data Type - Array: " + favoriteColors.join(", "));
  alert("Data Type - Object: " + JSON.stringify(profile, null, 2));
}

// Memanggil fungsi showData untuk menampilkan data menggunakan alert
showData();
