/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BlogTestModule } from '../../../test.module';
import { StudentMySuffixDetailComponent } from 'app/entities/student-my-suffix/student-my-suffix-detail.component';
import { StudentMySuffix } from 'app/shared/model/student-my-suffix.model';

describe('Component Tests', () => {
    describe('StudentMySuffix Management Detail Component', () => {
        let comp: StudentMySuffixDetailComponent;
        let fixture: ComponentFixture<StudentMySuffixDetailComponent>;
        const route = ({ data: of({ student: new StudentMySuffix(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [StudentMySuffixDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StudentMySuffixDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StudentMySuffixDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.student).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
