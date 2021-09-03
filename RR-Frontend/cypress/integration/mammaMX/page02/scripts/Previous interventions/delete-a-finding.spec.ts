import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled } from '../../../../../shared/service';
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
    it('delete-a-finding', () => {
      clickElement('mam_mx_020403', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      findingColumn.selectFindingOptionByAppearance(12);
      elementShouldBeDisabled('mam_mx_020405');
    });
  });
});
