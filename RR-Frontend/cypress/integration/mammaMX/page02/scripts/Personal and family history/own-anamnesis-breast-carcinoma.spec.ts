import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, selectDropdownDate } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_020107', 'mam_mx_020106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_MedicalHistory.url + '/' + pageId);
        });
      });
    });
  });

  describe('Personal and family history', () => {
    it('own-anamnesis-breast-carcinoma', () => {
      clickElement('mam_mx_020105', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      selectDropdownDate('mam_mx_020211', 5, 0, true);
      selectDropdownDate('mam_mx_020212', 1, 0, true);
      clickElement('mam_mx_020214', false, 'radio');
      cy.byRRID('mam_mx_020218')
        .shadowFind('tspan')
        .shadowClick();
      cy.byRRID('mam_mx_020218')
        .shadowFind('tspan')
        .eq(1)
        .shadowClick();
    });
  });
});
