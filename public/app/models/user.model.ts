import { UserInterface } from './contracts/user.contract';

// TODO extract constants
const noProfilePictureUrl: string = '/app/assets/images/default-user.jpg';


export class User implements UserInterface{
    public id: string;

    public firstName: string;
    public lastName: string;
    public age: number;
    public gender: string;
    public country: string;


    public email: string;
    public profilePictures: string[];
    public families: string[];
    public createdOn: Date;

    public username: string;
    public passHash: string;
    private role: string;
    private fbId: string;
    private fbToken: string;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        gender: string,
        country: string,

        email: string,
        profilePicture: string,

        username: string,
        passHash: string,
        role: string,
        fbId: string,
        fbToken: string,
    ){
        this.id = '';

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.country = country;

        this.email = email;
        this.profilePictures = [];
        this.profilePictures = this.initProfilePictures(profilePicture);
        this.families = [];
        this.createdOn = new Date();

        this.username = username;
        this.passHash = passHash;
        this.role = role || '';
        this.fbId = fbId || '';
        this.fbToken = fbToken || '';
    }



    private initProfilePictures(profilePictureUrl: string){
        var profilePicturesCollectionToReturn: string[] = [];

        if ((profilePictureUrl == null) || (profilePictureUrl == undefined)){
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        } else  if (profilePictureUrl == ''){
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        } else {
            profilePicturesCollectionToReturn.push(profilePictureUrl);
        }

        return profilePicturesCollectionToReturn;
    }
}