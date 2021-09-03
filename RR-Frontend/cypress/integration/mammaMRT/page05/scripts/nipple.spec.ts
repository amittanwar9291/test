import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - Nipple', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_AnatomyEnhancement.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT Bilateral unremarkable', () => {
    it('THEN check tabs and checkboxes', () => {
      clickElement('mam_m_050402', true, 'radio');
      elementShouldBeDisabled('mam_m_050403-1');
      elementShouldBeDisabled('mam_m_050403-2');
      clickElement('mam_m_050402', true, 'radio');
      elementShouldBeEnabled('mam_m_050403-1');
      elementShouldBeEnabled('mam_m_050403-2');
      elementShouldBeEnabled('mam_m_050404-1');
      elementShouldBeEnabled('mam_m_050405-1');
      clickElement('mam_m_050403-2');
      cy.byRRID('mam_m_050403-1').should('not.be.selected');
      elementShouldBeEnabled('mam_m_050404-2');
      elementShouldBeEnabled('mam_m_050405-2');
    });
  });
});
