import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
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

  it('Previous interventions / therapies - Fine needle aspiration', () => {
    elementShouldBeDisabled('mam_m_020405');
    clickElement('mam_m_020403', false, 'radio');
    cy.get('.c-col-2.c-pad-l').within(() => {
      elementShouldBeEnabled('none-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('mam_m_020405');
      elementShouldBeEnabled('mam_m_020503');
      elementShouldBeEnabled('mam_m_020518');
      selectLocalizerElement('mam_m_020518', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
      selectLocalizerElement('mam_m_020518', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
      cy.byRRID('mam_m_020518')
        .shadowFind('path')
        .eq(7)
        .should('have.css', 'fill', 'rgb(255, 255, 255)');
      selectLocalizerElement('mam_m_020518', 'path', 11, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
      cy.byRRID('mam_m_020518')
        .shadowFind('path')
        .eq(6)
        .should('have.css', 'fill', 'rgb(255, 255, 255)');
    });
  });
});
