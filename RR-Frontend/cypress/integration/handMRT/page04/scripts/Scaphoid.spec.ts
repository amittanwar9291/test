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

  it('Scaphoid', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('han_m_040107');

    elementShouldBeEnabled('han_m_040239');
    elementShouldBeEnabled('han_m_040240');
    elementShouldBeEnabled('han_m_040241');
    elementShouldBeEnabled('han_m_040242');

    elementShouldBeEnabled('han_m_0403125');
    elementShouldBeEnabled('han_m_0403126');
    elementShouldBeEnabled('han_m_0403127');
    elementShouldBeEnabled('han_m_0403130');

    elementShouldBeEnabled('han_m_0404112');
    elementShouldBeEnabled('han_m_0404113');
    elementShouldBeEnabled('han_m_0404114');

    clickElement('han_m_0403126', true, 'radio');
    elementShouldBeEnabled('han_m_0403246');
    elementShouldBeEnabled('han_m_0403247');

    clickElement('han_m_0403127', true, 'radio');
    elementShouldBeEnabled('han_m_0403128');
    elementShouldBeEnabled('han_m_0403129');

    clickElement('han_m_0403130', true, 'radio');
    elementShouldBeEnabled('han_m_0403131');
    elementShouldBeEnabled('han_m_0403132');
    elementShouldBeEnabled('han_m_0403133');
  });
});
