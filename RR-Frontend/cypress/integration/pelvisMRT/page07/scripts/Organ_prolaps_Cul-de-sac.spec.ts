import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 07 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('pel_m_070107', 'pel_m_070107-');
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

  describe('Organ_prolaps_Anterior_compartment.feature', () => {
    it('Organ_prolaps_Anterior_compartment.feature', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(2000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('pel_m_070108');

      elementShouldBeEnabled('pel_m_070218');
      elementShouldBeEnabled('pel_m_070512');

      clickElement('pel_m_070218', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070323');
      elementShouldBeEnabled('pel_m_070324');
      elementShouldBeEnabled('pel_m_070325');

      elementShouldBeEnabled('pel_m_070417');

      cy.byRRID('pel_m_070221').type('30');

      elementShouldBeEnabled('pel_m_070224');
      elementShouldBeEnabled('pel_m_070225');
      cy.byRRID('pel_m_070227').should('have.value', 'Light');

      clickElement('pel_m_070218', true, 'radio');

      cy.byRRID('pel_m_070328').type('1');

      elementShouldBeEnabled('pel_m_070330');
      elementShouldBeEnabled('pel_m_070331');

      cy.byRRID('pel_m_070333').should('have.value', 'Stage 2');

      cy.byRRID('pel_m_070328').type('10');

      elementShouldBeEnabled('pel_m_070330');
      elementShouldBeEnabled('pel_m_070331');

      cy.byRRID('pel_m_070333').should('have.value', 'Stage 2');

      clickElement('pel_m_070325', true, 'radio');
      cy.byRRID('pel_m_070333').should('have.value', 'Stage 4');

      clickElement('pel_m_070512', true, 'checkbox');
    });
  });
});
