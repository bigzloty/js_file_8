// Function to simulate delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Task 01: Iterating with Async/Await
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await delay(1000);  // Adding a delay of 1 second
      console.log(value);
    }
  }
  
  // Task 03: Awaiting a Call with Error Handling
  async function fetchData() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;  // Simulate a success or failure
      setTimeout(() => {
        if (success) {
          resolve({ data: "Fetched data" });
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 1000);
    });
  }
  
  async function awaitCall() {
    try {
      const response = await fetchData();
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  // Task 05: Awaiting Parallel Calls
  async function fetchUrl(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, Math.random() * 2000);  // Simulate varying response times
    });
  }  
  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetchUrl(url)));
      console.log("Responses:", responses);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  }
  
  // Testing the functions
  console.log("Task 01: Iterating with Async/Await");
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  
  console.log("Task 03: Awaiting a Call with Error Handling");
  awaitCall();
  
  console.log("Task 05: Awaiting Parallel Calls");
  parallelCalls(["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"]);