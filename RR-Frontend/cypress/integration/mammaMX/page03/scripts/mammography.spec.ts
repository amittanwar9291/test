import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Technique', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_030203', 'mam_mx_030202-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Technique', () => {
    it('Mammography', () => {
      clickElement('mam_mx_030105', false, 'checkbox');
      cy.byRRID('mam_mx_030108')
        .shadowFind('tspan')
        .shadowClick();
      cy.byRRID('mam_mx_030111')
        .shadowFind('tspan')
        .shadowClick();
      findingColumn.selectFindingOptionByAppearance(11);
      clickElement('mam_mx_030301', false, 'checkbox');
      cy.byRRID('mam_mx_030302').type('5');
      clickElement('mam_mx_030503', false, 'checkbox');
    });
  });
});
