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
  // LocalStorage 비교 후 로그인 후 메인 페이지 이동
  // 실패 시 alert or 회원가입
});
