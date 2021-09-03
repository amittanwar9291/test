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
context('Spine Page 09 - Sacroiliac joint', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('spi_m_090112', 'spi_m_090107-');
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
  describe('Sacroiliac joint -> Inflammation', () => {
    it('Sacroiliac joint -> Inflammation -> I know', () => {
      clickElement('spi_m_090106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);
      selectElementByRadioRole(4, true);
      elementShouldBeEnabled('spi_m_090112');
      elementShouldBeEnabled('spi_m_090303');
      elementShouldBeEnabled('spi_m_090317');
      elementShouldBeEnabled('spi_m_090320');
      elementShouldBeEnabled('spi_m_090322');
      elementShouldBeEnabled('spi_m_090323');

      elementShouldBeEnabled('spi_m_090408');
      elementShouldBeEnabled('spi_m_090416');
      elementShouldBeEnabled('spi_m_090417');

      selectFindingsDropdownOption('spi_m_090303', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('spi_m_090505');

      clickElement('spi_m_090317', true, 'checkbox');
      clickElement('spi_m_090408', true, 'checkbox');

      clickElement('spi_m_090416', true, 'checkbox');

      selectFindingsDropdownOption('spi_m_090505', '.ui-dropdown-label', 1, true, true);
    });
  });
});
