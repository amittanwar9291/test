import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cardioMRTRoutes } from '../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Cardio page02 - Anamnesis - Intervention', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_020304', 'car_m_020303-');

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

  describe('Anamnesis - Intervention', () => {
    it('Coronary heart disease (CHD) + Anamnesis - Intervention', () => {
      cy.byRRID('car_m_020103').click();
      findingColumn.selectFindingOptionByName('Coronary stents');
      cy.byRRID('car_m_020402').should('have.text', ' (No further details) ');
      findingColumn.addFinding();
      findingColumn.selectFindingOptionByName('Valve replacement');
      elementShouldBeEnabled('car_m_020405');
      elementShouldBeEnabled('car_m_020409');
      clickElement('car_m_020405', true, 'checkbox');
      elementShouldBeEnabled('car_m_020406');
      elementShouldBeEnabled('car_m_020407');
      elementShouldBeEnabled('car_m_020408');
      clickElement('car_m_020408', true, 'radio');
      clickElement('car_m_020409', true, 'checkbox');
      elementShouldBeEnabled('car_m_020410');
      elementShouldBeEnabled('car_m_020411');
      elementShouldBeEnabled('car_m_020412');
      clickElement('car_m_020412', true, 'radio');
      findingColumn.addFinding();
      findingColumn.selectFindingOptionByName('RVOT reconstruction');
      elementShouldBeEnabled('car_m_020414');
      clickElement('car_m_020414', true, 'checkbox');
    });
  });
});
