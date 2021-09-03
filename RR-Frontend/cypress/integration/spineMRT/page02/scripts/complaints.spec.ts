import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('SpineMRT - page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

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
    it('Selecting complaints', () => {
      clickElement('spi_m_010106', true, 'radio');
      cy.byRRID('spi_m_010104').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C0').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      cy.byRRID('nav-header-btn-next').click();
      clickElement('spi_m_020303', true, 'radio');
      clickElement('spi_m_020305', true, 'radio');
      clickElement('spi_m_020306', true, 'radio');
      clickElement('spi_m_020304', true, 'radio');
      clickElement('spi_m_020307', true, 'radio');
      clickElement('spi_m_020308', true, 'radio');
    });
  });
});
