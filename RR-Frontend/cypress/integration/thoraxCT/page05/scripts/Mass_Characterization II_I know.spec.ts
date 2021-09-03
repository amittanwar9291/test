import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Page 05 - Thoracic CT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_050106', 'tho_c_050106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_LungParenchyma.url + '/' + pageId);
        });
      });
    });
  });
  it('Mass_Characterization II_I know', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);
    selectElementByRadioRole(3);

    elementShouldBeEnabled('tho_c_050204');

    cy.byRRID('tho_c_050301').click();

    elementShouldBeEnabled('tho_c_0502316');
    elementShouldBeEnabled('tho_c_0502317');
    elementShouldBeEnabled('tho_c_0502318');
    elementShouldBeEnabled('tho_c_0502319');
    elementShouldBeEnabled('tho_c_0502319');

    elementShouldBeEnabled('tho_c_0503209');
    elementShouldBeEnabled('tho_c_0503210');

    elementShouldBeEnabled('tho_c_0503212');
    elementShouldBeEnabled('tho_c_0503213');
    elementShouldBeEnabled('tho_c_0503214');
    elementShouldBeEnabled('tho_c_0503215');

    elementShouldBeEnabled('tho_c_0503215');

    elementShouldBeEnabled('tho_c_0504206');
    elementShouldBeEnabled('tho_c_0504209');
    elementShouldBeEnabled('tho_c_0504212');
    elementShouldBeEnabled('tho_c_0504215');

    clickElement('tho_c_0504206', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0504207');
    elementShouldBeEnabled('tho_c_0504208');

    clickElement('tho_c_0504209', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0504210');
    elementShouldBeEnabled('tho_c_0504211');

    clickElement('tho_c_0504212', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0504213');
    elementShouldBeEnabled('tho_c_0504214');

    clickElement('tho_c_0504215', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0504216');
    elementShouldBeEnabled('tho_c_0504217');

    clickElement('tho_c_0505203', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0505204');
    elementShouldBeEnabled('tho_c_0505205');

    clickElement('tho_c_0505207', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0505208');
    elementShouldBeEnabled('isPlexusCervicalisLeft');

    clickElement('tho_c_0505210', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0505211');
    elementShouldBeEnabled('tho_c_0505212');
  });
});
