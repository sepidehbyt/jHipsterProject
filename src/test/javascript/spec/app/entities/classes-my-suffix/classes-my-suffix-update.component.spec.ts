/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { BlogTestModule } from '../../../test.module';
import { ClassesMySuffixUpdateComponent } from 'app/entities/classes-my-suffix/classes-my-suffix-update.component';
import { ClassesMySuffixService } from 'app/entities/classes-my-suffix/classes-my-suffix.service';
import { ClassesMySuffix } from 'app/shared/model/classes-my-suffix.model';

describe('Component Tests', () => {
    describe('ClassesMySuffix Management Update Component', () => {
        let comp: ClassesMySuffixUpdateComponent;
        let fixture: ComponentFixture<ClassesMySuffixUpdateComponent>;
        let service: ClassesMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [ClassesMySuffixUpdateComponent]
            })
                .overrideTemplate(ClassesMySuffixUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClassesMySuffixUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClassesMySuffixService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new ClassesMySuffix(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.classes = entity;
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
                    const entity = new ClassesMySuffix();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.classes = entity;
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
