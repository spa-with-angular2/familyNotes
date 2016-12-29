export interface UserInterface
{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    families: string[];

    getMainProfilePictureUrl(): string;

    getProfilePicturesUrl(): string[];

    getFamilies(): string[];

    hasFamily():boolean;
}