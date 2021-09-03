import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { BMICalculatorComponent } from '../../../../page objects/bmi-calculator-module/bmi-calculator-page-object';

context('Cardio page01 - Patient data', () => {
  const bmiComponent = new BMICalculatorComponent();
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

  describe('Patient indication -> Patient data', () => {
    it('Patient data -> Weight/ Mass -> Height', () => {
      bmiComponent.setHeight(162);
      bmiComponent.setWeight(67);
      bmiComponent.getBMIDescription().should('contain.text', 'Pre obesity');
      bmiComponent.getBMI().should('have.text', '25,5');
    });
  });
});
