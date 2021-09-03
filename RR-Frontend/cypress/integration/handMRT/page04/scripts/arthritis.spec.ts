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

  it('Arthritis', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('han_m_040107');

    elementShouldBeEnabled('han_m_040245');
    elementShouldBeEnabled('han_m_0403134');
    elementShouldBeEnabled('han_m_0403135');
    elementShouldBeEnabled('han_m_0403136');
    elementShouldBeEnabled('han_m_0403137');
    elementShouldBeEnabled('han_m_0403138');
    elementShouldBeEnabled('han_m_0403139');
    elementShouldBeEnabled('han_m_0403140');
    elementShouldBeEnabled('han_m_0403141');
    elementShouldBeEnabled('han_m_0403142');
    elementShouldBeEnabled('han_m_0403143');
    elementShouldBeEnabled('han_m_0403144');
    elementShouldBeEnabled('han_m_0403145');

    elementShouldBeEnabled('han_m_0404116');
  });
});
