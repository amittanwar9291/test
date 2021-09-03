import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 04 - PelvisMRT', () => {
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

  it('Lesion PZ Char I', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.get('rr-top-navigation a')
      .eq(3)
      .click({ force: true });

    clickElement('pel_m_040104');
    clickElement('pel_m_040122');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('pel_m_040124');

    elementShouldBeEnabled('pel_m_040222');
    cy.get('[id="ui-tabpanel-0-label"]').should('have.attr', 'aria-selected', 'true');
    elementShouldBeEnabled('pel_m_040304');
    elementShouldBeEnabled('pel_m_040420');

    elementShouldBeEnabled('pel_m_040231');
    elementShouldBeEnabled('pel_m_040307');
    elementShouldBeEnabled('pel_m_040308');
    elementShouldBeEnabled('pel_m_040311');
    elementShouldBeEnabled('pel_m_040312');
    elementShouldBeEnabled('pel_m_040314');
    elementShouldBeEnabled('pel_m_040315');

    elementShouldBeEnabled('pel_m_040422');
    elementShouldBeEnabled('pel_m_040423');
    elementShouldBeEnabled('pel_m_040424');
    elementShouldBeEnabled('pel_m_040427');
    elementShouldBeEnabled('pel_m_040428');
    elementShouldBeEnabled('pel_m_040429');

    elementShouldBeEnabled('pel_m_040516');
    elementShouldBeEnabled('pel_m_040521');

    clickElement('pel_m_040231', true);
    cy.get('rr-three-cross-section-big.ng-valid')
      .shadowFind('[class="prostate-lozaliser__list-element"]')
      .eq(1)
      .click()
      .should(
        'have.attr',
        'class',
        'prostate-lozaliser__list-element prostate-lozaliser__list-element--hovered prostate-lozaliser__list-element--selected'
      );
    cy.get('rr-three-cross-section-big.ng-valid')
      .shadowFind('[class="prostate-lozaliser__list-element"]')
      .eq(1)
      .click()
      .should(
        'have.attr',
        'class',
        'prostate-lozaliser__list-element prostate-lozaliser__list-element--hovered prostate-lozaliser__list-element--selected'
      );
    cy.get('rr-three-cross-section-big.ng-valid')
      .shadowFind('#closeCircle')
      .eq(0)
      .click({ force: true });

    clickElement('pel_m_040308', true, 'radio');
    elementShouldBeEnabled('pel_m_040309');

    clickElement('pel_m_040424', true, 'checkbox');
    elementShouldBeEnabled('pel_m_040425');
    elementShouldBeEnabled('pel_m_040426');

    clickElement('pel_m_040516', true, 'checkbox');
    elementShouldBeEnabled('pel_m_040517');
    elementShouldBeEnabled('pel_m_040520');
    clickElement('pel_m_040517', true, 'radio');
    elementShouldBeEnabled('pel_m_040518');
    elementShouldBeEnabled('pel_m_040519');

    clickElement('pel_m_040521', true, 'checkbox');
    elementShouldBeEnabled('pel_m_040522');
    elementShouldBeEnabled('pel_m_040525');
    clickElement('pel_m_040522', true, 'radio');
    elementShouldBeEnabled('pel_m_040523');
    elementShouldBeEnabled('pel_m_040524');
  });
});
