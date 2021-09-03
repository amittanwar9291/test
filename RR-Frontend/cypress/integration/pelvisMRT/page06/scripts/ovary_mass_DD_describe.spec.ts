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
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(0);

    clickElement('pel_m_060401');
    elementShouldBeEnabled('pel_m_060222');

    selectDropdownOptionOS('pel_m_060222', 7, true, true);
    elementShouldBeEnabled('pel_m_060319');
    elementShouldBeEnabled('pel_m_060321');
    elementShouldBeEnabled('pel_m_060324');
    elementShouldBeEnabled('pel_m_060325');

    elementShouldBeEnabled('pel_m_060224');
    selectDropdownOptionOS('pel_m_060224', 6, true, true);
    elementShouldBeEnabled('pel_m_060225');
    elementShouldBeEnabled('pel_m_060430');

    selectDropdownOptionOS('pel_m_060222', 9, true, true);
    elementShouldBeEnabled('pel_m_060326');
    elementShouldBeEnabled('pel_m_060224');

    selectDropdownOptionOS('pel_m_060224', 4, true, true);
    elementShouldBeEnabled('pel_m_060424');
    elementShouldBeEnabled('pel_m_060426');
    elementShouldBeEnabled('pel_m_060428');
    elementShouldBeEnabled('pel_m_060429');

    selectDropdownOptionOS('pel_m_060222', 15, true, true);
    elementShouldBeEnabled('pel_m_060327');
    elementShouldBeEnabled('pel_m_060328');
    elementShouldBeEnabled('pel_m_060224');

    selectDropdownOptionOS('pel_m_060224', 19, true, true);
    elementShouldBeEnabled('pel_m_060433');
    elementShouldBeEnabled('pel_m_060225');
  });
});
