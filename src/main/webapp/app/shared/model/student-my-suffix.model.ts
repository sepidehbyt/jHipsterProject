import { IClassesMySuffix } from 'app/shared/model//classes-my-suffix.model';

export interface IStudentMySuffix {
    id?: number;
    studentName?: string;
    studentClassID?: number;
    studentClassIDs?: IClassesMySuffix;
}

export class StudentMySuffix implements IStudentMySuffix {
    constructor(
        public id?: number,
        public studentName?: string,
        public studentClassID?: number,
        public studentClassIDs?: IClassesMySuffix
    ) {}
}
