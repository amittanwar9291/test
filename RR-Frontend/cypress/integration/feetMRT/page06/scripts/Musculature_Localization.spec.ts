import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 05 - FeetMRT', () => {
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

  it('Musculature_Localization', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060252');
    elementShouldBeEnabled('anc_m_060253');
    elementShouldBeEnabled('anc_m_060254');
    elementShouldBeEnabled('anc_m_060255');
    elementShouldBeEnabled('anc_m_060256');
    elementShouldBeEnabled('anc_m_060258');

    elementShouldBeEnabled('anc_m_0603136');
    elementShouldBeEnabled('anc_m_060551');
    elementShouldBeEnabled('anc_m_060552');
    elementShouldBeEnabled('anc_m_060556');
    elementShouldBeEnabled('anc_m_060555');

    clickElement('anc_m_0603136', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060368');
    elementShouldBeEnabled('anc_m_060369');
    elementShouldBeEnabled('anc_m_060370');
    elementShouldBeEnabled('anc_m_060371');

    clickElement('anc_m_060556', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060557');
  });
});
