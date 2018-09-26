/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BlogTestModule } from '../../../test.module';
import { StudentMySuffixComponent } from 'app/entities/student-my-suffix/student-my-suffix.component';
import { StudentMySuffixService } from 'app/entities/student-my-suffix/student-my-suffix.service';
import { StudentMySuffix } from 'app/shared/model/student-my-suffix.model';

describe('Component Tests', () => {
    describe('StudentMySuffix Management Component', () => {
        let comp: StudentMySuffixComponent;
        let fixture: ComponentFixture<StudentMySuffixComponent>;
        let service: StudentMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [StudentMySuffixComponent],
                providers: []
            })
                .overrideTemplate(StudentMySuffixComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StudentMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StudentMySuffixService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new StudentMySuffix(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.students[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
