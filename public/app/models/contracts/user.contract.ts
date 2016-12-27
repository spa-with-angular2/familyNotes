import { IStringArray } from './string-array.contract';

export interface UserInterface
{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    families: IStringArray;

    getMainProfilePictureUrl(): string;

    geProfilePicturesUrl(): string[];

    getFamilies(): string[];

    hasFamily():boolean;
}