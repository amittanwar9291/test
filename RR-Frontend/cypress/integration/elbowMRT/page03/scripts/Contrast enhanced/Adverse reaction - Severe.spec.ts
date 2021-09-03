import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';

context('Page 03 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030304', 'uni_x_030303-1-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Adverse reaction - Severe', () => {
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030301', true, 'checkbox');

    elementShouldBeEnabled('uni_x_030303-1-1');
    findingColumn.selectFindingOptionByAppearance(15);

    elementShouldBeEnabled('uni_x_030409');
    elementShouldBeEnabled('uni_x_030406');

    elementShouldBeEnabled('uni_x_030514');
    elementShouldBeEnabled('uni_x_030515');
    elementShouldBeEnabled('uni_x_030516');
    elementShouldBeEnabled('uni_x_030517');
    elementShouldBeEnabled('uni_x_030518');
    elementShouldBeEnabled('uni_x_030507');
  });
});
