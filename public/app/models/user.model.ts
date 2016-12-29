import { UserInterface } from './contracts/user.contract';

const noProfilePictureUrl: string = '../assets/images/default-user.png';
const mainProfilePictureIndex: number = 0;

export class User implements UserInterface{
    private id: string;

    public firstName: string;
    public lastName: string;
    public age: number;
    public gender: string;
    public families: string[];

    private email: string;
    private profilePictures: string[];

    public username: string;
    private passHash: string;
    private salt: string;
    private role: string;
    private fbId: string;
    private fbToken: string;

    constructor(
        _id: string,

        _firstName: string,
        _lastName: string,
        _age: number,
        _gender: string,

        // _email: string,
        // _profilePictures: string[],

        _username: string,
        // _passHash: string,
        // _salt: string,
        // _role: string,
        // _fbId: string,
        // _fbToken: string,
    ){
        this.id = _id;

        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.gender = _gender;
        this.families = [];

        // this.email = _email;
        // this.profilePictures = this.initProfilePictures(_profilePictures);
        //
        this.username = _username;
        // this.passHash = _passHash;
        // this.fbId = _fbId;
        // this.fbToken = _fbToken;
    }

    public getMainProfilePictureUrl(): string {
        var mainProfilePictureUrlToReturn:string = '';

        mainProfilePictureUrlToReturn = this.profilePictures[mainProfilePictureIndex];

        return mainProfilePictureUrlToReturn;
    }

    public getProfilePicturesUrl(): string[] {
        return undefined;
    }

    public hasFamily():boolean {
        if(this.families == null || this.families == undefined){
            return false;
        }
        if(this.families.length == 0){
            return false;
        }

        return true;
    }

    public  getFamilies(): string[] {
        var familiesToReturn: string[];

        familiesToReturn = [];

        console.log('getFamilies call-'+familiesToReturn);
        return familiesToReturn;
    }

    private initProfilePictures(_profilePictures: string[]){
        var profilePicturesCollectionToReturn: string[];
        profilePicturesCollectionToReturn = [];

        if ((_profilePictures == null) || (_profilePictures == undefined)){
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }
        if (_profilePictures.length == 0){
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }

        for (var pictureSrc of _profilePictures){
            profilePicturesCollectionToReturn.push(pictureSrc);
        }

        return profilePicturesCollectionToReturn;
    }
}