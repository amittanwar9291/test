import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('page01 - Patient / Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_010404', 'mam_mx_010403-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_PatientIndication.url + '/' + pageId);
        });
      });
    });
  });

  describe('Indication', () => {
    it('Lumps hardening breast', () => {
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_mx_010404');
      elementShouldBeEnabled('mam_mx_010503');
      elementShouldBeEnabled('mam_mx_010503');
      selectDropdownOption('mam_mx_010503', 2);
      cy.byRRID('mam_mx_010505')
        .shadowFind('tspan')
        .shadowClick();
      cy.byRRID('mam_mx_010505')
        .shadowFind('tspan')
        .eq(1)
        .shadowClick();
    });
  });
});
