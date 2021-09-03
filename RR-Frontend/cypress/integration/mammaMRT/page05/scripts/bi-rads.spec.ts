import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - BI-RADS', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('CHECK Yes on page 3 CM reinforced', () => {
    it('THEN Choose BI-RADS 4.0 on page 5', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('rr-top-navigation')
        .find('a')
        .contains('5')
        .click({ force: true });
      cy.byRRID('mam_m_050104').within(() => {
        cy.get('input[type="radio"]').click({ force: true });
      });
    });

    it('THEN Radio Buttons at Parenchyma dynamic-contrast are enabled', () => {
      elementShouldBeEnabled('mam_m_050502-1');
      elementShouldBeEnabled('mam_m_050503-1');
      elementShouldBeEnabled('mam_m_050504-1');
      elementShouldBeEnabled('mam_m_050505-1');
    });

    it('THEN Choose BI-RADS 5.0 and Symmetric and Asymmetric should be enabled', () => {
      cy.byRRID('mam_m_050105').within(() => {
        cy.get('input[type="radio"]').click({ force: true });
      });
      elementShouldBeEnabled('mam_m_050502-2');
      elementShouldBeEnabled('mam_m_050503-2');
    });
  });
});
