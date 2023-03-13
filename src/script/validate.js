import { isNil } from 'lodash';

export function getUserInformation() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;
  
  if (!isNil(email, username, password, repassword)) return;

  // if (email || username || password || repassword) {
  //   return true;
  // }
}