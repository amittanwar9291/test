import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { hipMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('ShoulderMRT page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030211', 'uni_x_030210-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Sequences', () => {
    it('Individual without CM -> Yes', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.byRRID('uni_x_030105').click({ force: true });
      elementShouldBeEnabled('uni_x_030107');
      elementShouldBeEnabled('uni_x_030108');
      elementShouldBeEnabled('uni_x_030109');

      elementShouldBeEnabled('uni_x_030112');
      clickElement('uni_x_030112', true, 'radio');
      elementShouldBeEnabled('uni_x_030113');
      clickElement('uni_x_030109', true, 'radio');

      elementShouldBeEnabled('uni_x_030509');
      elementShouldBeEnabled('uni_y_030502');
      elementShouldBeEnabled('uni_y_030501');
      elementShouldBeEnabled('uni_x_030521');

      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030210-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('uni_x_030211');
      elementShouldBeEnabled('uni_x_030421');

      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      elementShouldBeEnabled('uni_x_030314');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeEnabled('uni_x_030316');
      elementShouldBeEnabled('uni_y_030401');
    });
  });
});
