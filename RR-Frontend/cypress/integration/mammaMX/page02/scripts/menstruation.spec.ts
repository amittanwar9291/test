import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { getAppConfig, clickElement, elementShouldBeDisabled } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { SetDateCalendarObject } from '../../../../page objects/bmi-calculator-module/set-date-calendar-object';

context('page02 -Menstruatio', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const settingDate = new SetDateCalendarObject('mam_mx_020306');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_MedicalHistory.url + '/' + pageId);
        });
      });
    });
  });

  describe('Mammography/Breast ultrasound', () => {
    it('No cycle / postmenopausal', () => {
      clickElement('mam_mx_020303', false, 'radio');
      elementShouldBeDisabled('mam_mx_020305');
      clickElement('mam_mx_020304', false, 'radio');
      settingDate.setDate(4, 'April', '2020');
    });
  });
});
