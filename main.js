const loginForm = document.querySelector(".login-form");

// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
// หรือ
// ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password
// กับ array แบบที่เคยทำตอนโจทย์ javascript แล้วแจ้ง login successful

const validateInput = (inputObj) => {
  console.log(inputObj);
  let username = inputObj.username;
  let password = inputObj.password;
  let role = inputObj.role;
  

  // console.log(username, password, role, login);

  if (username.includes(" ") || username.trim() ==="") {
    loginForm.username.style.borderColor = "red";
    return;
  }

  if (password.includes(" ") || password.trim() ==="") {
    loginForm.password.style.borderColor = "red";
    return;
  }

  if (role.trim() === "") {
    loginForm.role.style.borderColor = "red";
    return;
  }
  alert('Username: ' + username + '\nPassword: ' + password + '\nRole: ' + role + '\n' + '\nกด OK ไปที่เว็บไซต์ : example.com');
  setTimeout(() => {
    window.location.href = "https://www.example.com";
  } , 1000);

};

const hdlLogin = (e) => {
  e.preventDefault();
  console.log(loginForm.elements);
  let allInput = loginForm.elements;
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
