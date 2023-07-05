//Object
let user={id:101,
        name:"rahul",
        email:"rahul@gmail.com"
}
let details={
       email:"ankitha@gmail.com",
       salary:45000
      }
let user_details={...user,...details}
console.log(user_details)