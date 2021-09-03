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
  const findingColumn = new FindingColumnPageObject('uni_x_030210', 'uni_x_030210-');

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

  it('Individual_without CM', () => {
    // clickElement('uni_x_030104',true,'radio');
    cy.byRRID('uni_x_030105').click({ force: true });
    elementShouldBeEnabled('uni_x_030107');

    elementShouldBeEnabled('uni_x_030107');
    elementShouldBeEnabled('uni_x_030108');
    elementShouldBeEnabled('uni_x_030109');

    elementShouldBeEnabled('uni_x_030112');
    elementShouldBeEnabled('uni_x_030113');
    elementShouldBeEnabled('uni_x_030210-1');

    elementShouldBeEnabled('uni_x_030509');
    elementShouldBeEnabled('uni_y_030502');
    elementShouldBeEnabled('uni_y_030501');
    elementShouldBeEnabled('uni_x_030521');
    clickElement('uni_x_030109', true, 'radio');
    elementShouldBeEnabled('uni_x_030421');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('uni_x_030211');

    elementShouldBeEnabled('uni_x_030308');
    elementShouldBeEnabled('uni_x_030310');
    elementShouldBeEnabled('uni_x_030314');
    elementShouldBeEnabled('uni_x_030315');
  });
});
