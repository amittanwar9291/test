import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft parts', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Synovia diffus without Contrast medium', () => {
    clickElement('uni_x_030110', true, 'radio');
    cy.get('.nav_container__main > :nth-child(8) > a').click({ force: true });

    clickElement('kne_m_080105');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('kne_m_0802139');
    elementShouldBeDisabled('kne_m_0802140');
    elementShouldBeEnabled('kne_m_0802201');
  });
});
