import { User } from '../user.model';

export interface FamilyInterface
{
    name: string;
    creator: User;

    getMainFamilyPictureUrl(): string;

    geFamilyPicturesUrl(): string[];

    getFamilyMembers(): string[]
}