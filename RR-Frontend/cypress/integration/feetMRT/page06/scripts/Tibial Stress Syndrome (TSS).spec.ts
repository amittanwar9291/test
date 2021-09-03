import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 06 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  it('Tibial Stress Syndrome (TSS)', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060385');
    elementShouldBeEnabled('anc_m_060386');
    elementShouldBeEnabled('anc_m_060387');
    elementShouldBeEnabled('anc_m_060388');
    elementShouldBeEnabled('anc_m_060389');
  });
});
