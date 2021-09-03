import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOption,
  typeValueIntoField
} from '../../../../../shared/service';
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
    it('Adverse reaction - Light', () => {
      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030301', true, 'checkbox');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('uni_x_030304');
      elementShouldBeEnabled('uni_x_030409');
      elementShouldBeEnabled('uni_x_030412');
      elementShouldBeEnabled('uni_x_030416');
      elementShouldBeEnabled('uni_x_030406');
      clickElement('uni_x_030416', true, 'checkbox');
      clickElement('uni_x_030406', true, 'checkbox');
      typeValueIntoField('uni_x_030409', '1');
      selectDropdownOption('uni_x_030412', 1);
    });
  });
});
