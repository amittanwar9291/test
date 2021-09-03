import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 11 - Lymph nodes', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_110107', 'pel_m_110106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_LymphNodes.url + '/' + pageId);
        });
      });
    });
  });

  describe('Lymph nodes', () => {
    it('Pathological -> Multiple Selection', () => {
      clickElement('pel_m_110105', true, 'radio');
      elementShouldBeEnabled('pel_m_110106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      cy.get('[name="localizationType"]').click({ force: true });
      cy.get('form.ng-valid > .ng-valid')
        .shadowFind('[rr-id=pel_m_110502]')
        .shadowClick();
      cy.get('form.ng-valid > .ng-valid')
        .shadowFind('[fill="#00aec2"]')
        .shadowClick({ force: true });

      elementShouldBeEnabled('pel_m_110205');
      elementShouldBeEnabled('pel_m_110206');
      elementShouldBeEnabled('pel_m_110207');
      elementShouldBeEnabled('pel_m_110208');
      elementShouldBeEnabled('pel_m_110209');
      elementShouldBeEnabled('pel_m_110210');
    });
  });
});
