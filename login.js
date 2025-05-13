// 암호 보여주기
const showHide = document.querySelector(".show_hide");
const eyeIcon = showHide.querySelector("i");
const passwordType = document.querySelector(".password_field input");

showHide.addEventListener("click", () => {
  const isPasswordHidden = passwordType.type === "password";
  // 비밀번호 필드 타입 변경
  passwordType.type = isPasswordHidden ? "text" : "password";
  // 아이콘 변경
  eyeIcon.classList.toggle("fa-eye-slash");
  eyeIcon.classList.toggle("fa-eye");
});

// 이메일 필드 검증
const emailField = document.querySelector(".email_field input");
const emailError = document.querySelector("#email_field_error");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailField.addEventListener("input", () => {
  const email = emailField.value.trim();
  if (email === "") {
    emailError.textContent = "이메일을 입력하십시오.";
    emailError.style.display = "block";
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "올바른 이메일 주소를 입력하십시오.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

// 암호 필드 검증
const passwordField = document.querySelector(".password_field input");
const passwordError = document.querySelector("#password_field_error");

passwordField.addEventListener("input", () => {
  const password = passwordField.value.trim();
  if (password === "") {
    passwordError.textContent = "암호를 입력하십시오.";
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

// 로그인
const login = document.querySelector(".summit");
login.addEventListener("click", () => {
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  if (email === "" || password === "") {
    alert("이메일과 암호를 모두 입력하십시오.");
    return;
  }

  // 로컬스토리지에서 사용자 데이터 가져오기
  const userData = localStorage.getItem("users");
  if (userData) {
    const users = JSON.parse(userData) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // 로그인 성공
      window.location.href = "./main.html";
    } else {
      // 로그인 실패
      alert("이메일 또는 암호가 올바르지 않습니다");
    }
  } else {
    alert("이메일 또는 암호가 올바르지 않습니다");
    // alert("등록된 계정이 없습니다. 먼저 회원가입을 해주세요.");
  }
});
