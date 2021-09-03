import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeChecked,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt,
  visitPageNumber
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 10 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_100107', 'hea_m_100106-');

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

  it('Characterization I Pathology with DWI', () => {
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    visitPageNumber(10);
    clickElement('hea_m_100105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    clickElement('hea_m_100301');

    elementShouldBeEnabled('hea_m_100206');
    elementShouldBeEnabled('hea_m_100207');
    elementShouldBeEnabled('hea_m_100217');
    elementShouldBeEnabled('hea_m_100218');

    elementShouldBeEnabled('hea_m_100209');
    elementShouldBeEnabled('hea_m_100210');

    elementShouldBeEnabled('hea_m_100212');
    elementShouldBeEnabled('hea_m_100213');
    elementShouldBeEnabled('hea_m_100214');
    elementShouldBeEnabled('hea_m_100215');
    elementShouldBeEnabled('hea_m_100216');

    elementShouldBeEnabled('hea_m_100313');
    elementShouldBeEnabled('hea_m_100315');
    elementShouldBeEnabled('hea_m_100317');

    elementShouldBeEnabled('hea_m_100415');

    elementShouldBeEnabled('hea_m_100513');
    elementShouldBeEnabled('hea_m_100514');
    elementShouldBeEnabled('hea_m_100515');
    elementShouldBeEnabled('hea_m_100516');
    elementShouldBeEnabled('hea_m_100517');
    elementShouldBeEnabled('hea_m_100518');
    elementShouldBeEnabled('hea_m_100519');
    elementShouldBeEnabled('hea_m_100520');
    elementShouldBeEnabled('hea_m_100521');
    elementShouldBeEnabled('hea_m_100522');

    clickElement('hea_m_100206', true, 'radio');
    elementShouldBeChecked('hea_m_100206');
    clickElement('hea_m_100207', true, 'radio');
    elementShouldBeChecked('hea_m_100207');
    clickElement('hea_m_100217', true, 'radio');
    elementShouldBeChecked('hea_m_100217');
    clickElement('hea_m_100218', true, 'radio');
    elementShouldBeChecked('hea_m_100218');
    clickElement('hea_m_100209', true, 'radio');
    elementShouldBeChecked('hea_m_100209');
    clickElement('hea_m_100210', true, 'radio');
    elementShouldBeChecked('hea_m_100210');
    clickElement('hea_m_100212', true, 'radio');
    elementShouldBeChecked('hea_m_100212');
    clickElement('hea_m_100213', true, 'radio');
    elementShouldBeChecked('hea_m_100213');
    clickElement('hea_m_100214', true, 'radio');
    elementShouldBeChecked('hea_m_100214');
    clickElement('hea_m_100215', true, 'radio');
    elementShouldBeChecked('hea_m_100215');
    clickElement('hea_m_100216', true, 'radio');
    elementShouldBeChecked('hea_m_100216');

    selectSliderValueAndCheckIt('hea_m_100313', 0, 5);

    selectSliderValueAndCheckIt('hea_m_100315', 0, 5);

    selectSliderValueAndCheckIt('hea_m_100317', 0, 5);

    clickElement('hea_m_100415', true, 'checkbox');
    elementShouldBeEnabled('hea_m_100416');
    elementShouldBeEnabled('hea_m_100417');

    clickElement('hea_m_100416', true, 'radio');
    elementShouldBeChecked('hea_m_100416');

    clickElement('hea_m_100417', true, 'radio');
    elementShouldBeChecked('hea_m_100417');

    clickElement('hea_m_100513', true, 'checkbox');
    elementShouldBeChecked('hea_m_100513');
    clickElement('hea_m_100514', true, 'checkbox');
    elementShouldBeChecked('hea_m_100514');
    clickElement('hea_m_100515', true, 'checkbox');
    elementShouldBeChecked('hea_m_100515');
    clickElement('hea_m_100516', true, 'checkbox');
    elementShouldBeChecked('hea_m_100516');
    clickElement('hea_m_100517', true, 'checkbox');
    elementShouldBeChecked('hea_m_100517');
    clickElement('hea_m_100518', true, 'checkbox');
    elementShouldBeChecked('hea_m_100518');
    clickElement('hea_m_100519', true, 'checkbox');
    elementShouldBeChecked('hea_m_100519');
    clickElement('hea_m_100520', true, 'checkbox');
    elementShouldBeChecked('hea_m_100520');
    clickElement('hea_m_100521', true, 'checkbox');
    elementShouldBeChecked('hea_m_100521');
    clickElement('hea_m_100522', true, 'checkbox');
    elementShouldBeChecked('hea_m_100522');
  });
});
