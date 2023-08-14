export class User {
    firstname:string;
    lastname:string;
    email:string;
    birthday:number;
    street:string;
    zipCode:number;
    city:string;
    // id:string;


    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.email = obj ? obj.email : '';
        this.birthday = obj ? obj.birthday : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        // this.id = obj ? obj.id : '';
    }

    public toJSON(){
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            birthday : this.birthday,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            // id: this.id,
        }
    }

}