import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
const findingColumn = new FindingColumnPageObject('spi_m_090112', 'spi_m_090107-');

context('Spine Page 09 - Sacroiliac joint', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_SacroiliacJoint.url + '/' + pageId);
        });
      });
    });
  });

  describe('Sacroiliac joint -> Degeneration', () => {
    it('Sacroiliac joint -> Degeneration -> I describe', () => {
      clickElement('spi_m_090106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('spi_m_090112');
      elementShouldBeEnabled('spi_m_090203');
      elementShouldBeEnabled('spi_m_090305');
      elementShouldBeEnabled('spi_m_090307');
      elementShouldBeEnabled('spi_m_090311');
      elementShouldBeEnabled('spi_m_090313');
      elementShouldBeEnabled('spi_m_090314');
      elementShouldBeEnabled('spi_m_090315');

      elementShouldBeEnabled('spi_m_090402');
      elementShouldBeEnabled('spi_m_090403');
      elementShouldBeEnabled('spi_m_090406');

      clickElement('spi_m_090307', true, 'checkbox');
      elementShouldBeEnabled('spi_m_090308');
      elementShouldBeEnabled('spi_m_090309');
      elementShouldBeEnabled('spi_m_090310');

      clickElement('spi_m_090403', true, 'checkbox');
      elementShouldBeEnabled('spi_m_090404');
      elementShouldBeEnabled('spi_m_090405');

      elementShouldBeEnabled('spi_m_090503');
      selectFindingsDropdownOption('spi_m_090503', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('spi_m_090505');
      selectFindingsDropdownOption('spi_m_090505', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('spi_m_090506');
    });
  });
});
