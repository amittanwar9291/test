import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 06 - delete_finding', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_m_060111', 'mam_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Diagnosis.url + '/' + pageId);
        });
      });
    });
  });

  it('Mamma MRT(6)->Delete findings entry ', () => {
    cy.byRRID('mam_m_060105').click();
    findingColumn.selectFindingOptionByAppearance(1);

    elementShouldBeEnabled('mam_m_060111');
    cy.byRRID('mam_m_060111').click();

    selectDropdownOptionOS('mam_m_060106-2', 2, true, true);
    elementShouldBeEnabled('mam_m_060106-1');
  });
});
