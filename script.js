//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");

  output.textContent = ""; // Clear previous output

  const number = Number(input);
  if (isNaN(number)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  // Step 1: Initial Promise (after 2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })

    // Step 2: Multiply by 2 (after 2 seconds)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })

    // Step 3: Subtract 3 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Step 4: Divide by 2 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Step 5: Add 10 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
});
