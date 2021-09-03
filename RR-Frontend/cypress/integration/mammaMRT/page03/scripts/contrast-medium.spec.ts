import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page03 - Contrast enhanced yes', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('CM reinforced -> Yes -> Contrast medium', () => {
    it('Contrast medium -> Active substance', () => {
      clickElement('uni_x_030104', true, 'radio');
      selectFindingsDropdownOption('uni_x_030203', '.ui-dropdown-label', 1, true, true);
      cy.byRRID('uni_x_030204').type('3');
      clickElement('uni_x_030218', true, 'checkbox');
      clickElement('uni_x_030217', true, 'checkbox');
      cy.get('.button-next').click();
    });
  });
});
