import { TestBed, async } from '@angular/core/testing';
import { DirectorEditComponent} from './director-edit.component';

describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectorEditComponent
      ],
    }).compileComponents();
  }));
  it('should create the director form', async(() => {
    const fixture = TestBed.createComponent(DirectorEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

