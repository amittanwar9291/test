import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cyanColor } from '../../../../shared/constants';
import { BMICalculatorComponent } from '../../../../page objects/bmi-calculator-module/bmi-calculator-page-object';

context('page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const bmiComponent = new BMICalculatorComponent();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_PatientIndication.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient indication -> Patient data', () => {
    it('BMI', () => {
      bmiComponent.setHeight(180);
      bmiComponent.setWeight(80);
      bmiComponent.getBMIDescription().should('contain.text', ' Normal weight ');
      bmiComponent
        .getBMI()
        .should('have.text', '24,7')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');
    });
  });
});
