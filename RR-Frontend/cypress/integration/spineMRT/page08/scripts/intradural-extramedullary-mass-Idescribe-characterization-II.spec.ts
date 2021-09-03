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

  describe('Intradural extramedullary mass', () => {
    it('Intradural extramedullary mass ->I describe -> Characterization II', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('spi_m_080109');
      elementShouldBeEnabled('spi_m_080301');
      cy.byRRID('spi_m_080301').click();
      elementShouldBeEnabled('spi_m_080223');
      elementShouldBeEnabled('spi_m_080224');
      elementShouldBeEnabled('spi_m_080225');

      elementShouldBeEnabled('spi_m_0803303');
      elementShouldBeEnabled('spi_m_080410');

      clickElement('spi_m_080223', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080221');

      selectFindingsDropdownOption('spi_m_0803303', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('spi_m_0803305');
      selectFindingsDropdownOption('spi_m_0803305', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('spi_m_0803306');

      clickElement('spi_m_080410', true, 'checkbox');
      elementShouldBeEnabled('spi_m_0804302');
      elementShouldBeEnabled('spi_m_080423');
      elementShouldBeEnabled('spi_m_080424');

      clickElement('spi_m_080424', true, 'radio');
      elementShouldBeEnabled('spi_m_080425');
    });
  });
});
