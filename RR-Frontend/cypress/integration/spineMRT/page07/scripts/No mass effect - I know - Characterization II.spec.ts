import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Page 07 - SpineMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('spi_m_070106', 'spi_m_070106-');
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

  it('No mass effect - I know - Characterization II', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    cy.get('rr-top-navigation')
      .contains('3')
      .click({ force: true });

    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('7')
      .click({ force: true });

    clickElement('spi_m_070105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(3);
    selectElementByRadioRole(3);

    elementShouldBeEnabled('spi_m_070209');

    cy.byRRID('spi_m_070327').click();

    clickElement('spi_m_070240', true, 'checkbox');

    elementShouldBeEnabled('spi_m_070240');
    elementShouldBeEnabled('spi_m_070243');

    elementShouldBeEnabled('spi_m_070242');
    elementShouldBeEnabled('spi_m_070241');

    elementShouldBeEnabled('spi_m_070245');
    elementShouldBeEnabled('spi_m_070246');
    elementShouldBeEnabled('spi_m_070247');
    elementShouldBeEnabled('spi_m_070248');
    elementShouldBeEnabled('spi_m_070249');
    elementShouldBeEnabled('spi_m_070250');
    elementShouldBeEnabled('spi_m_070389');

    clickElement('spi_m_070389', true, 'checkbox');
    elementShouldBeEnabled('spi_m_070320');
  });
});
