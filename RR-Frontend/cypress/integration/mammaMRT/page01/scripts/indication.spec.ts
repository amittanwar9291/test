import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('page01 - Patient / Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_m_010404', 'mam_m_010403-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_PatientIndication.url + '/' + pageId);
        });
      });
    });
  });

  describe('Indication', () => {
    it('Lumps hardening breast', () => {
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_m_010404');
      elementShouldBeEnabled('mam_m_010503');
      elementShouldBeEnabled('mam_m_010503');
      selectDropdownOption('mam_m_010503', 2);
      cy.byRRID('mam_m_010505')
        .shadowFind('tspan')
        .shadowClick();
      cy.byRRID('mam_m_010505')
        .shadowFind('tspan')
        .eq(1)
        .shadowClick();
    });
  });
});
