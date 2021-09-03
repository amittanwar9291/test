import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_040107', 'han_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Impaction and Impingement Syndrome_Radioulnar impingement', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('han_m_040107');

    elementShouldBeEnabled('han_m_040235');
    elementShouldBeEnabled('han_m_040236');

    clickElement('han_m_040236');

    elementShouldBeEnabled('han_m_0403116');
    elementShouldBeEnabled('han_m_0403117');
    elementShouldBeEnabled('han_m_0403120');

    clickElement('han_m_0403116', true, 'checkbox');
    elementShouldBeEnabled('han_m_0403244');

    clickElement('han_m_0403117', true, 'radio');
    elementShouldBeEnabled('han_m_0403118');
    elementShouldBeEnabled('han_m_0403119');

    clickElement('han_m_0403120', true, 'radio');
    elementShouldBeEnabled('han_m_0403121');
    elementShouldBeEnabled('han_m_0403122');
  });
});
