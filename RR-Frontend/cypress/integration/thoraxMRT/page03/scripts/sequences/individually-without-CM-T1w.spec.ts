import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, selectDropdownOption, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { thoraxMRTRoutes } from '../../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('Thorax MRT page03', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030211', 'uni_x_030210-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Thorax MRT Technology', () => {
    it('individually Without CM T1w', () => {
      cy.byRRID('uni_x_030103').click({ force: true });
      clickElement('uni_x_030110', true, 'radio');
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      clickElement('uni_x_030112', true, 'radio');
      clickElement('uni_x_030113', true, 'radio');
      clickElement('uni_x_030509', true, 'checkbox');
      clickElement('uni_x_030511', true, 'checkbox');
      clickElement('uni_y_030502', true, 'checkbox');
      clickElement('uni_x_030521', true, 'checkbox');
      findingColumn.selectFindingOptionByAppearance(0);
      selectDropdownOption('uni_x_030308', 2);
      selectDropdownOption('uni_x_030310', 3);
      clickElement('uni_x_030314', true, 'checkbox');
      clickElement('uni_x_030315', true, 'checkbox');
      clickElement('uni_x_030316', true, 'checkbox');
      clickElement('uni_x_0303101', true, 'checkbox');
      clickElement('tho_m_030301', true, 'checkbox');
    });
  });
});
