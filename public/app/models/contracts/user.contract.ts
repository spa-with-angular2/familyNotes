export interface UserInterface
{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    families: string[];

    getMainProfilePictureUrl(): string;

    geProfilePicturesUrl(): string[];

    getFamilies(): string[];

    hasFamily():boolean;
}