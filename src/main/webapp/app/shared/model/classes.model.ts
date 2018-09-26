export interface IClasses {
    id?: number;
    className?: string;
}

export class Classes implements IClasses {
    constructor(public id?: number, public className?: string) {}
}
