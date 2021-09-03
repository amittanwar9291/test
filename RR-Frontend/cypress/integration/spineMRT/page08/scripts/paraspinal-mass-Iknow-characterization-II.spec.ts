import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectFindingsDropdownOption
} from '../../../../shared/service';
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

  describe('Paraspinal mass', () => {
    it('Paraspinal Mass -> I know -> Characterization II', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('spi_m_080202');
      elementShouldBeEnabled('spi_m_080301');
      cy.byRRID('spi_m_080301').click();

      elementShouldBeEnabled('spi_m_080212');
      elementShouldBeEnabled('spi_m_080213');
      elementShouldBeEnabled('spi_m_080214');
      elementShouldBeEnabled('spi_m_080410');

      clickElement('spi_m_080214', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080215');
      elementShouldBeEnabled('spi_m_080216');
      elementShouldBeEnabled('spi_m_080217');

      clickElement('spi_m_080217', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080219');

      clickElement('spi_m_080410', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080412');
    });
  });
});
