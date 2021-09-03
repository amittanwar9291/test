import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('SpineMRT - page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('spi_m_020106', 'spi_m_020105-');
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

  describe('delete an intervention', () => {
    it('delete an intervention', () => {
      clickElement('spi_m_010106', true, 'radio');
      cy.byRRID('spi_m_010104').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C0').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      cy.byRRID('nav-header-btn-next').click();
      findingColumn.selectFindingOptionByAppearance(1);
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeDisabled('spi_m_020106');
      findingColumn.selectFindingOptionByAppearance(1);
    });
  });
});
