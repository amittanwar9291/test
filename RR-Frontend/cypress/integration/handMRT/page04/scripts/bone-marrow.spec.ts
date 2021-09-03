import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Bone Marrow Edema', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('han_m_040107');

    elementShouldBeEnabled('han_m_0402103');
    elementShouldBeEnabled('han_m_0403266');
    elementShouldBeEnabled('han_m_0403267');
    elementShouldBeEnabled('han_m_0403268');
    elementShouldBeEnabled('han_m_0403269');
    elementShouldBeEnabled('han_m_0403270');

    elementShouldBeEnabled('han_m_0404131');
    elementShouldBeEnabled('han_m_0404132');
    elementShouldBeEnabled('han_m_0404133');
    elementShouldBeEnabled('han_m_0404134');

    elementShouldBeEnabled('han_m_0405125');

    selectDropdownOptionOS('han_m_0405125', 3, true, true);
    elementShouldBeEnabled('han_m_0405126');
  });
});
