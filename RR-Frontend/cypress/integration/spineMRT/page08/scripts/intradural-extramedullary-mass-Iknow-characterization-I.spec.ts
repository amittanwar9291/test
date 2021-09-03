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

  describe('Intradural extramedullary mass', () => {
    it('Intradural extramedullary mass -> I know-> Characterization I', () => {
      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('spi_m_080109');
      elementShouldBeEnabled('spi_m_080202');
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('spi_m_080220');
      elementShouldBeEnabled('spi_m_080206');
      elementShouldBeEnabled('spi_m_0802304');

      elementShouldBeEnabled('spi_m_080315');
      elementShouldBeEnabled('spi_m_080317');
      elementShouldBeEnabled('spi_m_080319');
      elementShouldBeEnabled('spi_m_080414');
      elementShouldBeEnabled('spi_m_080415');

      elementShouldBeEnabled('spi_m_080417');
      elementShouldBeEnabled('spi_m_080418');
      elementShouldBeEnabled('spi_m_080419');
      elementShouldBeEnabled('spi_m_080420');
      elementShouldBeEnabled('spi_m_080421');

      elementShouldBeEnabled('spi_m_080517');
      elementShouldBeEnabled('spi_m_080518');
    });
  });
});
