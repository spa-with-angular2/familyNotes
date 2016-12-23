import { IStringArray } from './string-array.contract';
import { User } from '../user.model';

export interface IFamily
{
    name: string;
    creator: User;

    getMainFamilyPictureUrl(): string;

    geFamilyPicturesUrl(): string[];

    getFamilyMembers(): string[]
}