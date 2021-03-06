import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { MockType } from '../../testing/mocks';
import { TopBarModule } from './top-bar.module';

describe('TopBarComponent', () => {
  let component: TopBarComponent<MockType>;
  let fixture: ComponentFixture<TopBarComponent<MockType>>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TopBarModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
