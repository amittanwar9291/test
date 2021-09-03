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
  it('Developmental disorder-malformation.spec', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true});
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });


    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('7')
      .click({ force: true });
    clickElement('spi_m_070105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('spi_m_070205');
    elementShouldBeEnabled('spi_m_070206');
    elementShouldBeEnabled('spi_m_070207');
    elementShouldBeEnabled('spi_m_070208');

    clickElement('spi_m_070205', true, 'radio');
    elementShouldBeEnabled('spi_m_070309');
    elementShouldBeEnabled('spi_m_070310');
    clickElement('spi_m_070206', true, 'radio');
    elementShouldBeEnabled('spi_m_070402');
    elementShouldBeEnabled('spi_m_070404');
    elementShouldBeEnabled('spi_m_070312');

    clickElement('spi_m_070207', true, 'radio');
    elementShouldBeEnabled('spi_m_070314');
    elementShouldBeEnabled('spi_m_070315');
    elementShouldBeEnabled('spi_m_070317');

    clickElement('spi_m_070208', true, 'radio');
    elementShouldBeEnabled('spi_m_070312');
    elementShouldBeEnabled('spi_m_070322');
    elementShouldBeEnabled('spi_m_070325');
    elementShouldBeEnabled('spi_m_070326');

    clickElement('spi_m_070325', true, 'radio');
    elementShouldBeEnabled('spi_m_070405');
    elementShouldBeEnabled('spi_m_070406');

    clickElement('spi_m_070405', true, 'radio');
    elementShouldBeEnabled('spi_m_070408');
    elementShouldBeEnabled('spi_m_070409');
    elementShouldBeEnabled('spi_m_070410');
    elementShouldBeEnabled('spi_m_070411');
    clickElement('spi_m_070413', true, 'checkbox');
    elementShouldBeEnabled('spi_m_070414');

    clickElement('spi_m_070326', true, 'radio');
    elementShouldBeEnabled('spi_m_070416');
    elementShouldBeEnabled('spi_m_070417');

    clickElement('spi_m_070416', true, 'radio');
    elementShouldBeEnabled('spi_m_070419');
    elementShouldBeEnabled('spi_m_070420');
    elementShouldBeEnabled('spi_m_070421');

    clickElement('spi_m_070417', true, 'radio');
    elementShouldBeEnabled('spi_m_070423');
    elementShouldBeEnabled('spi_m_070424');

    clickElement('spi_m_070423', true, 'radio');
    elementShouldBeEnabled('spi_m_070502');
    elementShouldBeEnabled('spi_m_070508');
    elementShouldBeEnabled('spi_m_070509');
    elementShouldBeEnabled('spi_m_070510');
    elementShouldBeEnabled('spi_m_070511');

    clickElement('spi_m_070502', true, 'radio');
    elementShouldBeEnabled('spi_m_070504');
    elementShouldBeEnabled('spi_m_070505');
    elementShouldBeEnabled('spi_m_070506');
    elementShouldBeEnabled('spi_m_070507');
  });
});
