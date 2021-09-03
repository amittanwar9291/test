import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page02 - Anamnese Symptoms', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Trauma', () => {
    clickElement('kne_m_020303', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020305');
    elementShouldBeEnabled('kne_m_020306');
    elementShouldBeEnabled('kne_m_020307');
    elementShouldBeEnabled('kne_m_020308');

    clickElement('kne_m_020309', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020310');

    clickElement('kne_m_020312', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020313');
    elementShouldBeEnabled('kne_m_020314');

    clickElement('kne_m_020401', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020402');
    elementShouldBeEnabled('kne_m_020405');

    clickElement('kne_m_020402', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020404');

    cy.byRRID('kne_m_020404')
      .shadowFind('#AHMM')
      .shadowClick();

    cy.byRRID('kne_m_020404')
      .shadowFind('#AHMM')
      .parent()
      .should('have.class', 'knee-cross-area-checked');

    cy.byRRID('kne_m_020404')
      .shadowFind('#IPMM')
      .shadowClick();

    cy.byRRID('kne_m_020404')
      .shadowFind('#IPMM')
      .parent()
      .should('have.class', 'knee-cross-area-checked');

    clickElement('kne_m_020405', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020407');

    cy.byRRID('kne_m_020407')
      .shadowFind('#AHLM')
      .shadowClick();

    cy.byRRID('kne_m_020407')
      .shadowFind('#AHLM')
      .parent()
      .should('have.class', 'knee-cross-area-checked');

    cy.byRRID('kne_m_020407')
      .shadowFind('#IPLM')
      .shadowClick();

    cy.byRRID('kne_m_020407')
      .shadowFind('#IPLM')
      .parent()
      .should('have.class', 'knee-cross-area-checked');
  });
});
