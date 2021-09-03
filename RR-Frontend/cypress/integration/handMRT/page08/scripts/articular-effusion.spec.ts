import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_080107', 'han_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Articular Effusion', () => {
      clickElement('han_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('han_m_080107');
      elementShouldBeEnabled('han_m_080203');

      clickElement('han_m_080203', true);

      cy.get('.ng-valid.ng-star-inserted')
        .shadowFind('.pointer')
        .eq(40)
        .click({ force: true });

      cy.get('.ng-valid.ng-star-inserted')
        .shadowFind('.pointer')
        .eq(56)
        .click({ force: true });
      elementShouldBeEnabled('han_m_080302');
      elementShouldBeEnabled('han_m_080303');
      elementShouldBeEnabled('han_m_080305');
      elementShouldBeEnabled('han_m_080306');
      elementShouldBeEnabled('han_m_080308');

      clickElement('han_m_080306', true, 'checkbox');
      elementShouldBeEnabled('han_m_080307');

      clickElement('han_m_080308', true, 'checkbox');
      elementShouldBeEnabled('han_m_080310');
    });
  });
});
