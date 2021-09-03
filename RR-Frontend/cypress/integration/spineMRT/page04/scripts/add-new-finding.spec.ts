import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - SpineMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_Configuration.url + '/' + pageId);
        });
      });
    });
  });

  it('Add new finding', () => {
    clickElement('spi_m_040105');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('spi_m_040212');
    elementShouldBeEnabled('spi_m_040309');
    elementShouldBeEnabled('spi_m_040310');

    findingColumn.addFinding();
    elementShouldBeEnabled('none-2');
    findingColumn.selectFindingOptionByAppearance(2);
  });
});
