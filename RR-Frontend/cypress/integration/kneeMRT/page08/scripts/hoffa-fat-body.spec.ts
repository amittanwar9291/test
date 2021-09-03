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

  it('Hoffa Fat body', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('kne_m_080220');
    elementShouldBeEnabled('kne_m_080321');
    elementShouldBeEnabled('kne_m_080322');
    elementShouldBeEnabled('kne_m_080325');
    elementShouldBeEnabled('kne_m_080326');
    elementShouldBeEnabled('kne_m_080328');

    clickElement('kne_m_080220');
    elementShouldBeEnabled('kne_m_080221');
    elementShouldBeEnabled('kne_m_080227');

    clickElement('kne_m_080221');
    elementShouldBeEnabled('kne_m_080222');
    elementShouldBeEnabled('kne_m_080223');
    elementShouldBeEnabled('kne_m_080224');
    elementShouldBeEnabled('kne_m_080225');

    clickElement('kne_m_080225');
    elementShouldBeEnabled('kne_m_080226');

    clickElement('kne_m_080322');
    elementShouldBeEnabled('kne_m_080323');
    elementShouldBeEnabled('kne_m_080324');

    clickElement('kne_m_080326');
    elementShouldBeEnabled('kne_m_080327');
  });
});
