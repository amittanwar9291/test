import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  it('Spinal canal stenosis', () => {
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
      .contains('7')
      .click({ force: true });

    clickElement('spi_m_070105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('spi_m_070302');
    elementShouldBeEnabled('spi_m_070303');
    elementShouldBeEnabled('spi_m_070304');
    elementShouldBeEnabled('spi_m_070306');
    elementShouldBeEnabled('spi_m_070308');
    elementShouldBeEnabled('spi_m_070203');

    clickElement('spi_m_070203', true);

    cy.get('.ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L1]')
      .click({ force: true });
    cy.get('.ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
  });
});
