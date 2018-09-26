import { IStudentMySuffix } from 'app/shared/model//student-my-suffix.model';

export interface IClassesMySuffix {
    id?: number;
    className?: string;
    classID?: IStudentMySuffix[];
}

export class ClassesMySuffix implements IClassesMySuffix {
    constructor(public id?: number, public className?: string, public classID?: IStudentMySuffix[]) {}
}
