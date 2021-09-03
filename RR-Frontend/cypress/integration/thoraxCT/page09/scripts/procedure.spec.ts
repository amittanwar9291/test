import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary -> Procedure', () => {
      elementShouldBeEnabled('tho_c_090103');
      clickElement('tho_c_090103', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090104');
      elementShouldBeEnabled('tho_c_090110');
      elementShouldBeEnabled('tho_c_090114');
      elementShouldBeEnabled('tho_c_090201');

      clickElement('tho_c_090104', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090105');
      elementShouldBeEnabled('tho_c_090106');
      elementShouldBeEnabled('tho_c_090107');
      elementShouldBeEnabled('tho_c_090108');
      elementShouldBeEnabled('tho_c_090109');

      clickElement('tho_c_090110', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090111');
      elementShouldBeEnabled('tho_c_090112');
      elementShouldBeEnabled('tho_c_090113');

      clickElement('tho_c_090114', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090115');
      elementShouldBeEnabled('tho_c_090116');

      clickElement('tho_c_090201', true, 'checkbox');
      elementShouldBeEnabled('tho_c_090203');
      elementShouldBeEnabled('tho_c_090204');
      elementShouldBeEnabled('tho_c_090205');
      elementShouldBeEnabled('tho_c_090206');
      elementShouldBeEnabled('tho_c_090207');
      elementShouldBeEnabled('tho_c_090208');
      elementShouldBeEnabled('tho_c_090209');
      elementShouldBeEnabled('tho_c_090210');
      elementShouldBeEnabled('tho_c_090211');
      elementShouldBeEnabled('tho_c_090212');
      elementShouldBeEnabled('tho_c_090213');
      elementShouldBeEnabled('tho_c_090214');
      elementShouldBeEnabled('tho_c_090215');
    });
  });
});
