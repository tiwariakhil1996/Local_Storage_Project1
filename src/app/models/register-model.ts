
export class RegisterModel{
    id:number;
    firstname:string;
    lastname:string;
    username:string;
    gender:string;
    password:string;
    confirmpassword:string;
    email:string;
    mobile:number;
    image:string;
  
    
}

export class loginModel{

    username:string;
    password:string;
    email:string;
    mobile:number;
    
}
// export class viewModel{
//     image:string;
//     id:number;
//     firstname:string;
//     lastname:string;
//     username:string;
//     gender:string;
//     password:string;
//     confirmpassword:string;
//     email:string;
//     mobile:string;
// }
export class RegisterImg{
    id:number;
    image:string;
}


export class DemoModel{
    id:number;
    firstname:string;
    lastname:string;
    username:string;
    gender:string;
    password:string;
    confirmpassword:string;
    email:string;
    mobile:number;
    image:string;
    txtHobbies: any[]=['cricket','chess','football'];
    txtDateTime:String;
    txtAddress:string;
    country:string;
    state:string;
    city:string;

}
export class DemoImg{
 
    id:number;
    image:string;
}
// export class viewDemo{
//     image:string;
//     id:number;
//     firstname:string;
//     lastname:string;
//     username:string;
//     gender:string;
//     password:string;
//     confirmpassword:string;
//     email:string;
//     mobile:string;
//     txtHobbies:string;
//     txtDateTime:String;
//     txtAddress:string;
//     country:string;
//     state:string;
//     city:string;

// }