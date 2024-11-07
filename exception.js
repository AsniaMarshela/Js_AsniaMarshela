// ==========================
// 1. Exception Handling
// ==========================
// Fungsi yang melakukan pembagian dengan pengecekan error
function divideNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Both arguments must be numbers"); // throw untuk error tipe data
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero"); // throw untuk pembagian dengan 0
    }
    return a / b;
  }
  
  try {
    let result = divideNumbers(10, 2); // Ubah 2 menjadi 0 untuk menguji error
    console.log("Division Result:", result);
  } catch (error) {
    console.error("Error:", error.message); // Menampilkan pesan error
  }
  
  // ==========================
  // 2. Callback Function
  // ==========================
  // Callback adalah fungsi yang dipanggil setelah fungsi lain selesai dijalankan.
  // Fungsi `fetchDataWithCallback` menerima callback untuk mengolah data.
  function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = { message: "This data is from a callback!" };
      callback(data); // Memanggil callback dengan data
    }, 2000);
  }
  
  fetchDataWithCallback((data) => {
    console.log("Callback Data:", data.message); // Output: This data is from a callback!
  });
  
  // ==========================
  // 3. setTimeout
  // ==========================
  // Fungsi setTimeout menjalankan fungsi setelah waktu tertentu (dalam milidetik).
  setTimeout(() => {
    console.log("This message is displayed after 3 seconds");
  }, 3000);
  
  // ==========================
  // 4. setInterval
  // ==========================
  // Fungsi setInterval menjalankan fungsi setiap interval waktu tertentu.
  // Contoh untuk menampilkan timer setiap 1 detik
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log("Timer:", count, "seconds");
    if (count >= 5) {
      clearInterval(intervalId); // Hentikan interval setelah 5 detik
    }
  }, 1000);
  
  // ==========================
  // 5. Working with Dummy API (JSONPlaceholder)
  // ==========================
  // Mengambil data dari API dummy JSONPlaceholder menggunakan fetch.
  // Error handling ditangani menggunakan try-catch.
  async function fetchDummyAPI() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error("Failed to fetch data from API"); // throw untuk error fetch
      }
      const data = await response.json();
      console.log("Fetched Data from API:", data);
    } catch (error) {
      console.error("API Error:", error.message); // Menangani error API
    }
  }
  
  fetchDummyAPI();
  