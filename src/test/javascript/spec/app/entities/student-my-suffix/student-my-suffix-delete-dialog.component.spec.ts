/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { BlogTestModule } from '../../../test.module';
import { StudentMySuffixDeleteDialogComponent } from 'app/entities/student-my-suffix/student-my-suffix-delete-dialog.component';
import { StudentMySuffixService } from 'app/entities/student-my-suffix/student-my-suffix.service';

describe('Component Tests', () => {
    describe('StudentMySuffix Management Delete Component', () => {
        let comp: StudentMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<StudentMySuffixDeleteDialogComponent>;
        let service: StudentMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [BlogTestModule],
                declarations: [StudentMySuffixDeleteDialogComponent]
            })
                .overrideTemplate(StudentMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StudentMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StudentMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
