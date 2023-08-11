export class User {
    firstname:string;
    lastname:string;
    birthday:number;
    street:string;
    zipCode:number;
    city:string;


    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthday = obj ? obj.birthday : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON(){
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthday : this.birthday,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        }
    }

}