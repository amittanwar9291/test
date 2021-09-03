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

  describe('Indication', () => {
    it('Add Indications', () => {
      selectDropdownOption('tho_c_020105', 1);
      clickElement('tho_c_020106', false, 'checkbox');
      selectDropdownOption('tho_c_020105', 2);
      clickElement('tho_c_020106', false, 'checkbox');
      clickElement('tho_c_020204', false, 'radio');
      clickElement('tho_c_020205', false, 'radio');
      cy.byRRID('tho_c_020206').type('11');
      selectDropdownOption('tho_c_020105', 3);
      clickElement('tho_c_020106', false, 'checkbox');
      selectDropdownOption('tho_c_020105', 4);
      clickElement('tho_c_020106', false, 'checkbox');
      selectDropdownOption('tho_c_020105', 5);
      clickElement('tho_c_020106', false, 'checkbox');
      selectDropdownOption('tho_c_020105', 6);
      clickElement('tho_c_020106', false, 'checkbox');
      selectDropdownOption('tho_c_020105', 7);
      clickElement('tho_c_020106', false, 'checkbox');
    });
  });
});
