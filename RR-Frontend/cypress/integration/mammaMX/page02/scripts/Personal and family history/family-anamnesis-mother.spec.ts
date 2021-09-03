import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, selectDropdownOption } from '../../../../../shared/service';
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
    it('family-anamnesis-mother', () => {
      clickElement('mam_mx_020105', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      clickElement('mam_mx_020203', false, 'checkbox');
      selectDropdownOption('mam_mx_020204', 1);
      selectDropdownOption('mam_mx_020206', 3);
      clickElement('mam_mx_020207', false, 'checkbox');
      selectDropdownOption('mam_mx_020209', 3);
    });
  });
});
