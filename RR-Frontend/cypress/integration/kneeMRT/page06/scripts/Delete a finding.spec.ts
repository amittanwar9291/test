import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  elementShouldBeDisabled,
  selectDropdownOptionOS
} from '../../../../shared/service';
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

  it('Delete a finding.spec', () => {
    clickElement('kne_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);

    elementShouldBeEnabled('kne_m_060107');
    elementShouldBeEnabled('kne_m_060203');

    elementShouldBeEnabled('kne_m_060313');
    elementShouldBeEnabled('kne_m_060314');
    elementShouldBeEnabled('kne_m_060315');
    elementShouldBeEnabled('kne_m_060316');
    elementShouldBeEnabled('kne_m_060317');
    cy.byRRID('kne_m_060107').click();
    elementShouldBeEnabled('kne_m_060106-2');
    elementShouldBeDisabled('kne_m_060107');
    selectDropdownOptionOS('kne_m_060106-2', 7, true, true);
    elementShouldBeEnabled('kne_m_060106-1');
  });
});
