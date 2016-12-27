import { FamilyInterface } from './contracts/family.contract';
import { User } from './user.model';
import { UserComponent } from '../components/users/user.component';

const noFamilyPictureUrl: string = '../assets/images/default-family.png';
const mainFamilyPictureIndex: number = 0;

export class Family implements FamilyInterface{
    private id: string;

    public name: string;
    public creator: User;
    private familyPictures: string[];
    private familyMembers: User[];

    constructor(
        _id: string,

        _name: string,
        // _creator: string,

        _familyPicture: string[],

        // _username: string,
        // _passHash: string,
        // _salt: string,
        // _role: string,
        // _fbId: string,
        // _fbToken: string,
    ){
        this.id = _id;

        this.name = _name;

        //TODO should be the current logged in user
        var tempCreator = new UserComponent();
        this.creator = tempCreator.createUser();

        this.familyPictures = [];
        this.familyPictures = this.initFamilyPictures(_familyPicture);
    }

    public getMainFamilyPictureUrl(): string {
        var mainFamilyPictureUrlToReturn:string = '';

        mainFamilyPictureUrlToReturn = this.familyPictures[mainFamilyPictureIndex];

        return mainFamilyPictureUrlToReturn;
    }

    public geFamilyPicturesUrl(): string[] {
        var familyPicturesUrlToReturn:string[] = [];

        familyPicturesUrlToReturn = this.familyPictures.slice(0);

        return familyPicturesUrlToReturn;
    }

    public  getFamilyMembers(): string[] {
        var familyMembersToReturn: string[];

        familyMembersToReturn = [];

        console.log('getFamilyMembers call-'+familyMembersToReturn);
        return familyMembersToReturn;
    }

    private initFamilyPictures(_familyPictures: string[]){
        var familyPicturesCollectionToReturn: string[];
        familyPicturesCollectionToReturn = [];

        if ((_familyPictures == null) || (_familyPictures == undefined)){
            familyPicturesCollectionToReturn.push(noFamilyPictureUrl);
        }
        if (_familyPictures.length == 0){
            familyPicturesCollectionToReturn.push(noFamilyPictureUrl);
        }

        for (var pictureSrc of _familyPictures){
            familyPicturesCollectionToReturn.push(pictureSrc);
        }

        return familyPicturesCollectionToReturn;
    }
}