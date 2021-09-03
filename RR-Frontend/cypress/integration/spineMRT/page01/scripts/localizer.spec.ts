import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('SpineMRT - page01 - Patient data', () => {
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

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      clickElement('spi_m_010106', true, 'radio');
      cy.byRRID('spi_m_010104').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C0').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    });
  });
});
