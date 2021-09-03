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
  const findingColumn = new FindingColumnPageObject('tho_m_020106', 'tho_m_020105-');

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
    it('Delete Anamnesis', () => {
      findingColumn.selectFindingOptionByName('Infection');
      elementShouldBeEnabled('tho_m_020106');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Delete entry');
    });
  });
});
