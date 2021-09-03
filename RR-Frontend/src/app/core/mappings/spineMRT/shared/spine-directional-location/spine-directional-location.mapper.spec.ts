import { TestBed } from '@angular/core/testing';

import { SpineDirectionalLocationMapper } from './spine-directional-location.mapper';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

describe('SpineDirectionalLocationMapper', () => {
  let service: SpineDirectionalLocationMapper;
  const spineDirectionalLocationMock = new SpineDirectionalLocation();
  spineDirectionalLocationMock.c1d = { right: true, left: true };
  spineDirectionalLocationMock.c2 = { right: true, left: false };
  spineDirectionalLocationMock.c3d = { right: false, left: true };
  spineDirectionalLocationMock.tH3d = { right: true, left: true };
  const spineDirectionalLocationApiStringMock = 'C1d_R, C1d_L, T9_L, T12d_R';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpineDirectionalLocationMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('convert obj to string in api format', () => {
    const convertedString = service.mapToString(spineDirectionalLocationMock);
    expect(convertedString).toContain('C1d_R');
    expect(convertedString).toContain('C1d_L');
    expect(convertedString).toContain('C2_R');
    expect(convertedString).toContain('T3d_R');
    expect(convertedString).toContain('T3d_L');
  });

  it('convert string to obj in UI model format', () => {
    const uiFormatObj = service.mapToObject(spineDirectionalLocationApiStringMock, new SpineDirectionalLocation());
    expect(uiFormatObj.tH9.left).toEqual(true);
    expect(uiFormatObj.c1d.right).toEqual(true);
    expect(uiFormatObj.c1d.left).toEqual(true);
    expect(uiFormatObj.c2d.right).toEqual(false);
    expect(uiFormatObj.tH12d.right).toEqual(true);
    expect(uiFormatObj.tH12d.left).toEqual(false);
  });
});
