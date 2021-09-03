import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxCT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Cardiovascular-Heart', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(3);

    elementShouldBeEnabled('tho_c_040232');
    elementShouldBeEnabled('tho_c_040237');
    elementShouldBeEnabled('tho_c_040335');
    elementShouldBeEnabled('tho_c_040340');

    clickElement('tho_c_040232', true, 'checkbox');
    const enabledElements = ['tho_c_040233', 'tho_c_040234', 'tho_c_040235'];
    elementShouldBeEnabled(enabledElements);

    clickElement('tho_c_040237', true, 'checkbox');
    const enabledElements1 = ['tho_c_040238', 'tho_c_040239', 'tho_c_040240', 'tho_c_040241'];
    elementShouldBeEnabled(enabledElements1);

    clickElement('tho_c_040335', true, 'checkbox');
    const enabledElements2 = ['tho_c_040336', 'tho_c_040337', 'tho_c_040338', 'tho_c_040339'];
    elementShouldBeEnabled(enabledElements2);

    clickElement('tho_c_040340', true, 'checkbox');
    const enabledElements3 = ['tho_c_040341', 'tho_c_040344', 'tho_c_040347', 'tho_c_040348'];
    elementShouldBeEnabled(enabledElements3);

    clickElement('tho_c_040341');
    elementShouldBeEnabled('tho_c_040342');

    clickElement('tho_c_040344');
    elementShouldBeEnabled('tho_c_040346');

    clickElement('tho_c_040348');
    elementShouldBeEnabled('tho_c_040349');
  });
});
