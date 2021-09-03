import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, selectDropdownOption, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { thoraxCTRoutes } from '../../../../../src/environments/pages-routes';

context('ThoraxCT page02 - Anamnesis - Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Preliminary Examinations', () => {
    it('CT and MRI', () => {
      clickElement('tho_c_020502', false, 'checkbox');
      selectDropdownOption('tho_c_020503', 1);
      selectDropdownOption('tho_c_020504', 1);
      clickElement('tho_c_020505', false, 'checkbox');
      selectDropdownOption('tho_c_020506', 1);
      selectDropdownOption('tho_c_020507', 1);
    });
  });
});
