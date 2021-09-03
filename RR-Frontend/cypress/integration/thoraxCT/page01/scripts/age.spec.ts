import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { getAppConfig, patientAgeCalculation } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Thorax CT-page01-Patient Data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_StudyArea.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient age auto calculation check', () => {
    it('Year of age is correct', () => {
      const userDOB = testUser.birthDate;
      const age = patientAgeCalculation(userDOB);
      cy.byRRID('uni_01_009').should('have.value', age.toString());
    });
  });
});
