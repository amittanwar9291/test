import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectSliderValueAndCheckIt,
  buttonShouldBeEnabled,
  selectDropdownOptionOS,
  elementShouldBeValid
} from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { cardioMRTRoutes } from '@environments/pages-routes';

context('Cardio page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Sequences', () => {
    it('Individually without CM -> No', () => {
      clickElement('uni_x_030110', true, 'radio');
      cy.byRRID('uni_x_030105').click({ force: true });
      elementShouldBeEnabled('uni_x_030107');
      elementShouldBeEnabled('uni_x_030108');
      elementShouldBeEnabled('uni_x_030109');

      elementShouldBeEnabled('uni_x_030112');
      elementShouldBeEnabled('uni_x_030113');

      clickElement('uni_x_030112', true, 'radio');
      clickElement('uni_x_030109', true, 'radio');

      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030210-1');
      buttonShouldBeEnabled('uni_x_030211');
      selectDropdownOptionOS('uni_x_030210-1', 1, true, true);
      buttonShouldBeEnabled('uni_x_030421');

      elementShouldBeEnabled('car_m_030302');
      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      selectDropdownOptionOS('car_m_030302', 3, true, true);
      selectDropdownOptionOS('uni_x_030308', 5, true, true);
      selectDropdownOptionOS('uni_x_030310', 4, true, true);

      elementShouldBeEnabled('uni_x_030314');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeEnabled('uni_x_0303101');
      clickElement('uni_x_030314', true, 'checkbox');
      clickElement('uni_x_030315', true, 'checkbox');
      clickElement('uni_x_0303101', true, 'checkbox');

      clickElement('car_m_030502', true, 'radio');
      elementShouldBeEnabled('car_m_030505');

      // Dosis - Adenosin-Infusion
      cy.get('.rr-number-input__input')
        .type('1')
        .clear();
      elementShouldBeValid('car_m_030505');

      // Enter 9999 in the input field 'Max. expansion in mm'
      cy.get('.rr-number-input__input').type('140');
      elementShouldBeValid('car_m_030505');

      clickElement('car_m_030503', true, 'radio');
      elementShouldBeEnabled('car_m_030505');

      // Dosis - Regadenosin (RapiscanR) injection
      cy.get('.rr-number-input__input')
        .type('1')
        .clear();
      elementShouldBeValid('car_m_030505');

      // Enter 9999 in the input field 'Max. expansion in mm'
      cy.get('.rr-number-input__input').type('400');
      elementShouldBeValid('car_m_030505');

      clickElement('car_m_030504', true, 'radio');
      elementShouldBeEnabled('car_m_030505');

      // Dosis - Dobutamine infusion
      cy.get('.rr-number-input__input')
        .type('1')
        .clear();
      elementShouldBeValid('car_m_030505');

      // Enter 9999 in the input field 'Max. expansion in mm'
      cy.get('.rr-number-input__input').type('20');
      elementShouldBeValid('car_m_030505');

      clickElement('uni_x_030509', true, 'checkbox');
      clickElement('uni_y_030502', true, 'checkbox');
      clickElement('uni_x_030525', true, 'checkbox');
      clickElement('uni_x_030521', true, 'checkbox');

      selectSliderValueAndCheckIt('uni_x_030524', 0, 4);
    });
  });
});
