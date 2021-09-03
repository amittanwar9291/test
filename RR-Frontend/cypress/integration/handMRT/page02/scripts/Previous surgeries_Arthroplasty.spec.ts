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
  const findingColumns = new FindingColumnPageObject('han_m_020303', 'han_m_020303-');

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

  it('Previous surgeries_Arthroplasty', () => {
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('han_m_020106');
    findingColumns.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('han_m_020406');
    elementShouldBeEnabled('han_m_020407');
    elementShouldBeEnabled('han_m_020408');
  });
});
