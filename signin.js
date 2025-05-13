// 이름 정규표현식
const firstNameField = document.querySelector(".first_name_field input");
const firstNameError = document.querySelector("#first_name_error");
const nameRegex = /^[가-힣a-zA-Z]{1,20}$/;

firstNameField.addEventListener("input", () => {
  const firstName = firstNameField.value.trim();
  if (firstName === "") {
    firstNameError.textContent = "이름을 입력하십시오.";
    firstNameError.style.display = "block";
  } else if (!nameRegex.test(firstName)) {
    firstNameError.textContent =
      "이름은 1-20자, 한글 또는 영문만 포함해야 합니다.";
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }
});

// 성 정규표현식
const lastNameField = document.querySelector(".last_name_field input");
const lastNameError = document.querySelector("#last_name_error");

lastNameField.addEventListener("input", () => {
  const lastName = lastNameField.value.trim();
  if (lastName === "") {
    lastNameError.textContent = "성을 입력하십시오.";
    lastNameError.style.display = "block";
  } else if (!nameRegex.test(lastName)) {
    lastNameError.textContent =
      "성은 1-20자, 한글 또는 영문만 포함해야 합니다.";
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
});

// 생년월일 정규표현식 (DD / MM / YYYY)
const birthField = document.querySelector(".birth_field input");
const birthError = document.querySelector("#birth_field_error");
const birthRegex =
  /^(0[1-9]|[12][0-9]|3[01])\s*\/\s*(0[1-9]|1[0-2])\s*\/\s*\d{4}$/;

birthField.addEventListener("input", () => {
  const birthDate = birthField.value.trim();
  if (birthDate === "") {
    birthError.textContent = "생년월일을 입력하십시오.";
    birthError.style.display = "block";
  } else if (!birthRegex.test(birthDate)) {
    birthError.textContent = "유효한 생년월일을 입력하십시오. (DD / MM / YYYY)";
    birthError.style.display = "block";
  } else {
    birthError.style.display = "none";
  }
});

// 이메일 정규표현식
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

// 암호 정규표현식 (8-20자, 영문, 숫자, 특수문자 포함)
const passwordField = document.querySelector(".password_field input");
const passwordError = document.querySelector("#password_field_error");
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]|\\:;"'<>,.?/]).{8,20}$/;

passwordField.addEventListener("input", () => {
  const password = passwordField.value.trim();
  if (password === "") {
    passwordError.textContent = "암호를 입력하십시오.";
    passwordError.style.display = "block";
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "암호는 8-20자, 영문, 숫자, 특수문자를 포함해야 합니다.";
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

// 암호 확인
const passwordCheckField = document.querySelector(
  ".password_check_field input"
);
const passwordCheckError = document.querySelector(
  "#password_check_field_error"
);

passwordCheckField.addEventListener("input", () => {
  const password = passwordField.value.trim();
  const passwordCheck = passwordCheckField.value.trim();

  if (passwordCheck === "") {
    passwordCheckError.textContent = "암호를 입력하십시오.";
    passwordCheckError.style.display = "block";
  } else if (password !== passwordCheck) {
    passwordCheckError.textContent = "암호가 일치하지 않습니다.";
    passwordCheckError.style.display = "block";
  } else {
    passwordCheckError.style.display = "none";
  }
});

const checkboxField = document.querySelector(".checkbox");

// 만들기
const summit = document.querySelector(".summit");

summit.addEventListener("click", () => {
  const firstName = firstNameField.value.trim();
  const lastName = lastNameField.value.trim();
  const birth = birthField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  const isMarketing = checkboxField.checked;

  if (
    firstName === "" ||
    lastName === "" ||
    birth === "" ||
    email === "" ||
    password === ""
  ) {
    alert("Logi ID를 생성하려면 모든 필드를 작성하십시오.");
    return;
  }

  // 기존 회원 목록 불러오기
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // 새로운 회원 정보 생성
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    birth: birth,
    email: email,
    password: password,
    isMarketing: isMarketing,
  };

  // 새로운 회원 추가
  existingUsers.push(newUser);

  // 배열로 저장
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // 알림
  alert("회원가입을 완료하였습니다.");

  // 로그인 페이지 이동
  window.location.href = "./index.html";
});
