import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, typeValueIntoField } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Other lymph nodes lymphadenopathy', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Lymphs.url + '/' + pageId);
        });
      });
    });
  });

  it('Page 07 - Other Lymph Nodes Lymphadenopathy', () => {
    clickElement('mam_m_070213', false, 'radio');
    elementShouldBeEnabled('mam_m_070214');
    elementShouldBeEnabled('mam_m_070204');
    elementShouldBeEnabled('mam_m_070205');
    elementShouldBeEnabled('mam_m_070206');
    elementShouldBeEnabled('mam_m_070209');
    typeValueIntoField('mam_m_070214', '10');
    clickElement('mam_m_070204', false, 'checkbox');
    clickElement('mam_m_070205', false, 'checkbox');
    clickElement('mam_m_070206', false, 'checkbox');
    clickElement('mam_m_070209', false, 'checkbox');
  });
});
