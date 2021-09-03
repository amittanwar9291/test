import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
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
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient indication -> Patient data', () => {
    it('BMI', () => {
      bmiComponent.setHeight(184);
      bmiComponent.setWeight(50);
      bmiComponent.getBMIDescription().should('contain.text', 'Severe underweight');
      bmiComponent
        .getBMI()
        .should('have.text', '14,8')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');

      bmiComponent.setHeight(191);
      bmiComponent.setWeight(60);
      bmiComponent.getBMIDescription().should('contain.text', 'Moderate underweight');
      bmiComponent
        .getBMI()
        .should('have.text', '16,4')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');

      bmiComponent.setHeight(183);
      bmiComponent.setWeight(61);
      bmiComponent.getBMIDescription().should('contain.text', 'Light underweight');
      bmiComponent
        .getBMI()
        .should('have.text', '18,2')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');

      bmiComponent.setHeight(183);
      bmiComponent.setWeight(102);
      bmiComponent.getBMIDescription().should('contain.text', 'I obesity');
      bmiComponent
        .getBMI()
        .should('have.text', '30,5')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');

      bmiComponent.setHeight(187);
      bmiComponent.setWeight(102);
      bmiComponent.getBMIDescription().should('contain.text', 'Pre obesity ');
      bmiComponent
        .getBMI()
        .should('have.text', '29,2')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');

      bmiComponent.setHeight(152);
      bmiComponent.setWeight(167);
      bmiComponent.getBMIDescription().should('contain.text', 'Class III obesity');
      bmiComponent
        .getBMI()
        .should('have.text', '72,3')
        .should('have.color', cyanColor);
      clickElement('uni_01_007', true, 'radio');
    });
  });
});
