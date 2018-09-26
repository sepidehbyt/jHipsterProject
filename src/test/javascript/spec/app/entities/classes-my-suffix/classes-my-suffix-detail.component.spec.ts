/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BlogTestModule } from '../../../test.module';
import { ClassesMySuffixDetailComponent } from 'app/entities/classes-my-suffix/classes-my-suffix-detail.component';
import { ClassesMySuffix } from 'app/shared/model/classes-my-suffix.model';

describe('Component Tests', () => {
    describe('ClassesMySuffix Management Detail Component', () => {
        let comp: ClassesMySuffixDetailComponent;
        let fixture: ComponentFixture<ClassesMySuffixDetailComponent>;
        const route = ({ data: of({ classes: new ClassesMySuffix(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [ClassesMySuffixDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ClassesMySuffixDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ClassesMySuffixDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.classes).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
