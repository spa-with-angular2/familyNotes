import { IStringArray } from './string-array.contract';

export interface IUser
{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    families: IStringArray;

    getMainProfilePictureUrl(): string;

    getFamilies(): string[];

    hasFamily():boolean;
}