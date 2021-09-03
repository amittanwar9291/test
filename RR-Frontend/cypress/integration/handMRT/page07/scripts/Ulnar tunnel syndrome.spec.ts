import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 07 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_070106', 'han_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_NerveCompression.url + '/' + pageId);
        });
      });
    });
  });

  it('Ulnar tunnel syndrome', () => {
    clickElement('han_m_070105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);

    elementShouldBeEnabled('han_m_070210');
    elementShouldBeEnabled('han_m_070211');
    elementShouldBeEnabled('han_m_070212');
    elementShouldBeEnabled('han_m_070213');
    elementShouldBeEnabled('han_m_070214');

    elementShouldBeEnabled('han_m_070310');
    elementShouldBeEnabled('han_m_070311');

    clickElement('han_m_070311', true, 'radio');
    elementShouldBeEnabled('han_m_070312');
    elementShouldBeEnabled('han_m_070313');
    elementShouldBeEnabled('han_m_070314');
    elementShouldBeEnabled('han_m_070315');

    clickElement('han_m_070312', true, 'radio');
    elementShouldBeEnabled('han_m_070420');
    elementShouldBeEnabled('han_m_070421');
    elementShouldBeEnabled('han_m_070422');

    elementShouldBeEnabled('han_m_070515');
    elementShouldBeEnabled('han_m_070518');
    elementShouldBeEnabled('han_m_070519');
    elementShouldBeEnabled('han_m_070521');

    clickElement('han_m_070313', true, 'radio');
    elementShouldBeEnabled('han_m_070423');
    elementShouldBeEnabled('han_m_070424');
    elementShouldBeEnabled('han_m_070425');

    clickElement('han_m_070314', true, 'radio');
    elementShouldBeEnabled('han_m_070426');
    elementShouldBeEnabled('han_m_070427');
    elementShouldBeEnabled('han_m_070428');

    clickElement('han_m_070315', true, 'radio');
    elementShouldBeEnabled('han_m_070429');
    elementShouldBeEnabled('han_m_070430');
    elementShouldBeEnabled('han_m_070431');
  });
});
