import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { thoraxCTRoutes } from '../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('ThoraxCT page02 - Anamnesis - Indication', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_020304', 'tho_c_020303-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  describe('Anamnesis - Indication', () => {
    it('Delete Anamnesis', () => {
      findingColumn.selectFindingOptionByName('Nicotine abuse');
      elementShouldBeEnabled('tho_c_020304');
      cy.byRRID('tho_c_020403').type('11');
      findingColumn.selectFindingOptionByName('Delete entry');
    });
  });
});
