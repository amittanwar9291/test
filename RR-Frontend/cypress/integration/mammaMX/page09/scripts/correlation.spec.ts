import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectFindingsDropdownOption,
  selectLocalizerElement,
  selectLocalizerMultiple,
  visitPageNumber
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn1 = new FindingColumnPageObject('mam_mx_050107', 'mam_mx_050106-');
  const findingColumn2 = new FindingColumnPageObject('mam_mx_070107', 'mam_mx_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Correlation', () => {
    it('Correlation', () => {
      clickElement('mam_mx_030105', true, 'checkbox');
      selectLocalizerElement('mam_mx_030108', 'tspan', 0, true);
      selectLocalizerElement('mam_mx_030111', 'tspan', 0, true);
      clickElement('mam_mx_030401', true, 'checkbox');
      selectLocalizerElement('mam_mx_030403', 'tspan', 0, true);
      cy.wait(1800);
      visitPageNumber(5);
      elementShouldBeEnabled('mam_mx_050105');
      clickElement('mam_mx_050105', true, 'radio');
      findingColumn1.selectFindingOptionByAppearance(2);
      selectLocalizerMultiple('mam_mx_050208', 'g', 'path', 0, 2, true);
      selectDropdownOptionOS('mam_mx_050424', 3, true, true);
      cy.wait(1800);
      visitPageNumber(7);
      elementShouldBeEnabled('mam_mx_070105');
      clickElement('mam_mx_070105', true, 'radio');
      findingColumn2.selectFindingOptionByAppearance(0);
      selectLocalizerMultiple('mam_mx_070209', 'g', 'path', 0, 2, true);
      cy.byRRID('mam_mx_070306').type('5');
      clickElement('mam_mx_070301');
      selectFindingsDropdownOption('mam_mx_070416', '.ui-dropdown-label', 3, true, true);
      cy.wait(1800);
      visitPageNumber(9);
      cy.byRRID('mam_mx_090305-1').should('have.text', ' 01 – mammaMX.mammographyFinding.findingTypes.2.label ');
      elementShouldBeEnabled('mam_mx_090306-1');
      selectDropdownOptionOS('mam_mx_090306-1', 1, true, true);
      cy.byRRID('mam_mx_090306-1')
        .shadowFind('span')
        .eq(0)
        .should('have.text', ' No correlation ');
      cy.reload();
      selectDropdownOptionOS('mam_mx_090306-1', 2, true, true);
      cy.byRRID('mam_mx_090306-1')
        .shadowFind('span')
        .eq(0)
        .should('have.text', '01 - Mass');
    });
  });
});
