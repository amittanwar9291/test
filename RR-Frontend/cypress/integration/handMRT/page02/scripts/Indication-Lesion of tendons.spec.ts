import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('page02 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_020105', 'han_m_020105-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Indication-Lesion of tendons', () => {
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('han_m_020106');

    elementShouldBeEnabled('han_m_020206');
    elementShouldBeEnabled('han_m_020207');

    elementShouldBeEnabled('han_m_020218');
    elementShouldBeEnabled('han_m_020219');
    elementShouldBeEnabled('han_m_020220');
    elementShouldBeEnabled('han_m_020221');
  });
});
