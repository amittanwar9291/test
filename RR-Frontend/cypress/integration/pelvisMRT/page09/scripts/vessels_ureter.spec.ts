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

context('Page 09 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080107', 'pel_m_090106-');

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

  it('Vessels ureter', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Urinary bladder standard variation anomalies
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('pel_m_090107');

    // Available options
    elementShouldBeEnabled('pel_m_0902202');
    elementShouldBeEnabled('pel_m_0902203');
    elementShouldBeEnabled('pel_m_0902204');
    elementShouldBeEnabled('pel_m_0902205');
    elementShouldBeEnabled('pel_m_0902206');
    elementShouldBeEnabled('pel_m_0902207');
    elementShouldBeEnabled('pel_m_0902208');
    elementShouldBeEnabled('pel_m_0902209');

    // Select Abdominal aorta
    clickElement('pel_m_0902202', true, 'radio');
    elementShouldBeEnabled('pel_m_0903202');
    elementShouldBeEnabled('pel_m_0903203');

    clickElement('pel_m_0903202', true, 'radio');
    clickElement('pel_m_0903203', true, 'radio');
    elementShouldBeEnabled('pel_m_0903205');

    // Enter 1 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903205')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903205');

    // Enter 9999 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903205').type('100');
    elementShouldBeValid('pel_m_0903205');

    // Select Common iliac artery
    clickElement('pel_m_0902203', true, 'radio');
    elementShouldBeEnabled('pel_m_0903208');
    elementShouldBeEnabled('pel_m_0903209');
    elementShouldBeEnabled('pel_m_0903211');
    elementShouldBeEnabled('pel_m_0903212');

    clickElement('pel_m_0903208', true, 'radio');
    clickElement('pel_m_0903209', true, 'radio');
    clickElement('pel_m_0903211', true, 'radio');
    clickElement('pel_m_0903212', true, 'radio');

    // Enter 1 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903214');

    // Enter 9999 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214').type('50');
    elementShouldBeValid('pel_m_0903214');

    // Select External iliac artery
    clickElement('pel_m_0902204', true, 'radio');
    elementShouldBeEnabled('pel_m_0903208');
    elementShouldBeEnabled('pel_m_0903209');
    elementShouldBeEnabled('pel_m_0903211');
    elementShouldBeEnabled('pel_m_0903212');

    clickElement('pel_m_0903208', true, 'radio');
    clickElement('pel_m_0903209', true, 'radio');
    clickElement('pel_m_0903211', true, 'radio');
    clickElement('pel_m_0903212', true, 'radio');

    // Enter 1 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903214');

    // Enter 9999 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214').type('50');
    elementShouldBeValid('pel_m_0903214');

    // Select Internal iliac artery
    clickElement('pel_m_0902205', true, 'radio');
    elementShouldBeEnabled('pel_m_0903208');
    elementShouldBeEnabled('pel_m_0903209');
    elementShouldBeEnabled('pel_m_0903211');
    elementShouldBeEnabled('pel_m_0903212');

    clickElement('pel_m_0903208', true, 'radio');
    clickElement('pel_m_0903209', true, 'radio');
    clickElement('pel_m_0903211', true, 'radio');
    clickElement('pel_m_0903212', true, 'radio');

    // Enter 1 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903214');

    // Enter 9999 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0903214').type('50');
    elementShouldBeValid('pel_m_0903214');

    // Select Inferior vena cava
    clickElement('pel_m_0902206', true, 'radio');
    elementShouldBeEnabled('pel_m_0903217');
    elementShouldBeEnabled('pel_m_0903218');
    elementShouldBeEnabled('pel_m_0903219');

    clickElement('pel_m_0903217', true, 'radio');
    clickElement('pel_m_0903218', true, 'radio');
    clickElement('pel_m_0903219', true, 'radio');

    // Select Common iliac vein
    clickElement('pel_m_0902207', true, 'radio');
    elementShouldBeEnabled('pel_m_0903221');
    elementShouldBeEnabled('pel_m_0903222');

    clickElement('pel_m_0903221', true, 'radio');
    clickElement('pel_m_0903222', true, 'radio');

    // Select External iliac vein
    clickElement('pel_m_0902208', true, 'radio');
    elementShouldBeEnabled('pel_m_0903224');
    elementShouldBeEnabled('pel_m_0903225');

    clickElement('pel_m_0903224', true, 'radio');
    clickElement('pel_m_0903225', true, 'radio');

    // Select Ureter
    clickElement('pel_m_0902209', true, 'radio');
    elementShouldBeEnabled('pel_m_0903227');
    elementShouldBeEnabled('pel_m_0903228');
    elementShouldBeEnabled('pel_m_0903230');
    elementShouldBeEnabled('pel_m_0903231');

    clickElement('pel_m_0903227', true, 'radio');
    clickElement('pel_m_0903228', true, 'radio');
    clickElement('pel_m_0903230', true, 'radio');
    clickElement('pel_m_0903231', true, 'radio');
  });
});
