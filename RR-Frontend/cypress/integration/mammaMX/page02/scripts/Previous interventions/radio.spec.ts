import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled, selectDropdownDate } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_020405', 'mam_mx_020404-');

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

  describe('Previous interventions', () => {
    it('Radio', () => {
      clickElement('mam_mx_020403', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      clickElement('mam_mx_020402', false, 'radio');
      elementShouldBeDisabled('mam_mx_020405');
      clickElement('mam_mx_020403', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(8);
      clickElement('mam_mx_020521', false, 'radio');
      selectDropdownDate('mam_mx_020504', 5, 0, true);
      selectDropdownDate('mam_mx_020505', 1, 0, true);
      cy.byRRID('mam_mx_020506')
        .shadowFind('.breast-name')
        .shadowClick();
      cy.byRRID('mam_mx_020506')
        .shadowFind('.breast-name')
        .eq(1)
        .shadowClick();
      cy.byRRID('mam_mx_020506')
        .shadowFind('.breast-name')
        .shadowClick();
    });
  });
});
