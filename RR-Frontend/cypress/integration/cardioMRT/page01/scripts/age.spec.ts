import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, patientAgeCalculation } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Cardio page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_AreaOfExamination.url + '/' + pageId);
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
