class Form {
    constructor(
        public email: string,
        public password: string,
        public password_confirmation: string,
        public phone_number: string,
        public fname: string,
        public lname: string,
        public age: number,
        public birth_month: string,
        public birth_day: number,
        public birth_year: number) {}
    // TODO: You may fill in functions in the class.
  
    public checkemail = function() {
        var emailregex = /^[!#$%&^*()\-_=+\\\|\[\]{};:\'\"`~,.<>/?\w]+@[!#$%&^*()\-_=+\\\|\[\]{};:\'\"`~,<>/?\w]+\.\w{2,3}$/;
        return emailregex.test(this.email);
    }
    public checkpassword = function() {
        var lowercase = /[a-z]/;
        var uppercase = /[A-Z]/;
        var digit = /\d/;

        return lowercase.test(this.password) && uppercase.test(this.password) && digit.test(this.password) && (this.password.length >= 8);
    }

    public checkpassword_confirmation = function() {
        return this.password == this.password_confirmation;
    }

    public checkphone_number = function() {
        var phone_number_regex = /\d{3}\-\d{4}\-\d{4}/;
        return phone_number_regex.test(this.phone_number);
    }

    public checkfname = function() {
        var fnameregex = /[A-Z][a-z]+/;
        return fnameregex.test(this.fname);
    }

    public checklname = function() {
        var lnameregex = /[A-Z][a-z]+/;
        return lnameregex.test(this.lname);
    }

    public checkage = function() {
        return this.age > 0 && this.age <= 200;
    }

    public checkbirth_month = function() {
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        for(var i=0;i<12;i++) {
            if(this.birth_month == month[i])
                return true;
        }
        return false;        
    }

    public checkbirth_day = function() {
        return this.birth_day >= 10 && this.birth_day < 100;
    }

    public checkbirth_year = function() {
        return this.birth_year >= 1800 && this.birth_year <= 2018;
    }
}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email : string = document.forms["form"]["email"].value
    var password : string = document.forms["form"]["password"].value
    var password_confirmation : string = document.forms["form"]["password-confirmation"].value
    var phone_number : string = document.forms["form"]["phone-number"].value
    var fname : string = document.forms["form"]["fname"].value
    var lname : string = document.forms["form"]["lname"].value
    var age : number = document.forms["form"]["age"].value
    var birth_month : string = document.forms["form"]["birth-month"].value
    var birth_day : number = document.forms["form"]["birth-day"].value
    var birth_year : number = document.forms["form"]["birth-year"].value

    // TODO: Fill in the rest of the function. Use the Form class defined above

    var form : Form = new Form(email, password, password_confirmation, phone_number, fname, lname, age, birth_month, birth_day, birth_year);
    
    let alertMessage = "You must Correct:\n\n";
    // TODO: Fill the alert message according to the validation result by following the form in README.md.

    if(!form.checkemail()) {
        alertMessage += "Email\n";
        document.getElementById("emailx").innerHTML = "X";
    }
    else
        document.getElementById("emailx").innerHTML = "";
    if(!form.checkpassword()) {
        alertMessage += 'Password\n';
        document.getElementById("passwordx").innerHTML = "X";
    }
    else
        document.getElementById("passwordx").innerHTML = "";
    if(!form.checkpassword_confirmation()) {
        alertMessage += 'Password Confirmation\n';
        document.getElementById("passwordconfirmationx").innerHTML = "X";
    }
    else
        document.getElementById("passwordconfirmationx").innerHTML = "";
    if(!form.checkphone_number()) {
        alertMessage += 'Phone number\n';
        document.getElementById("phonenumberx").innerHTML = "X";
    }
    else
        document.getElementById("phonenumberx").innerHTML = "";
    if(!form.checkfname()) {
        alertMessage += 'First name\n';
        document.getElementById("fnamex").innerHTML = "X";
    }
    else
        document.getElementById("fnamex").innerHTML = "";
    if(!form.checklname()) {
        alertMessage += 'Last name\n';
        document.getElementById("lnamex").innerHTML = "X";
    }
    else
        document.getElementById("lnamex").innerHTML = "";
    if(!form.checkage()) {
        alertMessage += 'Age\n';
        document.getElementById("agex").innerHTML = "X";
    }
    else
        document.getElementById("agex").innerHTML = "";
    if(!form.checkbirth_month()) {
        alertMessage += 'Birth date (Month)\n';
        document.getElementById("monthx").innerHTML = "X";
    }
    else
        document.getElementById("monthx").innerHTML = "";
    if(!form.checkbirth_day()) {
        alertMessage += 'Birth date (Day)\n';
        document.getElementById("dayx").innerHTML = "X";
    }
    else
        document.getElementById("dayx").innerHTML = "";
    if(!form.checkbirth_year()) {
        alertMessage += 'Birth date (Year)\n';
        document.getElementById("yearx").innerHTML = "X";
    }
    else
        document.getElementById("yearx").innerHTML = "";
    
    if(alertMessage == "You must Correct:\n\n")
        alertMessage = "Successfully Submitted!"

    
    alert(alertMessage);

    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: modify 'title' attribute of each label to display your message
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
