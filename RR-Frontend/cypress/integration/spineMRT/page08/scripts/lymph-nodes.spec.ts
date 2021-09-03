import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
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

  describe('Lymph nodes', () => {
    it('Lymph nodes', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('spi_m_080227');
      elementShouldBeEnabled('spi_m_080231');
      elementShouldBeEnabled('spi_m_080232');
      elementShouldBeEnabled('spi_m_080233');
      elementShouldBeEnabled('spi_m_080237');

      elementShouldBeEnabled('spi_m_080321');
      elementShouldBeEnabled('spi_m_080322');

      clickElement('spi_m_080227', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080229');
      elementShouldBeEnabled('spi_m_080230');

      clickElement('spi_m_080233', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080235');
      elementShouldBeEnabled('spi_m_080236');

      clickElement('spi_m_080237', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080239');
      elementShouldBeEnabled('spi_m_080240');

      clickElement('spi_m_080322', true, 'radio');
      elementShouldBeEnabled('spi_m_080324');
    });
  });
});
