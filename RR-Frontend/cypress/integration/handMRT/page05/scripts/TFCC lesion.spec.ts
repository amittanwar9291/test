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

  it('TFCC lesion', () => {
    clickElement('han_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('han_m_050211');
    elementShouldBeEnabled('han_m_050238');
    elementShouldBeEnabled('han_m_050239');

    clickElement('han_m_050211', true, 'radio');
    elementShouldBeEnabled('han_m_050307');
    elementShouldBeEnabled('han_m_050308');
    elementShouldBeEnabled('han_m_050309');
    elementShouldBeEnabled('han_m_050310');
    clickElement('han_m_050238', true, 'radio');
    elementShouldBeEnabled('han_m_050302');
    elementShouldBeEnabled('han_m_050303');
    elementShouldBeEnabled('han_m_050304');
    elementShouldBeEnabled('han_m_050305');
    elementShouldBeEnabled('han_m_050306');
  });
});
