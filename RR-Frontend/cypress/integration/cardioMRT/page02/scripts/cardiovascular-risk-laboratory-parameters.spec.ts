import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cardioMRTRoutes } from '../../../../../src/environments/pages-routes';

context('Cardio page02 - Cardiovascular risk - Laboratory parameters', () => {
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
    it('Laboratory parameters', () => {
      cy.visit(cardioMRTRoutes.CardioMRT_AreaOfExamination.url + '/' + pageId);
      clickElement('uni_01_006', true, 'radio');
      cy.wait(3000);
      cy.byRRID('nav-header-btn-next').click();
      cy.visit(cardioMRTRoutes.CardioMRT_Anamnesis.url + '/' + pageId);
      cy.byRRID('car_m_020201').click();
      clickElement('car_m_020112', true, 'checkbox');
      clickElement('car_m_020115', true, 'radio');
      cy.byRRID('car_m_020116').type('999');
      cy.byRRID('car_m_020118').type('999');
      cy.byRRID('car_m_020120').type('999');
      cy.byRRID('car_m_020122').type('999');
      clickElement('car_m_020227', true, 'checkbox');
      cy.byRRID('car_m_020236').type('99');
      clickElement('car_m_020310', true, 'checkbox');
      clickElement('car_m_020416', true, 'checkbox');
    });
  });
});
