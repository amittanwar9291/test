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
  it('Pathology of the vertebral arch', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-OC]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('spi_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(2);
    clickElement('spi_m_060204', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T4]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    elementShouldBeEnabled('spi_m_0602101');
    elementShouldBeEnabled('spi_m_0602102');
    elementShouldBeEnabled('spi_m_0602103');

    elementShouldBeEnabled('spi_m_060333');
    elementShouldBeEnabled('spi_m_060334');
    elementShouldBeEnabled('spi_m_060335');
    elementShouldBeEnabled('spi_m_060336');

    elementShouldBeEnabled('spi_m_060338');

    clickElement('spi_m_060334', true, 'radio');
    elementShouldBeEnabled('spi_m_060455');
    elementShouldBeEnabled('spi_m_060456');
    elementShouldBeEnabled('spi_m_060457');
    elementShouldBeEnabled('spi_m_060458');
    elementShouldBeEnabled('spi_m_060459');
  });
});
