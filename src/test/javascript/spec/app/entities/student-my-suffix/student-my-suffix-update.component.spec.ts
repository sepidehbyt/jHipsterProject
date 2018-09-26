/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { BlogTestModule } from '../../../test.module';
import { StudentMySuffixUpdateComponent } from 'app/entities/student-my-suffix/student-my-suffix-update.component';
import { StudentMySuffixService } from 'app/entities/student-my-suffix/student-my-suffix.service';
import { StudentMySuffix } from 'app/shared/model/student-my-suffix.model';

describe('Component Tests', () => {
    describe('StudentMySuffix Management Update Component', () => {
        let comp: StudentMySuffixUpdateComponent;
        let fixture: ComponentFixture<StudentMySuffixUpdateComponent>;
        let service: StudentMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [StudentMySuffixUpdateComponent]
            })
                .overrideTemplate(StudentMySuffixUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StudentMySuffixUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StudentMySuffixService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new StudentMySuffix(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.student = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new StudentMySuffix();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.student = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
