import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
          cy.visit(kneeMRTRoutes.KneeMRT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Tendons - Biceps femoris tendon', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('kne_m_080240');
    elementShouldBeEnabled('kne_m_080354');

    clickElement('kne_m_080240');
    elementShouldBeEnabled('kne_m_080267');
    elementShouldBeEnabled('kne_m_080268');
    elementShouldBeEnabled('kne_m_080269');
    elementShouldBeEnabled('kne_m_080271');

    clickElement('kne_m_080269');
    elementShouldBeEnabled('kne_m_080270');

    clickElement('kne_m_080271');
    elementShouldBeEnabled('kne_m_080246');
    elementShouldBeEnabled('kne_m_080276');
    elementShouldBeEnabled('kne_m_080277');

    clickElement('kne_m_080354');
    elementShouldBeEnabled('kne_m_080355');
    elementShouldBeEnabled('kne_m_080356');
    elementShouldBeEnabled('kne_m_080358');
  });
});
