import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Shoulder Page 05 - AC-Joint & Rotator Cuff', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_060106', 'sho_m_060106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_LabrumAndRibbons.url + '/' + pageId);
        });
      });
    });
  });
  describe('LABRUM &RIbbons', () => {
    it('Labrum - I KNOW', () => {
      clickElement('sho_m_060105', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(0);
      cy.get('[value="IDescribe"]').should('not.have.css', 'pointer-events', 'none');
      cy.get('[value="IKnow"]').should('not.have.css', 'pointer-events', 'none');

      cy.get('[value="IKnow"]')
        .eq(0)
        .click({ force: true });

      elementShouldBeEnabled('sho_m_060204');

      elementShouldBeEnabled('sho_m_060405');
      elementShouldBeEnabled('sho_m_060408');
      elementShouldBeEnabled('sho_m_060407');
      elementShouldBeEnabled('sho_m_060409');
      elementShouldBeEnabled('sho_m_060410');

      elementShouldBeEnabled('sho_m_060107');

      elementShouldBeEnabled('sho_m_060503');
      elementShouldBeEnabled('sho_m_060504');
      elementShouldBeEnabled('sho_m_060505');
    });
  });
});
