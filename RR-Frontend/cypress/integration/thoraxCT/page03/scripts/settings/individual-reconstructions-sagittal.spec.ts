import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { thoraxCTRoutes } from '../../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('ThoraxCT page03 - Individual Reconstructions Sagittal', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_xc_030209', 'uni_xc_030208-');
  const findingColumn2 = new FindingColumnPageObject('uni_xc_030328', 'uni_xc_030327-');

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
    it('Individual Reconstructions Sagittal', () => {
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      clickElement('uni_x_030509', true, 'checkbox');
      clickElement('uni_xc_030501', true, 'checkbox');
      clickElement('uni_xc_030502', true, 'checkbox');
      clickElement('uni_xc_030503', true, 'checkbox');
      clickElement('uni_x_030521', true, 'checkbox');
      findingColumn.selectFindingOptionByAppearance(2);
      findingColumn.selectFindingOptionByAppearance(2);
      cy.byRRID('uni_xc_030401').click({ force: true });
      findingColumn2.selectFindingOptionByAppearance(1);
      cy.byRRID('uni_xc_030419').type('3');
      cy.byRRID('uni_xc_030421').type('3');
      cy.byRRID('uni_xc_030423').type('3');
      cy.byRRID('uni_xc_030425').type('3');
      clickElement('uni_xc_030428', true, 'checkbox');
      clickElement('uni_xc_030429', true, 'checkbox');
      clickElement('uni_xc_030430', true, 'checkbox');
      clickElement('uni_xc_030431', true, 'checkbox');
      clickElement('uni_xc_030433', true, 'checkbox');
      clickElement('uni_xc_030434', true, 'checkbox');
      clickElement('uni_xc_030435', true, 'checkbox');
      clickElement('uni_xc_030436', true, 'checkbox');
      cy.byRRID('uni_xc_030438').type('111');
    });
  });
});
