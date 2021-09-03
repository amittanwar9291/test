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
  it('Nodule_Characterization I_I know', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    cy.byRRID('tho_c_050202').click();

    selectElementByRadioRole(3);

    elementShouldBeEnabled('tho_c_0502301');
    elementShouldBeEnabled('tho_c_0502401');
    clickElement('tho_c_0502401', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0502303');
    elementShouldBeEnabled('tho_c_0502304');

    elementShouldBeEnabled('tho_c_050204');
    elementShouldBeEnabled('tho_c_050205');

    elementShouldBeEnabled('tho_c_050303');
    elementShouldBeEnabled('tho_c_050304');
    elementShouldBeEnabled('tho_c_050305');
    elementShouldBeEnabled('tho_c_050306');
    elementShouldBeEnabled('tho_c_050309');
    elementShouldBeEnabled('tho_c_050310');

    elementShouldBeEnabled('tho_c_050405');
    elementShouldBeEnabled('tho_c_050408');

    elementShouldBeEnabled('uni_05_003');
    elementShouldBeEnabled('uni_05_005');
    elementShouldBeEnabled('uni_05_006');

    elementShouldBeEnabled('tho_c_050502');
    elementShouldBeEnabled('tho_c_050503');

    elementShouldBeEnabled('tho_c_050506');

    elementShouldBeEnabled('tho_c_050508');
    elementShouldBeEnabled('tho_c_050509');
    elementShouldBeEnabled('tho_c_050512');
    elementShouldBeEnabled('tho_c_050511');

    clickElement('tho_c_050310', true, 'radio');
    elementShouldBeEnabled('tho_c_050312');

    clickElement('tho_c_050503', true, 'radio');
    elementShouldBeEnabled('tho_c_050504');
    elementShouldBeEnabled('tho_c_050505');

    clickElement('tho_c_050506', true, 'radio');
    elementShouldBeEnabled('tho_c_050507');
  });
});
