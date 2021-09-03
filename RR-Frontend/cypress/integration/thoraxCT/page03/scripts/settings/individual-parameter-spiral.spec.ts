import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, selectDropdownOption, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { thoraxCTRoutes } from '../../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('ThoraxCT page03 - Individual Parameter Spiral', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_xc_030209', 'uni_xc_030208-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('ThoraxCT Technology', () => {
    it('Individual Parameter Spiral', () => {
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      clickElement('uni_x_030509', true, 'checkbox');
      clickElement('uni_xc_030501', true, 'checkbox');
      clickElement('uni_xc_030502', true, 'checkbox');
      clickElement('uni_xc_030503', true, 'checkbox');
      clickElement('uni_x_030521', true, 'checkbox');
      findingColumn.selectFindingOptionByAppearance(2);
      findingColumn.selectFindingOptionByAppearance(2);
      selectDropdownOption('uni_xc_030303', 4);
      cy.byRRID('uni_xc_030308').type('11');
      cy.byRRID('uni_xc_030311').type('111');
      cy.byRRID('uni_xc_030316').type('111');
      clickElement('uni_xc_030321', true, 'radio');
      clickElement('uni_xc_030322', true, 'radio');
      clickElement('uni_xc_030403', true, 'checkbox');
      clickElement('uni_xc_030404', true, 'checkbox');
      clickElement('uni_xc_030405', true, 'checkbox');
      clickElement('uni_xc_030406', true, 'checkbox');
      clickElement('uni_xc_030407', true, 'checkbox');
      clickElement('uni_xc_030408', true, 'checkbox');
      clickElement('uni_xc_030409', true, 'checkbox');
      cy.byRRID('uni_xc_030410').type('11');
      selectDropdownOption('uni_xc_030413', 2);
      selectDropdownOption('uni_xc_030415', 2);
      clickElement('uni_xc_030417', true, 'checkbox');
    });
  });
});
