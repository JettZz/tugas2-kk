let email = ['excel@gmail.com', 'jedidah@gmail.com', 'sanz#gmail.com']

function validasiDaftarEmail(email){
    let emailValid =[];
    let emailNonValid = [];
    for(i = 0; i < email.length; i++){
        if (email[i].includes('@') && email[i].includes('.')){
            emailValid.push(email[i])
        } else {
            emailNonValid.push(email[i])
        }
           
    }
    return {
            valid: emailValid,
            nonValid: emailNonValid
        }
}

let hasil = validasiDaftarEmail(email);
console.log("Email Valid:", hasil.valid);
console.log("Email Tidak Valid:", hasil.nonValid);