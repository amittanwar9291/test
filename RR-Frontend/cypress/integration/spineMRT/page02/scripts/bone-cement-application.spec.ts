import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('SpineMRT - page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('spi_m_020106', 'spi_m_020105-');
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

  describe('Add new intervention', () => {
    it('Selecting bone cement application', () => {
      clickElement('spi_m_010106', true, 'radio');
      cy.byRRID('spi_m_010104').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C0').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      cy.byRRID('nav-header-btn-next').click();
      findingColumn.selectFindingOptionByAppearance(4);
      cy.get('rr-spine-simple').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C2').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      clickElement('spi_m_020211', true, 'radio');
      clickElement('spi_m_020212', true, 'radio');
      cy.get('rr-spine-simple').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C3').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      elementShouldBeDisabled('spi_m_020211');
      elementShouldBeDisabled('spi_m_020212');
    });
  });
});
