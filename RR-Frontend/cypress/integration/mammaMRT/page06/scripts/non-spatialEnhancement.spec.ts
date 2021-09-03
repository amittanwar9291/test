import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectLocalizerElement
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 06 - non spatial', () => {
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

  it(' Mamma MRT(6)->Non-spatial Enhancement (NRE)', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('mam_m_060105');

    selectDropdownOptionOS('mam_m_060106-1', 2, true, true);

    elementShouldBeEnabled('mam_m_060111');
    elementShouldBeEnabled('mam_m_060316');
    elementShouldBeEnabled('mam_m_060317');
    elementShouldBeEnabled('mam_m_060318');
    elementShouldBeEnabled('mam_m_060319');
    elementShouldBeEnabled('mam_m_060320');
    elementShouldBeEnabled('mam_m_060321');

    elementShouldBeEnabled('mam_m_060416');
    elementShouldBeEnabled('mam_m_060417');
    elementShouldBeEnabled('mam_m_060318');
    elementShouldBeEnabled('mam_m_060319');

    elementShouldBeEnabled('mam_m_060504');
    elementShouldBeEnabled('uni_06_003');
    elementShouldBeEnabled('uni_06_005');
    elementShouldBeEnabled('uni_06_006');

    selectLocalizerElement('mam_m_060218', '.breast-part', 1);
    selectLocalizerElement('mam_m_060218', '.breast-part', 2);
    selectLocalizerElement('mam_m_060218', '.breast-part', 3);
    selectLocalizerElement('mam_m_060218', '.breast-part', 4);

    cy.byRRID('mam_m_060218')
      .shadowFind('.breast-part')
      .eq(5)
      .should('not.be.enabled');
    cy.byRRID('mam_m_060218')
      .shadowFind('.breast-part')
      .eq(6)
      .should('not.be.enabled');
    cy.byRRID('mam_m_060218')
      .shadowFind('.breast-part')
      .eq(7)
      .should('not.be.enabled');
    cy.byRRID('mam_m_060218')
      .shadowFind('.breast-part')
      .eq(8)
      .should('not.be.enabled');
    cy.byRRID('mam_m_060218')
      .shadowFind('.breast-part')
      .eq(9)
      .should('not.be.enabled');

    clickElement('mam_m_060318', false, 'radio');
    clickElement('mam_m_060417', false, 'radio');

    selectDropdownOptionOS('mam_m_060504', 1, true, true);

    elementShouldBeEnabled('mam_m_060506');

    selectDropdownOptionOS('mam_m_060506', 7, true, true);

    elementShouldBeEnabled('mam_m_060507');
    elementShouldBeEnabled('mam_m_060509');

    cy.byRRID('uni_06_003').type('001');
    cy.byRRID('uni_06_005').type('3');
  });
});
