import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - Anterior cruciate ligament (ACL).spec', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_050107', 'kne_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Ribbons.url + '/' + pageId);
        });
      });
    });
  });

  it('Anterior cruciate ligament (ACL).spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('kne_m_050223');
    elementShouldBeEnabled('kne_m_050224');

    clickElement('kne_m_050223', true, 'radio');
    elementShouldBeEnabled('kne_m_050366');
    elementShouldBeEnabled('kne_m_050518');
    elementShouldBeEnabled('kne_m_050522');

    clickElement('kne_m_050366', true, 'radio');
    elementShouldBeEnabled('kne_m_050367');
    elementShouldBeEnabled('kne_m_050368');
    elementShouldBeEnabled('kne_m_050369');
    elementShouldBeEnabled('kne_m_050425');
    elementShouldBeEnabled('kne_m_050426');

    clickElement('kne_m_050369', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050376');
    elementShouldBeEnabled('kne_m_050379');

    clickElement('kne_m_050379', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050380');

    elementShouldBeEnabled('kne_m_050381');
    elementShouldBeEnabled('kne_m_050382');
    elementShouldBeEnabled('kne_m_050383');

    elementShouldBeEnabled('kne_m_050416');
    elementShouldBeEnabled('kne_m_050421');

    clickElement('kne_m_050416', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050417');
    clickElement('kne_m_050417', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050419');
    elementShouldBeEnabled('kne_m_050420');

    clickElement('kne_m_050421', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050422');
    clickElement('kne_m_050422', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050423');
    elementShouldBeEnabled('kne_m_050424');

    clickElement('kne_m_050518', true, 'radio');
    elementShouldBeEnabled('kne_m_050519');
    elementShouldBeEnabled('kne_m_050520');

    clickElement('kne_m_050224', true, 'radio');
    elementShouldBeEnabled('kne_m_0503300');
    elementShouldBeEnabled('kne_m_050427');

    clickElement('kne_m_0503300', true, 'radio');
    elementShouldBeEnabled('kne_m_050387');
    elementShouldBeEnabled('kne_m_050388');
    elementShouldBeEnabled('kne_m_050389');
    elementShouldBeEnabled('kne_m_050390');

    clickElement('kne_m_050427', true, 'radio');
    elementShouldBeEnabled('kne_m_050428');

    clickElement('kne_m_050431', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050432');
    elementShouldBeEnabled('kne_m_050433');
  });
});
