import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { BMICalculatorComponent } from '../../../../page objects/bmi-calculator-module/bmi-calculator-page-object';

context('SpineMRT page01 - Patient data', () => {
  const bmiComponent = new BMICalculatorComponent();
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient indication -> Patient data', () => {
    it('Patient data -> Weight/ Mass -> Height', () => {
      bmiComponent.setHeight(174);
      bmiComponent.setWeight(93);
      bmiComponent.getBMIDescription().should('contain.text', 'Class I obesity');
      bmiComponent.getBMI().should('have.text', '30,7');
    });
  });
});
