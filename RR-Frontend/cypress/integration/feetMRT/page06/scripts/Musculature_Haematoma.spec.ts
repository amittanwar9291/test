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

  it('Musculature_Haematoma', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('none');

    clickElement('anc_m_0603141');

    elementShouldBeEnabled('anc_m_060260');

    clickElement('anc_m_060260', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060262');
    elementShouldBeEnabled('anc_m_060263');
    elementShouldBeEnabled('anc_m_060264');

    elementShouldBeEnabled('anc_m_060266');
    elementShouldBeEnabled('anc_m_060268');

    elementShouldBeEnabled('anc_m_060379');
    elementShouldBeEnabled('anc_m_060380');
    elementShouldBeEnabled('anc_m_060381');
  });
});
