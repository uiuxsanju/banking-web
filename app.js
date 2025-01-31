// JavaScript for functionality
let balance = 1000; // Initial balance
let transactionHistory = [];

function login() {
    const customerId = document.getElementById('customerId').value;
    const password = document.getElementById('password').value;

    // Dummy login check
    if (customerId === "0" && password === "0") {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
    } else {
        alert('Invalid Customer ID or Password');
    }
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (depositAmount > 0) {
        balance += depositAmount;
        transactionHistory.push(`Deposited: $${depositAmount}`);
        document.getElementById('balance').innerText = balance;
        updateTransactionHistory();
    } else {
        alert('Enter a valid deposit amount');
    }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        transactionHistory.push(`Withdrew: $${withdrawAmount}`);
        document.getElementById('balance').innerText = balance;
        updateTransactionHistory();
    } else {
        alert('Insufficient balance or invalid amount');
    }
}

function updateTransactionHistory() {
    const transactionList = document.getElementById('transaction-history');
    transactionList.innerHTML = '';
    transactionHistory.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = transaction;
        transactionList.appendChild(li);
    });
}



function resetPassword() {
  const customerId = document.getElementById('forgot-customerId').value;
  const email = document.getElementById('forgot-email').value;

  if (customerId && email) {
      alert(`A password reset link has been sent to ${email}`);
      window.location.href = "index.html"; // Redirect back to login
  } else {
      alert("Please enter valid Customer ID and Email.");
  }
}
