import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, visitPageNumber } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Ovary, mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('pel_m_060107');

    elementShouldBeEnabled('pel_m_060249');
    elementShouldBeEnabled('pel_m_060250');
    elementShouldBeEnabled('pel_m_060255');
    elementShouldBeEnabled('pel_m_060256');
    elementShouldBeEnabled('pel_m_060257');
    elementShouldBeEnabled('pel_m_060258');

    elementShouldBeEnabled('pel_m_060343');
    elementShouldBeEnabled('pel_m_060345');
    elementShouldBeEnabled('pel_m_060346');
    elementShouldBeEnabled('pel_m_0603412');
    elementShouldBeEnabled('pel_m_060347');
    elementShouldBeEnabled('pel_m_060350');
    elementShouldBeEnabled('pel_m_060351');
    elementShouldBeEnabled('pel_m_060352');

    elementShouldBeEnabled('pel_m_0604407');
    elementShouldBeEnabled('pel_m_060450');

    elementShouldBeEnabled('pel_m_060521');

    clickElement('pel_m_0603412', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603413');

    clickElement('pel_m_060347', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060348');

    clickElement('pel_m_0604407', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604408');

    clickElement('pel_m_060450', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060451');
    elementShouldBeEnabled('pel_m_060452');
    elementShouldBeEnabled('pel_m_060453');
    elementShouldBeEnabled('pel_m_060454');

    selectDropdownOptionOS('pel_m_060521', 2, true, true);
  });
});
