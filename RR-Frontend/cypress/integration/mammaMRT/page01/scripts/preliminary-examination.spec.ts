import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, clickElement, selectDropdownDate } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page01 - Preliminary Examination', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_PatientIndication.url + '/' + pageId);
        });
      });
    });
  });

  describe('Preliminary examination', () => {
    it('Preliminary examination -> MRI Mammography', () => {
      clickElement('mam_m_010201', false, 'checkbox');
      selectDropdownDate('mam_m_010202', 7, 0, true);
      selectDropdownDate('mam_m_010202', 4, 1, true);
      cy.byRRID('mam_m_010206').click();
      elementShouldBeEnabled('mam_m_010202');
      cy.reload();
    });
  });

  describe('Preliminary examination -> Mammography', () => {
    it('MRI Mammography', () => {
      clickElement('mam_m_010201', false, 'checkbox');
      selectDropdownDate('mam_m_010202', 8, 0, true);
      selectDropdownDate('mam_m_010202', 2, 1, true);
      clickElement('mam_m_010205', true, 'radio');
      cy.reload();
    });
  });

  describe('Preliminary examination -> Mammasonography', () => {
    it('Mammasonography', () => {
      clickElement('mam_m_010301', false, 'checkbox');
      selectDropdownDate('mam_m_010302', 2, 0, true);
      selectDropdownDate('mam_m_010302', 3, 1, true);
      clickElement('mam_m_010306', true, 'radio');
    });
  });
});
