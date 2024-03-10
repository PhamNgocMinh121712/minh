document.getElementById("btn-signUp").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn form gửi thông tin đến server
  
    // Lấy thông tin từ các trường input
    const username = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Kiểm tra xem đã tồn tại thông tin tài khoản chưa
    if (!localStorage.getItem("accounts")) { //
      localStorage.setItem("accounts", JSON.stringify([]));
    }
  
    // Lấy danh sách tài khoản từ localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts"));
  
    // Kiểm tra xem tài khoản đã tồn tại hay chưa
    const existingAccount = accounts.find((account) => account.username === username);
    if (existingAccount) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    // Thêm tài khoản mới vào danh sách
    accounts.push({ username, password });
  
    // Lưu lại danh sách tài khoản đã cập nhật vào localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));
  
    // Thông báo đăng ký thành công và chuyển hướng đến trang đăng nhập (hoặc trang khác)
    alert("Registration successful!");
  
    window.location.href = "./login.html"; // Chuyển hướng đến trang đăng nhập
  });
  