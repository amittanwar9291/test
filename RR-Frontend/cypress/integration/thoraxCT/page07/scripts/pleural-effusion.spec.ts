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

  it('Pleural effusion', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_070203');
    elementShouldBeEnabled('tho_c_070204');
    elementShouldBeEnabled('tho_c_0702130');
    elementShouldBeEnabled('tho_c_070207');

    elementShouldBeEnabled('tho_c_070402');
    elementShouldBeEnabled('tho_c_070403');
    elementShouldBeEnabled('tho_c_070404');
    elementShouldBeEnabled('tho_c_070406');
    elementShouldBeEnabled('tho_c_070407');

    clickElement('tho_c_070203');
    elementShouldBeEnabled('tho_c_070205');
    elementShouldBeEnabled('tho_c_070302');
    elementShouldBeEnabled('tho_c_070303');
    elementShouldBeEnabled('tho_c_070305');
    elementShouldBeEnabled('tho_c_070306');
    elementShouldBeEnabled('tho_c_070307');

    clickElement('tho_c_070204', true, 'radio');
    elementShouldBeEnabled('tho_c_070205');
    elementShouldBeEnabled('tho_c_070302');
    elementShouldBeEnabled('tho_c_070303');
    elementShouldBeEnabled('tho_c_070305');
    elementShouldBeEnabled('tho_c_070306');
    elementShouldBeEnabled('tho_c_070307');

    clickElement('tho_c_070404');
    elementShouldBeEnabled('tho_c_070405');

    clickElement('tho_c_070407');
    elementShouldBeEnabled('tho_c_070408');
  });
});
