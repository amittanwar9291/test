import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('page02 - Anamnesis', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_m_020405', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Previous interventions / therapies - Radio', () => {
    clickElement('mam_m_020402', false, 'radio');
    elementShouldBeDisabled('mam_m_020405');
    clickElement('mam_m_020403', false, 'radio');
    cy.get('.c-col-2.c-pad-l').within(() => {
      elementShouldBeEnabled('none-1');
      findingColumn.selectFindingOptionByAppearance(8);
    });
    elementShouldBeEnabled('mam_m_020405');
    elementShouldBeEnabled('mam_m_020520');
    elementShouldBeEnabled('mam_m_020521');
    elementShouldBeEnabled('mam_m_020506');
    clickElement('mam_m_020521');
    elementShouldBeEnabled('mam_m_020503');
    cy.byRRID('mam_m_020506')
      .shadowFind('#right-breast')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.byRRID('mam_m_020506')
      .shadowFind('#left-breast')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.byRRID('mam_m_020506')
      .shadowFind('#right-breast')
      .should('have.css', 'fill', 'rgb(255, 255, 255)');
  });
});
