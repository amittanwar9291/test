import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 06 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Diffuse Characterization I with CM', () => {
    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Select Sequences - Individual
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    elementShouldBeEnabled('uni_x_030210-1');

    // Select DWI
    selectDropdownOptionOS('uni_x_030210-1', 2, true, true);

    // Go to Page 06
    NavigationPageObject.visitPageNumber(6);

    // Enabled options
    elementShouldBeEnabled('hea_m_060104');
    elementShouldBeEnabled('hea_m_060113');
    elementShouldBeEnabled('hea_m_060105');

    // Select Finding and Diffuse
    clickElement('hea_m_060105', true, 'radio');
    elementShouldBeEnabled('hea_m_060106-1');

    selectDropdownOptionOS('hea_m_060106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_060107');

    // 'I describe' preselected
    // TODO - should be changed to ID for 'I describe' when added to the source code - ID is not implemented
    cy.get('p-radiobutton')
      .shadowFind('.ui-state-active')
      .invoke('attr', 'aria-checked')
      .should('equal', 'true');

    // Localization selected
    elementShouldBeEnabled('hea_m_060202');
    cy.get('rr-diffuse')
      .shadowFind('a')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Char II
    clickElement('hea_m_060401', true);
    cy.get('p-tabview')
      .shadowFind('li:nth-child(3)')
      .should('have.class', 'ui-state-active');

    // Narrowed sulci
    elementShouldBeEnabled('hea_m_060272');
    // Blurring of white matter–grey matter junction
    elementShouldBeEnabled('hea_m_060273');
    // Perifocal edema
    elementShouldBeEnabled('hea_m_060274');
    // Descent of the cerebellar tonsils
    elementShouldBeEnabled('hea_m_060275');
    // Hydrocephalus
    elementShouldBeEnabled('hea_m_060276');
    // Midline shift
    elementShouldBeEnabled('hea_m_060277');
    // Herniation
    elementShouldBeEnabled('hea_m_060283');

    // Cortical thinning, Mesiotemporal sclerosis, Cortical tuber, Subependymal nodules
    elementShouldBeEnabled('hea_m_060365');
    elementShouldBeEnabled('hea_m_060368');
    elementShouldBeEnabled('hea_m_060369');
    elementShouldBeEnabled('hea_m_060370');

    // Abscess, Atrophy, Ventricular herniation
    elementShouldBeEnabled('hea_m_060372');
    elementShouldBeEnabled('hea_m_060376');
    elementShouldBeEnabled('hea_m_0604218');

    // No, Weak, Significant
    elementShouldBeEnabled('hea_m_0605206');
    elementShouldBeEnabled('hea_m_0605207');
    elementShouldBeEnabled('hea_m_0605208');

    // Select Midline shift
    clickElement('hea_m_060277', true, 'checkbox');
    // 'Side' enabled
    elementShouldBeEnabled('hea_m_060279');
    // 'Midline shift' enabled
    elementShouldBeEnabled('hea_m_060281');

    // Select 'To the right' from 'Side'
    selectDropdownOptionOS('hea_m_060279', 1, true, true);

    // Check min value 'Midline shift' - 1
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');

    // Enter '1'
    cy.byRRID('hea_m_060281')
      .type('1')
      .clear();

    // Check min value 'Midline shift' - 99
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '99');

    // Enter '99'
    cy.byRRID('hea_m_060281').type('99');

    // Select 'Herniation' checkbox
    clickElement('hea_m_060283', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060285');

    // Select 'Subfalcine' from 'Region'
    selectDropdownOptionOS('hea_m_060285', 3, true, true);

    // Select Cortical thinning
    clickElement('hea_m_060365', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060366');
    elementShouldBeEnabled('hea_m_060367');

    // Select Subependymal nodules
    clickElement('hea_m_060370', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060371');

    // Select Abscess
    clickElement('hea_m_060372', true, 'checkbox');
    elementShouldBeEnabled('hea_m_060374');

    // Check min value 'Max. diameter' - 1
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');

    // Enter '1'
    cy.byRRID('hea_m_060374')
      .type('1')
      .clear();

    // Check min value 'Max. diameter' - 99
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '99');

    // Enter '99'
    cy.byRRID('hea_m_060374').type('99');

    // Select 'Ventricular herniation'
    clickElement('hea_m_0604218', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0604219');
    elementShouldBeEnabled('hea_m_0604220');
    elementShouldBeEnabled('hea_m_0604221');

    // Select 'Weak'
    clickElement('hea_m_0605207', true, 'radio');
    elementShouldBeEnabled('hea_m_0605209');
    elementShouldBeEnabled('hea_m_0605210');
    elementShouldBeEnabled('hea_m_0605212');
    elementShouldBeEnabled('hea_m_0605213');
    elementShouldBeEnabled('hea_m_0605214');
    elementShouldBeEnabled('hea_m_0605215');

    // Select 'Significant'
    clickElement('hea_m_0605208', true, 'radio');
    elementShouldBeEnabled('hea_m_0605209');
    elementShouldBeEnabled('hea_m_0605210');
    elementShouldBeEnabled('hea_m_0605212');
    elementShouldBeEnabled('hea_m_0605213');
    elementShouldBeEnabled('hea_m_0605214');
    elementShouldBeEnabled('hea_m_0605215');
  });
});
