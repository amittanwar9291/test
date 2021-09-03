import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

const findingColumn = new FindingColumnPageObject('spi_m_080109', 'none-');

context('Spine Page 08 - Paravertebral soft tissues', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_SoftTissues.url + '/' + pageId);
        });
      });
    });
  });

  describe('Vessels / Ureter', () => {
    it('Vessels / Ureter', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('spi_m_080242');
      elementShouldBeEnabled('spi_m_080243');
      elementShouldBeEnabled('spi_m_080244');
      elementShouldBeEnabled('spi_m_080245');
      elementShouldBeEnabled('spi_m_080246');
      elementShouldBeEnabled('spi_m_080247');
      elementShouldBeEnabled('spi_m_080248');

      clickElement('spi_m_080242', true, 'radio');
      elementShouldBeEnabled('spi_m_080327');
      elementShouldBeEnabled('spi_m_080328');
      elementShouldBeEnabled('spi_m_080331');

      clickElement('spi_m_080243', true, 'radio');
      elementShouldBeEnabled('spi_m_080336');
      elementShouldBeEnabled('spi_m_080333');

      clickElement('spi_m_080333', true, 'radio');
      elementShouldBeEnabled('spi_m_080334');

      clickElement('spi_m_080244', true, 'radio');
      elementShouldBeEnabled('spi_m_080336');
      elementShouldBeEnabled('spi_m_080333');

      clickElement('spi_m_080333', true, 'radio');
      elementShouldBeEnabled('spi_m_080334');

      clickElement('spi_m_080245', true, 'radio');
      elementShouldBeEnabled('spi_m_080327');
      elementShouldBeEnabled('spi_m_080328');

      clickElement('spi_m_080333', true, 'radio');
      elementShouldBeEnabled('spi_m_080334');

      clickElement('spi_m_080246', true, 'radio');
      elementShouldBeEnabled('spi_m_080327');
      elementShouldBeEnabled('spi_m_080328');

      clickElement('spi_m_080333', true, 'radio');
      elementShouldBeEnabled('spi_m_080334');

      clickElement('spi_m_080247', true, 'radio');
      elementShouldBeEnabled('spi_m_080346');
      elementShouldBeEnabled('spi_m_080347');
      elementShouldBeEnabled('spi_m_080348');

      clickElement('spi_m_080248', true, 'radio');
      elementShouldBeEnabled('spi_m_080349');
      elementShouldBeEnabled('spi_m_080350');
      elementShouldBeEnabled('spi_m_080353');
      elementShouldBeEnabled('spi_m_080354');
    });
  });
});
