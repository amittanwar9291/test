import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

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

  it('Acute epiploic appendagitis', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Acute epiploic appendagitis
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('pel_m_080108');

    // Localization
    elementShouldBeEnabled('pel_m_0802108');

    // Fat equivalent mass + 2 options
    elementShouldBeEnabled('pel_m_0803133');
    elementShouldBeEnabled('pel_m_0803139');
    elementShouldBeEnabled('pel_m_0803140');

    // Diverticulitis + 2 options
    elementShouldBeEnabled('pel_m_080473');
    elementShouldBeEnabled('pel_m_080474');
    elementShouldBeEnabled('pel_m_080475');

    // Check Fat equivalent mass
    clickElement('pel_m_0803133', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0803135');
    elementShouldBeEnabled('pel_m_0803137');

    // Enter 1 in the input field
    cy.byRRID('pel_m_0803135')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0803135');

    // Enter 9999 in the input field
    cy.byRRID('pel_m_0803135').type('9999');
    elementShouldBeValid('pel_m_0803135');

    // Diverticulitis
    clickElement('pel_m_080473', true, 'radio');
    elementShouldBeEnabled('pel_m_080476');

    // Appendicitis
    clickElement('pel_m_080474', true, 'radio');
    elementShouldBeEnabled('pel_m_080476');

    // Mesenteric panniculitis
    clickElement('pel_m_080475', true, 'radio');
    elementShouldBeEnabled('pel_m_080476');
  });
});
