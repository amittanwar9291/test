import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - Anterior cruciate ligament (ACL).spec', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_070107', 'kne_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_OsteoInterface.url + '/' + pageId);
        });
      });
    });
  });

  it('Osteoarthrosis.spec', () => {
    clickElement('kne_m_060105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('kne_m_060107');
    elementShouldBeEnabled('kne_m_060203');

    elementShouldBeEnabled('kne_m_060301');
    elementShouldBeEnabled('kne_m_060302');

    elementShouldBeEnabled('kne_m_060501');
    elementShouldBeEnabled('kne_m_060502');
    elementShouldBeEnabled('kne_m_060503');
    elementShouldBeEnabled('kne_m_060504');
    elementShouldBeEnabled('kne_m_060505');
    elementShouldBeEnabled('kne_m_060507');
    elementShouldBeEnabled('kne_m_060508');

    clickElement('kne_m_060302', true, 'checkbox');
    elementShouldBeEnabled('kne_m_060305');
    elementShouldBeEnabled('kne_m_060306');
    elementShouldBeEnabled('kne_m_060307');
    elementShouldBeEnabled('kne_m_060308');

    elementShouldBeEnabled('kne_m_060401');
    elementShouldBeEnabled('kne_m_060409');
    elementShouldBeEnabled('kne_m_060405');
    elementShouldBeEnabled('kne_m_060408');

    clickElement('kne_m_060401', true, 'checkbox');
    elementShouldBeEnabled('kne_m_060402');

    clickElement('kne_m_060405', true, 'radio');
    elementShouldBeEnabled('kne_m_060406');
    elementShouldBeEnabled('kne_m_060407');
  });
});
