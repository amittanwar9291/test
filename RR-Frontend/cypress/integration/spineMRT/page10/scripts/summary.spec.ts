import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
context('Spine Page 10- Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });
  describe('Summary', () => {
    it('Summary', () => {
      elementShouldBeEnabled('spi_m_100104');
      elementShouldBeEnabled('spi_m_100105');
      elementShouldBeEnabled('spi_m_100106');
      elementShouldBeEnabled('spi_m_100107');

      elementShouldBeEnabled('spi_m_100109');
      elementShouldBeEnabled('spi_m_100110');
      elementShouldBeEnabled('spi_m_100111');
      elementShouldBeEnabled('spi_m_100112');
      elementShouldBeEnabled('spi_m_100201');
      elementShouldBeEnabled('spi_m_100301');

      clickElement('spi_m_100201', true, 'checkbox');
      elementShouldBeEnabled('spi_m_100203');
      elementShouldBeEnabled('spi_m_100204');
      elementShouldBeEnabled('spi_m_100205');
      elementShouldBeEnabled('spi_m_100208');

      clickElement('spi_m_100205', true, 'radio');
      elementShouldBeEnabled('spi_m_100206');
      elementShouldBeEnabled('spi_m_100207');

      clickElement('spi_m_100208', true, 'radio');
      elementShouldBeEnabled('spi_m_100209');
      elementShouldBeEnabled('spi_m_100210');
    });
  });
});
