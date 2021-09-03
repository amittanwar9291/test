import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cardioMRTRoutes } from '../../../../../src/environments/pages-routes';

context('Cardio page02 - Cardiovascular risk - ESC Score', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Cardiovascular', () => {
    it('ESC Score', () => {
      cy.byRRID('car_m_020201').click();
      clickElement('car_m_020112', true, 'checkbox');
      elementShouldBeEnabled('car_m_020114');
      elementShouldBeEnabled('car_m_020115');
      elementShouldBeEnabled('car_m_020116');
      elementShouldBeEnabled('car_m_020118');
      elementShouldBeEnabled('car_m_020120');
      elementShouldBeEnabled('car_m_020122');
      elementShouldBeEnabled('car_m_020124');
      clickElement('car_m_020114', true, 'radio');
      cy.byRRID('car_m_020116').type('1');
      cy.byRRID('car_m_020118').type('2');
      cy.byRRID('car_m_020120').type('3');
      cy.byRRID('car_m_020122').type('4');
      cy.byRRID('car_m_020124').type('5');
      clickElement('car_m_020229', true, 'checkbox');
      elementShouldBeEnabled('car_m_020231');
      cy.byRRID('car_m_020231').type('6');
      clickElement('car_m_020234', true, 'checkbox');
      elementShouldBeEnabled('car_m_020238');
      clickElement('car_m_020238', true, 'checkbox');
    });
  });
});
