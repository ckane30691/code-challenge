# Hiretual

Since the very inception of Hiretual we teamed up with recruiters like you to make recruiting better. We love our community of recruiters. We are passionate about technology and innovation and when recruiters meet scientists, recruiting has never been so easy.

[Live Site](http://hiretual.herokuapp.com/#/)

## Sample State Shape
```
{
  entities: {
    // This is where feature state is held
  },
  errors: {
    session: ["Incorrect username/password combination"],
  },
  session: {
    currentUser: {
      id: 11,
      username: "ckane",
      fname: "Cory",
      lname: "Kane"
    }
  }
}

```

## Frontend Routes
* `/` - Splash page with new user sign up form
* `/login` - Login Page
* `/signup` - Signup Page
* `/dashboard` - Dashboard Page

## API Endpoints
### users
* POST /api/users - Signs a new user up

### session
* POST /api/session - Logs a user in
* DELETE /api/session - Logs a user out

## Spotted a bug?
If you find a bug, please open an issue [here](https://github.com/ckane30691/code-challenge/issues).

## Technologies Used:
* Ruby on Rails - Server-side MVC Framework
* PotsgreSQL - Database management system
* React - JS library for building user interfaces
* Ajax - Part of jQuery library for making async requests
* Redux - Frontend architecture for giving apps a predictable state
* Webpack - Build tool for keeping JS files modular
* Babel - Transpiler that allows fancy things like JSX and lets webpack know how to parse the syntax ie. es2015 vs es2016 etc.