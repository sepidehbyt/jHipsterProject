import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogStudentMySuffixModule } from './student-my-suffix/student-my-suffix.module';
import { BlogClassesMySuffixModule } from './classes-my-suffix/classes-my-suffix.module';
import { BlogStudentModule } from './student/student.module';
import { BlogClassesModule } from './classes/classes.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogStudentMySuffixModule,
        BlogClassesMySuffixModule,
        BlogStudentModule,
        BlogClassesModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
