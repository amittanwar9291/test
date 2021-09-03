import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Clavicular Mass -> DD I -> I describe', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      cy.byRRID('tho_m_070529').click();
      elementShouldBeEnabled('tho_m_070259');
      elementShouldBeEnabled('tho_m_070266');
      elementShouldBeEnabled('uni_07_003');
      elementShouldBeEnabled('uni_07_005');
      elementShouldBeEnabled('uni_07_007');

      selectFindingsDropdownOption('tho_m_070259', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('tho_m_070260');
      elementShouldBeEnabled('tho_m_070262');

      selectFindingsDropdownOption('tho_m_070262', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('tho_m_070263');
      elementShouldBeEnabled('tho_m_070265');
    });
  });
});
