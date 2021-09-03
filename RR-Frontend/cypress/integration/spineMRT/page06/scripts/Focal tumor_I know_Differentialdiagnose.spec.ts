import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 06 - SpineMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });
  it('Focal tumor_I know_Differentialdiagnose.spec', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('spi_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(4);
    selectElementByRadioRole(3);
    selectFindingsDropdownOption('spi_m_060344', '.ui-dropdown-label', 2, true, true);

    clickElement('spi_m_060427', true);

    selectFindingsDropdownOption('spi_m_060228', '.ui-dropdown-label', 2, true, true);
    elementShouldBeEnabled('spi_m_060229');
    elementShouldBeEnabled('spi_m_060231');
  });
});
