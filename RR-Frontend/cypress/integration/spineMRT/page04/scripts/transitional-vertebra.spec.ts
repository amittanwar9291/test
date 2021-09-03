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

context('Page 04 - SpineMRT', () => {
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

  it('Transitional vertebra', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C7]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });

    clickElement('spi_m_040105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('spi_m_040214');
    elementShouldBeEnabled('spi_m_040216');
    elementShouldBeEnabled('spi_m_040218');

    clickElement('spi_m_040214');
    elementShouldBeEnabled('spi_m_040215');

    clickElement('spi_m_040216');
    elementShouldBeEnabled('spi_m_040217');

    clickElement('spi_m_040218');
    elementShouldBeEnabled('spi_m_040219');
    elementShouldBeEnabled('spi_m_040220');

    clickElement('spi_m_040220');
    elementShouldBeEnabled('spi_m_040221');
    elementShouldBeEnabled('spi_m_040222');
    elementShouldBeEnabled('spi_m_040223');
    elementShouldBeEnabled('spi_m_040224');
  });
});
