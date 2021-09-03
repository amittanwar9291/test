import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cardioMRTRoutes } from '../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Cardio page02 - Anamnesis - Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_020107', 'car_m_020106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Anamnesis - Indication', () => {
    it('Coronary heart disease (CHD)', () => {
      cy.byRRID('car_m_020103').click();
      findingColumn.selectFindingOptionByName('Coronary heart disease (CHD)');
      elementShouldBeEnabled('car_m_020107');
      elementShouldBeEnabled('car_m_020104');
      elementShouldBeEnabled('car_m_020205');
      elementShouldBeEnabled('car_m_020210');
      elementShouldBeEnabled('car_m_020211');
      elementShouldBeEnabled('car_m_020212');
      elementShouldBeEnabled('car_m_020213');
      elementShouldBeEnabled('car_m_020214');
      clickElement('car_m_020205', true, 'radio');
      elementShouldBeEnabled('car_m_020206');
      elementShouldBeEnabled('car_m_020207');
      elementShouldBeEnabled('car_m_020208');
      clickElement('car_m_020206', true, 'radio');
      findingColumn.addFinding();
      findingColumn.selectFindingOptionByName('Myocarditis');
      elementShouldBeEnabled('car_m_020216');
      clickElement('car_m_020216', true, 'checkbox');
      findingColumn.addFinding();
      findingColumn.selectFindingOptionByName('Other');
      cy.byRRID('car_m_020225').should('have.text', ' (No further details) ');
    });
  });
});
