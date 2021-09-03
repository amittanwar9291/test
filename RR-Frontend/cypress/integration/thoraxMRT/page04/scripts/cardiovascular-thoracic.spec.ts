import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Cardiovascular/Thoracic aorta', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040230');
    elementShouldBeEnabled('tho_m_040231');

    clickElement('tho_m_040230');
    elementShouldBeEnabled('tho_m_040342');
    elementShouldBeEnabled('tho_m_040343');
    elementShouldBeEnabled('tho_m_040344');

    clickElement('tho_m_040342');
    elementShouldBeEnabled('tho_m_040434');
    elementShouldBeEnabled('tho_m_040435');
    elementShouldBeEnabled('tho_m_040436');

    clickElement('tho_m_040343');
    elementShouldBeEnabled('tho_m_040438');
    elementShouldBeEnabled('tho_m_040439');

    clickElement('tho_m_040344');
    elementShouldBeEnabled('tho_m_040441');
    elementShouldBeEnabled('tho_m_040442');
    elementShouldBeEnabled('tho_m_040443');
    elementShouldBeEnabled('tho_m_040444');
    elementShouldBeEnabled('tho_m_040445');
    elementShouldBeEnabled('tho_m_040446');
    elementShouldBeEnabled('tho_m_040447');

    clickElement('tho_m_040231');
    elementShouldBeEnabled('tho_m_040347');
    elementShouldBeEnabled('tho_m_040349');
    elementShouldBeEnabled('tho_m_040350');
    elementShouldBeEnabled('tho_m_040450');
    elementShouldBeEnabled('tho_m_040453');
    elementShouldBeEnabled('tho_m_040456');
    elementShouldBeEnabled('tho_m_040459');
    elementShouldBeEnabled('tho_m_040525');
    elementShouldBeEnabled('tho_m_040526');
    elementShouldBeEnabled('tho_m_040527');
    elementShouldBeEnabled('tho_m_040529');
    elementShouldBeEnabled('tho_m_040532');
  });
});
