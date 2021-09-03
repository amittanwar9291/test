import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, getAppConfig } from '../../../../shared/service';
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

  describe('Indication', () => {
    it('Add Indications', () => {
      findingColumn.selectFindingOptionByName('Mass');
      clickElement('tho_m_020202', false, 'radio');
      clickElement('tho_m_020203', false, 'radio');
      clickElement('tho_m_020204', false, 'radio');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Infection');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Interstitial lung disease');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Pulmonary artery embolism');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Pulmonary hypertension');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Pneumothorax');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Cystic fibrosis');
      clickElement('tho_m_020206', false, 'radio');
      clickElement('tho_m_020207', false, 'radio');
      findingColumn.selectFindingOptionByName('Arthralgia');
      clickElement('tho_m_020213', false, 'checkbox');
      clickElement('tho_m_020215', false, 'checkbox');
      clickElement('tho_m_020216', false, 'checkbox');
      clickElement('tho_m_020218', false, 'radio');
      clickElement('tho_m_020219', false, 'radio');
    });
  });
});
