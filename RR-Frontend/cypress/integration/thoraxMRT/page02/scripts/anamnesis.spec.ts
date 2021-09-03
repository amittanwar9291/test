import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { thoraxMRTRoutes } from '../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('ThoraxMRT page02 - Anamnesis - Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_020304', 'tho_m_020303-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Anamnesis - Indication', () => {
    it('Anamnesis', () => {
      findingColumn.selectFindingOptionByName('Nicotine abuse');
      elementShouldBeEnabled('tho_m_020304');
      cy.byRRID('tho_m_020403').type('11');
      findingColumn.selectFindingOptionByName('Stent');
      clickElement('tho_m_020408', false, 'checkbox');
      clickElement('tho_m_020409', false, 'checkbox');
      clickElement('tho_m_020410', false, 'checkbox');
      findingColumn.selectFindingOptionByName('History of partial lung resection');
      clickElement('tho_m_020417', false, 'checkbox');
      clickElement('tho_m_020418', false, 'checkbox');
    });
  });
});
