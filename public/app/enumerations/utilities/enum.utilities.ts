export class EnumUtils{

    public static indexes(enumeration: any): number[] {
        var indexesToReturn: number[] = [];

        for (const item: any in enumeration) {
            if(typeof( enumeration[item]) === 'string') {
                indexesToReturn.push(item);
                //console.log(item);
            }
        }

        return indexesToReturn;
    }

    public static values(enumeration: any): string[] {
        var valuesToReturn: string[] = [];

        for (const item: any in enumeration) {
            if(typeof( enumeration[item]) === 'number') {
                valuesToReturn.push(item);
                //console.log(item);
            }
        }

        return valuesToReturn;
    }
}

