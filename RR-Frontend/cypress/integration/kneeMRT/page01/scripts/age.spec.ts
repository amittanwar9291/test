import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, patientAgeCalculation } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Localization.url + '/' + pageId);
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
