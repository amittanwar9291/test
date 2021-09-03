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

  it('Posterior cruciate ligament (PCL)', () => {
    clickElement('mam_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(7);

    elementShouldBeEnabled('kne_m_050223');
    elementShouldBeEnabled('kne_m_050224');

    clickElement('kne_m_050223', true, 'radio');
    elementShouldBeEnabled('kne_m_050366');
    elementShouldBeEnabled('kne_m_050434');
    elementShouldBeEnabled('kne_m_050438');
    elementShouldBeEnabled('kne_m_050440');
    elementShouldBeEnabled('kne_m_050441');

    clickElement('kne_m_050366', true, 'radio');
    elementShouldBeEnabled('kne_m_050367');
    elementShouldBeEnabled('kne_m_050368');
    elementShouldBeEnabled('kne_m_050369');
    elementShouldBeEnabled('kne_m_050393');
    elementShouldBeEnabled('kne_m_050397');
    elementShouldBeEnabled('kne_m_050398');

    clickElement('kne_m_050369', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050370');
    elementShouldBeEnabled('kne_m_050371');

    clickElement('kne_m_050393', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050394');

    clickElement('kne_m_050394', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050395');
    elementShouldBeEnabled('kne_m_050396');

    elementShouldBeEnabled('kne_m_050397');
    elementShouldBeEnabled('kne_m_050398');

    elementShouldBeEnabled('kne_m_050434');

    elementShouldBeEnabled('kne_m_050438');

    elementShouldBeEnabled('kne_m_050440');
    elementShouldBeEnabled('kne_m_050441');
    elementShouldBeEnabled('kne_m_050442');

    clickElement('kne_m_050224', true, 'radio');
    elementShouldBeEnabled('kne_m_0503301');
    elementShouldBeEnabled('kne_m_050443');

    clickElement('kne_m_0503301', true, 'radio');
    elementShouldBeEnabled('kne_m_050387');
    elementShouldBeEnabled('kne_m_050388');
    elementShouldBeEnabled('kne_m_050389');
    elementShouldBeEnabled('kne_m_050390');

    clickElement('kne_m_050443', true, 'radio');
    elementShouldBeEnabled('kne_m_050428');
    elementShouldBeEnabled('kne_m_050429');
    elementShouldBeEnabled('kne_m_050431');

    clickElement('kne_m_050431', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050432');
    elementShouldBeEnabled('kne_m_050433');
  });
});
