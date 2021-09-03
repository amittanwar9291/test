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

  describe('Paraspinal mass', () => {
    it('Paraspinal Mass -> I describe -> Characterization I', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('spi_m_080109');
      elementShouldBeEnabled('spi_m_080204');
      elementShouldBeEnabled('spi_m_080206');
      elementShouldBeEnabled('spi_m_080209');

      elementShouldBeEnabled('spi_m_080302');
      elementShouldBeEnabled('spi_m_080404');
      elementShouldBeEnabled('spi_m_080406');
      elementShouldBeEnabled('spi_m_080408');
      elementShouldBeEnabled('spi_m_080409');

      elementShouldBeEnabled('spi_m_080513');
      elementShouldBeEnabled('spi_m_080514');

      elementShouldBeEnabled('spi_m_080509');
      elementShouldBeEnabled('spi_m_080510');
      elementShouldBeEnabled('spi_m_080511');
    });
  });
});
