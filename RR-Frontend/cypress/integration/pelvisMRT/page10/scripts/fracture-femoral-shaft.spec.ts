import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 10 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_100107', 'pel_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Fracture femoral shaft', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.button-next').click();
      cy.get('rr-top-navigation')
        .contains('10')
        .click({ force: true });
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100302');
      elementShouldBeEnabled('pel_m_100303');
      elementShouldBeEnabled('pel_m_100304');
      elementShouldBeEnabled('pel_m_100305');

      cy.byRRID('pel_m_100203').click();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[id="Rechts_Femurkopf"]')
        .shadowClick();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[alt="cross-image"]')
        .shadowClick();

      elementShouldBeDisabled('pel_m_100302');
      elementShouldBeDisabled('pel_m_100303');

      clickElement('pel_m_100304', true, 'radio');
      elementShouldBeEnabled('pel_m_100408');
      elementShouldBeEnabled('pel_m_100409');

      clickElement('pel_m_100408', true, 'radio');
      elementShouldBeEnabled('pel_m_100520');
      elementShouldBeEnabled('pel_m_100521');
      elementShouldBeEnabled('pel_m_100522');

      clickElement('pel_m_100409', true, 'radio');
      elementShouldBeEnabled('pel_m_100523');
      elementShouldBeEnabled('pel_m_100524');
      elementShouldBeEnabled('pel_m_100525');

      clickElement('pel_m_100305', true, 'radio');
      elementShouldBeEnabled('pel_m_100411');
      elementShouldBeEnabled('pel_m_100412');
      elementShouldBeEnabled('pel_m_100413');

      clickElement('pel_m_100413', true, 'radio');
      elementShouldBeEnabled('pel_m_100414');
    });
  });
});
