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
  it('Focal tumor_I describe_Characterization II.spec', () => {
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

    cy.get('.ui-tabview-title')
      .eq(0)
      .click();

    elementShouldBeEnabled('spi_m_060215');
    elementShouldBeEnabled('spi_m_060216');
    elementShouldBeEnabled('spi_m_060217');
    elementShouldBeEnabled('spi_m_060218');

    elementShouldBeEnabled('spi_m_060481');
    elementShouldBeEnabled('spi_m_060482');
    elementShouldBeEnabled('spi_m_060483');

    elementShouldBeEnabled('spi_m_060487');
    elementShouldBeEnabled('spi_m_060488');
    elementShouldBeEnabled('spi_m_060489');

    elementShouldBeEnabled('spi_m_060550');
    elementShouldBeEnabled('spi_m_060551');
    elementShouldBeEnabled('spi_m_060552');
    elementShouldBeEnabled('spi_m_060553');
    elementShouldBeEnabled('spi_m_060554');
    elementShouldBeEnabled('spi_m_060555');
    elementShouldBeEnabled('spi_m_060556');
    elementShouldBeEnabled('spi_m_060557');
    elementShouldBeEnabled('spi_m_060558');
    elementShouldBeEnabled('spi_m_060559');
    elementShouldBeEnabled('spi_m_060560');

    clickElement('spi_m_060483', true, 'checkbox');
    elementShouldBeEnabled('spi_m_060484');
    elementShouldBeEnabled('spi_m_060485');

    clickElement('spi_m_060560', true, 'checkbox');
    elementShouldBeEnabled('spi_m_060561');
  });
});
