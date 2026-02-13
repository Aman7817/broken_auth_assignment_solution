# Broken Authentication Assignment — Solution

## Overview

This repository contains my solution to the **Broken Authentication Backend Assignment**. The project involved debugging an intentionally broken Node.js + Express authentication API and restoring a complete authentication flow.

The goal was to fix login, OTP verification, session handling, JWT token generation, and protected route access.

---

## Tech Stack

* Node.js
* Express.js
* JWT (jsonwebtoken)
* Cookie-based session handling

---

## Tasks Completed

### 1. Login Endpoint Fix

* Generated login session ID.
* Implemented OTP generation and console logging.
* Stored session data with expiry.

### 2. OTP Verification Fix

* Correct OTP validation logic.
* Implemented session cookie (`session_token`).
* Fixed datatype mismatch issues.

### 3. Token Generation Fix

* Properly read session from cookies.
* Generated JWT access token.
* Added environment-based secret handling.

### 4. Protected Route Fix

* Implemented JWT verification middleware.
* Correct Authorization header parsing.
* Enabled access to protected API after valid authentication.

---

## Authentication Flow

1. Login → Receive loginSessionId and OTP (console log)
2. Verify OTP → Session cookie generated
3. Token API → JWT access token issued
4. Protected Route → Access granted using JWT

---

## Learning Outcomes

* Debugging backend authentication flows
* Session vs JWT token understanding
* Middleware debugging in Express
* API testing using curl/Postman
* Environment variable handling

---

## Notes

* This was an assigned debugging task (not a from-scratch build).
* Focus was on identifying and fixing backend issues.

---

## Author

Aman Singh
Backend Developer (Learning Phase)

GitHub: [https://github.com/Aman7817](https://github.com/Aman7817)
