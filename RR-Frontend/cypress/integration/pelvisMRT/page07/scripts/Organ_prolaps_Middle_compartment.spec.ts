import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  typeValueIntoInputField,
  elementShouldBeDisabled,
  typeValueIntoField
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 07 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('pel_m_070107', 'pel_m_070107-');
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

  describe('Organ_prolaps_Middle_compartment.feature', () => {
    it('Organ_prolaps_Middle_compartment.feature', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(3000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('pel_m_070108');

      elementShouldBeEnabled('pel_m_070218');

      clickElement('pel_m_070321');

      elementShouldBeEnabled('pel_m_070229');
      clickElement('pel_m_070229', true, 'checkbox');
      elementShouldBeEnabled('pel_m_0703104');
      elementShouldBeEnabled('pel_m_0703105');
      elementShouldBeEnabled('pel_m_0703106');

      elementShouldBeEnabled('pel_m_070418');
      elementShouldBeEnabled('pel_m_070419');
      elementShouldBeEnabled('pel_m_070420');
      elementShouldBeEnabled('pel_m_070421');
      elementShouldBeEnabled('pel_m_0702106');

      cy.byRRID('pel_m_0702106').click();

      typeValueIntoField('pel_m_0702106', '10');
      elementShouldBeEnabled('pel_m_0702109');
      elementShouldBeEnabled('pel_m_0702110');

      cy.byRRID('pel_m_0702112').should('have.value', 'Light');

      clickElement('pel_m_070229', true, 'checkbox');
      clickElement('pel_m_070229', true, 'checkbox');

      typeValueIntoField('pel_m_0702106', '31');
      cy.byRRID('pel_m_0702112').should('have.value', 'Medium');

      clickElement('pel_m_070229', true, 'checkbox');
      clickElement('pel_m_070229', true, 'checkbox');

      typeValueIntoField('pel_m_0702106', '61');
      cy.byRRID('pel_m_0702112').should('have.value', 'Severe');

      clickElement('pel_m_0703104', true, 'radio');
      typeValueIntoInputField('pel_m_0703108', '31');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 0');

      typeValueIntoInputField('pel_m_0703108', '011');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 1');

      typeValueIntoInputField('pel_m_0703108', '030');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 1');

      typeValueIntoInputField('pel_m_0703108', '010');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 2');

      clickElement('pel_m_0703105', true, 'radio');

      typeValueIntoInputField('pel_m_0703108', '01');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 2');

      typeValueIntoInputField('pel_m_0703108', '002');
      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 2');

      clickElement('pel_m_0703106', true, 'radio');

      cy.byRRID('pel_m_0703114').should('have.value', 'Stage 4');
      elementShouldBeDisabled('pel_m_0703111');
      elementShouldBeDisabled('pel_m_0703112');
    });
  });
});
