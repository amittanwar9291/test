import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - ThoraxCT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Pneumothorax', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_070259');
    elementShouldBeEnabled('tho_c_070260');
    elementShouldBeEnabled('tho_c_0702141');
    elementShouldBeEnabled('tho_c_0702142');
    elementShouldBeEnabled('tho_c_0702143');
    elementShouldBeEnabled('tho_c_070262');
    elementShouldBeEnabled('tho_c_070263');
    elementShouldBeEnabled('tho_c_070264');
    elementShouldBeEnabled('tho_c_070265');
    elementShouldBeEnabled('tho_c_0703131');
    elementShouldBeEnabled('tho_c_0703127');

    clickElement('tho_c_0703127');
    elementShouldBeEnabled('tho_c_0703129');
    elementShouldBeEnabled('tho_c_0703130');
  });
});
