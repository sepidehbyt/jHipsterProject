import { IClasses } from 'app/shared/model//classes.model';

export interface IStudent {
    id?: number;
    studentName?: string;
    studentClassID?: IClasses;
}

export class Student implements IStudent {
    constructor(public id?: number, public studentName?: string, public studentClassID?: IClasses) {}
}
