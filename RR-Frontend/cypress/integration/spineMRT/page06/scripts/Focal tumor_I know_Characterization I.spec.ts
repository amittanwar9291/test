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

  it('Focal tumor_I know_Characterization I', () => {
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
    elementShouldBeEnabled('spi_m_060344');
    elementShouldBeEnabled('spi_m_060347');

    elementShouldBeEnabled('spi_m_060349');
    elementShouldBeEnabled('spi_m_060350');
    elementShouldBeEnabled('spi_m_060351');

    elementShouldBeEnabled('spi_m_060353');
    elementShouldBeEnabled('spi_m_060354');
    elementShouldBeEnabled('spi_m_060474');
    elementShouldBeEnabled('spi_m_060475');
    elementShouldBeEnabled('spi_m_060476');
    elementShouldBeEnabled('spi_m_060477');

    elementShouldBeEnabled('spi_m_0604202');
    elementShouldBeEnabled('spi_m_0604203');

    clickElement('spi_m_060203', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
  });
});
