import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { kneeMRTRoutes } from '../../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('Knee page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030304', 'uni_x_030303-1-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Contrast Enchanced - Yes', () => {
    it('Verify options are enabled', () => {
      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030301', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030303-1-1');
      elementShouldBeEnabled('uni_x_030514');
      elementShouldBeEnabled('uni_x_030515');
      elementShouldBeEnabled('uni_x_030516');
      elementShouldBeEnabled('uni_x_030517');
      elementShouldBeEnabled('uni_x_030518');
      elementShouldBeEnabled('uni_x_030519');
      elementShouldBeEnabled('uni_x_030507');
      findingColumn.selectFindingOptionByAppearance(3);
      clickElement('uni_x_030514', true, 'checkbox');
      clickElement('uni_x_030515', true, 'checkbox');
      clickElement('uni_x_030516', true, 'checkbox');
      clickElement('uni_x_030517', true, 'checkbox');
      clickElement('uni_x_030518', true, 'checkbox');
      clickElement('uni_x_030519', true, 'checkbox');
      cy.byRRID('uni_x_030507').type('ABC-XYZ-001');
      cy.get('.button-next').click();
    });
  });
});
