import { ModelDiff } from '@abstractions/model-diff/model-diff';
import { IReport } from '@interfaces/report.interface';
import { LoggingServiceMock } from '@services//mocks/logging-service.mock';

describe('Model Diff', () => {
  let modelDiff: ModelDiff<IReport>;
  const loggerMock: LoggingServiceMock = new LoggingServiceMock();

  beforeEach(() => {
    modelDiff = new ModelDiff<IReport>(loggerMock);
  });

  it('should confirm that slide model didn`t change', () => {
    const getModel = (): IReport => {
      return {
        validationId: '00000000-0000-0000-0000-000000000013',
        reportId: '00000000-0000-0000-0000-000000000012',
        id: '00000000-0000-0000-0000-000000000011'
      } as IReport;
    };

    const model = getModel();

    modelDiff.modelRef = {
      reportId: '00000000-0000-0000-0000-000000000018',
      id: '00000000-0000-0000-0000-000000000012'
    };

    expect(modelDiff.isEqual(model)).toBe(true);
  });

  it('should confirm that slide model had changed', () => {
    const model = {
      foo: 'bar',
      reportId: '00000000-0000-0000-0000-000000000012',
      id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
    };

    modelDiff.modelRef = {
      reportId: '00000000-0000-0000-0000-000000000015',
      id: '00000000-0000-0000-0000-000000000012'
    };

    expect(modelDiff.isEqual(model)).toBe(false);
  });

  it('comparison should fail, as modelDiff was not provided in setter, error should be Thrown "Model not provided"', () => {
    const model: IReport = {
      reportId: '00000000-0000-0000-0000-000000000012',
      id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
    };

    expect(() => (modelDiff.modelRef = undefined)).toThrowError('Model not provided');
  });

  it('should confirm that initial slide model is not initialized', () => {
    const model: IReport = {
      reportId: '00000000-0000-0000-0000-000000000012',
      id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
    };

    modelDiff.modelRef = {
      reportId: '00000000-0000-0000-0000-000000000012',
      id: '00000000-0000-0000-0000-000000000667'
    };

    expect(modelDiff.isEqualOrEmpty(model)).toBe(true);
  });
});
