/**
 * App Auth Token
 * @format
 */

// Set & get auth token
class AuthToken {
  static token;
  static set(token) {
    this.token = token;
  }
  static get() {
    return this.token;
  }
}

// Set & get password reset token
class PasswordResetToken {
  static resetToken;
  static set(resetToken) {
    this.resetToken = resetToken;
  }
  static get() {
    return this.resetToken;
  }
}

export { AuthToken, PasswordResetToken };
