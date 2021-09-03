import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
          cy.visit(pelvisMRTRoutes.PelvisMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Osteomyelitis', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(10);
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100361');
      elementShouldBeEnabled('pel_m_100370');

      elementShouldBeEnabled('pel_m_100437');
      elementShouldBeEnabled('pel_m_100438');
      elementShouldBeEnabled('pel_m_1004116');
      elementShouldBeEnabled('pel_m_1004117');

      elementShouldBeEnabled('pel_m_1004107');
      elementShouldBeEnabled('pel_m_1004108');

      elementShouldBeEnabled('pel_m_1004110');
      elementShouldBeEnabled('pel_m_1004111');
      elementShouldBeEnabled('pel_m_1004115');

      elementShouldBeEnabled('pel_m_100563');
      elementShouldBeEnabled('pel_m_100564');

      elementShouldBeEnabled('pel_m_100566');
      elementShouldBeEnabled('pel_m_100567');

      clickElement('pel_m_100361', true, 'checkbox');
      elementShouldBeEnabled('pel_m_1003201');
      elementShouldBeEnabled('pel_m_100363');
      elementShouldBeEnabled('pel_m_1003203');
      elementShouldBeEnabled('pel_m_100365');
      elementShouldBeEnabled('pel_m_100366');

      cy.byRRID('pel_m_1003201')
        .type('1')
        .should('have.value', 1);
      cy.byRRID('pel_m_100363')
        .type('100')
        .should('have.value', 100);
      cy.byRRID('pel_m_100363')
        .type('101')
        .should('not.have.value', 101);

      clickElement('pel_m_100370', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100371');
      cy.byRRID('pel_m_100371')
        .type('100')
        .should('have.value', 100);
      elementShouldBeEnabled('pel_m_100373');
      elementShouldBeEnabled('pel_m_100374');

      clickElement('pel_m_1004111', true, 'checkbox');
      elementShouldBeEnabled('pel_m_1004113');
      cy.byRRID('pel_m_1004113')
        .type('1')
        .should('have.value', 1);

      clickElement('pel_m_100567', true, 'radio');
      elementShouldBeEnabled('pel_m_100568');
    });
  });
});
