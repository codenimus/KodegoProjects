
    const firebaseConfig = {
        apiKey: "AIzaSyB3xv3DxTtRP-rT53TkuAfFgT74fZyx-RM",
        authDomain: "kodego-lucab.firebaseapp.com",
        databaseURL: "https://kodego-lucab-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "kodego-lucab",
        storageBucket: "kodego-lucab.appspot.com",
        messagingSenderId: "690654487511",
        appId: "1:690654487511:web:3b989c1ee9db4fa2196192",
        measurementId: "G-03V5DZTQFB"
      };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()



  ////////////  MY FUNCTION USING PROMISED ---------- ///////////////
  function register () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    fname = document.getElementById('fname').value
    lname = document.getElementById('lname').value
    mobile = document.getElementById('mobile').value
    address = document.getElementById('address').value
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
    
    }
    if (validate_field(fname) == false || validate_field(lname) == false || validate_field(mobile) == false) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
   
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
   
      var user = auth.currentUser
      var database_ref = database.ref()
  

      var date = new Date();
      var current_time = date.getHours()+":"+date.getMinutes();
      var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
      var user_data = {
        email : email,
        fname : fname,
        lname : lname,
        mobile: mobile,
        address : address,
        password: password,
        last_login : current_date + ' ' + '/' + ' ' + current_time

      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
      window.location.href = 'login.html';
     // alert('User Created!!')
    })
        .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
  
        alert(error_message)
    })
  }
  
//////////////////// LOGIN FUNTION ////////////////////////
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  

    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Check Email adn Password is correct')
      return

    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
  
      // Create User data
      var date = new Date();
      var current_time = date.getHours()+":"+date.getMinutes();
      var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        var user_data = {
      last_login : current_date + ' ' + '/' + ' ' + current_time
    
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
      email = document.getElementById('email').value
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('signInWithEmailAndPassword', JSON.stringify(auth));
      window.location ="logged.html";
    
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }

function deleteItems() { 
        sessionStorage.clear();
        localStorage.clear();
    
}
    
