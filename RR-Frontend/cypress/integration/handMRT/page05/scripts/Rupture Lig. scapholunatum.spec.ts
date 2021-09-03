import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 05 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_050106', 'han_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_CapsuleAndRibbons.url + '/' + pageId);
        });
      });
    });
  });

  it('Rupture Lig. scapholunatum', () => {
    clickElement('han_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('han_m_050203');
    elementShouldBeEnabled('han_m_050204');
    elementShouldBeEnabled('han_m_050205');
    elementShouldBeEnabled('han_m_050206');
    elementShouldBeEnabled('han_m_050207');
    elementShouldBeEnabled('han_m_050208');

    clickElement('han_m_050206', true, 'checkbox');
    elementShouldBeEnabled('han_m_050224');
    elementShouldBeEnabled('han_m_050225');

    clickElement('han_m_050207', true, 'checkbox');
    elementShouldBeEnabled('han_m_050227');
    elementShouldBeEnabled('han_m_050228');
    elementShouldBeEnabled('han_m_050229');

    clickElement('han_m_050208', true, 'checkbox');
  });
});
