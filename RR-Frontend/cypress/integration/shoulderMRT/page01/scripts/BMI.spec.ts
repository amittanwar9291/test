import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { BMICalculatorComponent } from '../../../../page objects/bmi-calculator-module/bmi-calculator-page-object';

context('Shoulder page01 - Patient data', () => {
  const bmiComponent = new BMICalculatorComponent();
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient indication -> Patient data', () => {
    it('Patient data -> Weight/ Mass -> Height', () => {
      bmiComponent.setHeight(172);
      bmiComponent.setWeight(53);
      bmiComponent.getBMIDescription().should('contain.text', 'Light underweight');
      bmiComponent.getBMI().should('have.text', '17,9');
    });
  });
});
