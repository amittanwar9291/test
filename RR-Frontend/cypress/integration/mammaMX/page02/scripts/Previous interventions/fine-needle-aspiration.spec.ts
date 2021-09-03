import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled, selectDropdownDate } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('page02', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_020405', 'mam_mx_020404-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_MedicalHistory.url + '/' + pageId);
        });
      });
    });
  });

  describe('Previous interventions', () => {
    it('Fine needle aspiration', () => {
      clickElement('mam_mx_020403', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      clickElement('mam_mx_020402', false, 'radio');
      elementShouldBeDisabled('mam_mx_020405');
      clickElement('mam_mx_020403', false, 'radio');
      findingColumn.selectFindingOptionByAppearance(4);
      selectDropdownDate('mam_mx_020504', 5, 0, true);
      selectDropdownDate('mam_mx_020505', 1, 0, true);
      cy.byRRID('mam_mx_020518')
        .shadowFind('#rightBreast')
        .shadowFind('.breast-part')
        .shadowClick();
      cy.byRRID('mam_mx_020518')
        .shadowFind('#rightBreast')
        .shadowFind('.breast-part')
        .should('have.class', 'breast-part-checked');
      cy.byRRID('mam_mx_020518')
        .shadowFind('#rightBreast')
        .shadowFind('.breast-part')
        .shadowClick();
      cy.byRRID('mam_mx_020518')
        .shadowFind('#rightBreast')
        .shadowFind('.breast-part')
        .should('not.have.class', 'breast-part-checked');
      cy.byRRID('mam_mx_020518')
        .shadowFind('#leftBreast')
        .shadowFind('.breast-part')
        .shadowClick();
    });
  });
});
