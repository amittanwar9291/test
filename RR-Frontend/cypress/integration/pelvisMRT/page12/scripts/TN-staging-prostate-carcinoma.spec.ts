import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 12 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_040124', 'pel_m_040123-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Summary -> TN Staging prostate carcinoma', () => {
      clickElement('uni_01_006', true, 'radio');
      clickElement('pel_m_010206', true, 'radio');
      cy.get('.button-next').click();
      cy.get('rr-top-navigation')
        .contains('3')
        .click({ force: true });
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.button-next').click();
      cy.byRRID('pel_m_040104').click();
      clickElement('pel_m_040122', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      cy.get('.p-r-10 > .ng-valid').click({ force: true });
      cy.get('rr-three-cross-section-big.ng-valid')
        .shadowFind('[fill="#bababa"]')
        .eq(1)
        .shadowClick({ force: true });
      cy.get('rr-three-cross-section-big.ng-valid')
        .shadowFind('[fill="#00aec2"]')
        .shadowClick({ force: true });

      clickElement('pel_m_040307', true, 'radio');
      clickElement('pel_m_040312', true, 'radio');
      clickElement('pel_m_040314', true, 'radio');
      clickElement('pel_m_040318', true, 'radio');
      cy.byRRID('pel_m_040304').click();
      clickElement('pel_m_040230', true, 'radio');
      clickElement('pel_m_040321', true, 'radio');
      cy.byRRID('pel_m_040420').click();
      clickElement('pel_m_040234', true, 'radio');
      selectSliderValueAndCheckIt('pel_m_040238', 1, 5);
      clickElement('pel_m_040241', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('12')
        .click({ force: true });
      elementShouldBeEnabled('pel_m_120402');
      clickElement('pel_m_120402', true, 'radio');

      elementShouldBeEnabled('pel_m_120502');
      elementShouldBeEnabled('pel_m_120503');
      elementShouldBeEnabled('pel_m_120504');
      elementShouldBeEnabled('pel_m_120505');

      elementShouldBeEnabled('pel_m_120507');
      elementShouldBeEnabled('pel_m_120508');
      elementShouldBeEnabled('pel_m_120509');

      elementShouldBeEnabled('pel_m_120511');
      elementShouldBeEnabled('pel_m_120512');
    });
  });
});
