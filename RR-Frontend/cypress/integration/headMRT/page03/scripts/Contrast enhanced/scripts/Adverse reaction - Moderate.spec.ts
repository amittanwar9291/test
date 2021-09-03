import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, elementShouldBeEnabled, clickElement } from '../../../../../../shared/service';
import { signIn } from '../../../../../../shared/requests';
import { createReport } from '../../../../../../shared/report-creation';
import { testUser } from '../../../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../../../page objects/finding-column-page-object';
const findingColumn = new FindingColumnPageObject('uni_x_030303-1', 'uni_x_030303-1-');

context('Page 3 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  describe('Adverse reaction - Moderate', () => {
    it('Adverse reaction - Moderate', () => {
      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030301', true, 'checkbox');
      findingColumn.selectFindingOptionByAppearance(8);

      elementShouldBeEnabled('uni_x_030409');
      elementShouldBeEnabled('uni_x_030412');
      elementShouldBeEnabled('uni_x_030416');
      elementShouldBeEnabled('uni_x_030406');
    });
  });
});
