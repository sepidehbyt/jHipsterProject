/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BlogTestModule } from '../../../test.module';
import { ClassesMySuffixComponent } from 'app/entities/classes-my-suffix/classes-my-suffix.component';
import { ClassesMySuffixService } from 'app/entities/classes-my-suffix/classes-my-suffix.service';
import { ClassesMySuffix } from 'app/shared/model/classes-my-suffix.model';

describe('Component Tests', () => {
    describe('ClassesMySuffix Management Component', () => {
        let comp: ClassesMySuffixComponent;
        let fixture: ComponentFixture<ClassesMySuffixComponent>;
        let service: ClassesMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [ClassesMySuffixComponent],
                providers: []
            })
                .overrideTemplate(ClassesMySuffixComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ClassesMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClassesMySuffixService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new ClassesMySuffix(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.classes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
