import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownDate } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { cardioMRTRoutes } from '../../../../../src/environments/pages-routes';

context('Cardio page02 - Anamnesis - MRI Pre-examination', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

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

  describe('Anamnesis', () => {
    it('Anamnesis - MRI Pre-examination', () => {
      cy.byRRID('car_m_020103').click();
      clickElement('car_m_020503', true, 'checkbox');
      elementShouldBeEnabled('car_m_020504');
      selectDropdownDate('car_m_020504', 2, 0, true);
      selectDropdownDate('car_m_020504', 3, 1, true);
    });
  });
});
