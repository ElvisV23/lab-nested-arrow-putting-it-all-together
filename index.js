function createLoginTracker(userInfo) {
  
  let attemptCount = 0;

  
  return (passwordAttempt) => {
    
    attemptCount++;

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    }

    
    if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }


    return "Account locked due to too many failed login attempts";
  };
}

const user = { username: "testUser", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrongpassword")); // Attempt 1
console.log(login("anotherwrong")); // Attempt 2
console.log(login("password123")); // Attempt 3
console.log(login("password123")); // Account locked due to too many failed login attempts



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};