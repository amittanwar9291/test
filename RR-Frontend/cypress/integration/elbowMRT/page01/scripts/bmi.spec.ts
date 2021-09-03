import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { BMICalculatorComponent } from '../../../../page objects/bmi-calculator-module/bmi-calculator-page-object';

context('Elbow MRT-Page 01 - Patient Data', () => {
  const bmiComponent = new BMICalculatorComponent();
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient indication -> Patient data', () => {
    it('SEVERE UNDERWEIGHT', () => {
      bmiComponent.setHeight(184);
      bmiComponent.setWeight(50);
      bmiComponent.getBMIDescription().should('contain.text', 'Severe underweight');
      bmiComponent.getBMI().should('have.text', '14,8');
    });

    it('MODERATE UNDERWEIGHT', () => {
      bmiComponent.setHeight(191);
      bmiComponent.setWeight(60);
      bmiComponent.getBMIDescription().should('contain.text', 'Moderate underweight');
      bmiComponent.getBMI().should('have.text', '16,4');
    });

    it('LIGHT UNDERWEIGHT', () => {
      bmiComponent.setHeight(183);
      bmiComponent.setWeight(61);
      bmiComponent.getBMIDescription().should('contain.text', 'Light underweight');
      bmiComponent.getBMI().should('have.text', '18,2');
    });

    it('NORMAL WEIGHT', () => {
      bmiComponent.setHeight(180);
      bmiComponent.setWeight(80);
      bmiComponent.getBMIDescription().should('contain.text', 'Normal weight');
      bmiComponent.getBMI().should('have.text', '24,7');
    });

    it('PRE OBESITY', () => {
      bmiComponent.setHeight(187);
      bmiComponent.setWeight(102);
      bmiComponent.getBMIDescription().should('contain.text', 'Pre obesity');
      bmiComponent.getBMI().should('have.text', '29,2');
    });

    it('CLASS I OBESITY', () => {
      bmiComponent.setHeight(186);
      bmiComponent.setWeight(110);
      bmiComponent.getBMIDescription().should('contain.text', 'Class I obesity');
      bmiComponent.getBMI().should('have.text', '31,8');
    });

    it('CLASS II OBESITY', () => {
      bmiComponent.setHeight(180);
      bmiComponent.setWeight(120);
      bmiComponent.getBMIDescription().should('contain.text', 'Class II obesity');
      bmiComponent.getBMI().should('have.text', '37');
    });

    it('CLASS III OBESITY', () => {
      bmiComponent.setHeight(152);
      bmiComponent.setWeight(167);
      bmiComponent.getBMIDescription().should('contain.text', 'Class III obesity');
      bmiComponent.getBMI().should('have.text', '72,3');
    });
  });
});
