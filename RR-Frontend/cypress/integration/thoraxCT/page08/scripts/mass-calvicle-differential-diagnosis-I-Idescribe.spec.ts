import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_080107', 'tho_c_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Mass Calvicle differential diagnosis I -> I describe', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('tho_c_080107');
      elementShouldBeEnabled('tho_c_080345');
      elementShouldBeEnabled('tho_c_080429');
      cy.byRRID('tho_c_080429').click();

      elementShouldBeEnabled('tho_c_080234');
      elementShouldBeEnabled('tho_c_0803301');
      selectFindingsDropdownOption('tho_c_080234', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('tho_c_0802219');
      elementShouldBeEnabled('tho_c_080236');

      selectFindingsDropdownOption('tho_c_080236', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('tho_c_080237');
      elementShouldBeEnabled('tho_c_080239');
    });
  });
});
