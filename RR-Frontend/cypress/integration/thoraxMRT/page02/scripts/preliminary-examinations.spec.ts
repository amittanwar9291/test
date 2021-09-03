import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, selectDropdownOption, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { thoraxMRTRoutes } from '../../../../../src/environments/pages-routes';

context('ThoraxMRT page02 - Anamnesis - Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Preliminary Examinations', () => {
    it('CT and MRI', () => {
      clickElement('tho_m_020503', false, 'checkbox');
      selectDropdownOption('tho_m_020505', 1);
      selectDropdownOption('tho_m_020506', 1);
      clickElement('tho_m_020507', false, 'checkbox');
      selectDropdownOption('tho_m_020509', 1);
      selectDropdownOption('tho_m_020510', 1);
    });
  });
});
