import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_060106', 'han_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Tendinopathy.url + '/' + pageId);
        });
      });
    });
  });

  it('Flexor tendons', () => {
    clickElement('han_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('han_m_060205');
    elementShouldBeEnabled('han_m_060210');

    elementShouldBeEnabled('han_m_060301');
    elementShouldBeEnabled('han_m_060302');
    elementShouldBeEnabled('han_m_060303');

    elementShouldBeEnabled('han_m_060402');
    elementShouldBeEnabled('han_m_060404');
    elementShouldBeEnabled('han_m_060404');

    elementShouldBeEnabled('han_m_060411');

    clickElement('han_m_060205', true, 'checkbox');
    clickElement('han_m_060210', true, 'checkbox');

    elementShouldBeEnabled('han_m_060207');
    elementShouldBeEnabled('han_m_060206');
    elementShouldBeEnabled('han_m_060208');
    elementShouldBeEnabled('han_m_060209');

    elementShouldBeEnabled('han_m_060211');
    elementShouldBeEnabled('han_m_060212');
    elementShouldBeEnabled('han_m_060213');
    elementShouldBeEnabled('han_m_060214');

    clickElement('han_m_060402', true, 'radio');
    elementShouldBeEnabled('han_m_060403');

    clickElement('han_m_060404', true, 'radio');
    elementShouldBeEnabled('han_m_060406');
    elementShouldBeEnabled('han_m_060407');
    elementShouldBeEnabled('han_m_060405');

    clickElement('han_m_060411', true, 'radio');
    elementShouldBeEnabled('han_m_060412');
    elementShouldBeEnabled('han_m_060413');

    clickElement('han_m_060501', true, 'checkbox');
    elementShouldBeEnabled('han_m_060502');
    elementShouldBeEnabled('han_m_060503');
    elementShouldBeEnabled('han_m_060504');
    elementShouldBeEnabled('han_m_060505');
  });
});
