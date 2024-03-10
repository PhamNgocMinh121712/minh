document.getElementById("btn-Login").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn form gửi thông tin đến server
  
    // Lấy thông tin từ các trường input
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Lấy danh sách tài khoản từ localStorage (nếu chưa tồn tại, tạo một danh sách tài khoản mặc định)
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  
    // Tìm tài khoản với email và mật khẩu phù hợp
    const loggedInAccount = accounts.find(
      (account) => account.username === name && account.password === password
    );
  
    if (loggedInAccount) {
      alert("Login successful!");
      // Thực hiện chuyển hướng sau khi đăng  thành công (nếu cần)
      window.location.href = "../index.html"; // Chuyển hướng về trang web chính 
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  
  
  
  
  
  