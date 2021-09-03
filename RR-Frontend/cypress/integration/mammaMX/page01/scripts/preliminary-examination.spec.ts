import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
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
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_PatientIndication.url + '/' + pageId);
        });
      });
    });
  });

  describe('Preliminary examination', () => {
    it('Mammography', () => {
      clickElement('mam_mx_010114', false, 'radio');
      elementShouldBeEnabled('mam_mx_010115');
      selectDropdownDate('mam_mx_010115', 8, 0, true);
      selectDropdownDate('mam_mx_010115', 2, 1, true);
    });
  });

  describe('Preliminary examination', () => {
    it('Mammary sonography', () => {
      clickElement('mam_mx_010201', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_010202');
      selectDropdownDate('mam_mx_010202', 5, 0, true);
      selectDropdownDate('mam_mx_010202', 2, 1, true);
    });
  });

  describe('Preliminary examination', () => {
    it('MRI mammography', () => {
      clickElement('mam_mx_010301', false, 'checkbox');
      elementShouldBeEnabled('mam_mx_010302');
      selectDropdownDate('mam_mx_010302', 5, 0, true);
      selectDropdownDate('mam_mx_010302', 2, 1, true);
    });
  });

  describe('Preliminary examination', () => {
    it('Checking value after reloading the page', () => {
      elementShouldBeEnabled('mam_mx_010115');
    });
  });
});
