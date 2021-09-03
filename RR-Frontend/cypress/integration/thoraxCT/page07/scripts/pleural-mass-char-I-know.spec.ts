import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - ThoraxCT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Pleural mass Char I - know', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');

    cy.get(':nth-child(1) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('tho_c_070209');
    elementShouldBeEnabled('tho_c_070308');
    elementShouldBeEnabled('tho_c_070410');

    selectElementByRadioRole(3);

    elementShouldBeEnabled('tho_c_070211');
    elementShouldBeEnabled('tho_c_070212');
    elementShouldBeEnabled('tho_c_070215');
    elementShouldBeEnabled('tho_c_070216');
    elementShouldBeEnabled('tho_c_070218');
    elementShouldBeEnabled('tho_c_070219');
    elementShouldBeEnabled('tho_c_070220');
    elementShouldBeEnabled('tho_c_070221');

    elementShouldBeEnabled('tho_c_070310');
    elementShouldBeEnabled('tho_c_070312');
    elementShouldBeEnabled('tho_c_070314');
    elementShouldBeEnabled('tho_c_0703123');

    elementShouldBeEnabled('tho_c_070413');
    elementShouldBeEnabled('tho_c_070414');
    elementShouldBeEnabled('tho_c_070416');
    elementShouldBeEnabled('tho_c_070417');
    elementShouldBeEnabled('tho_c_070419');
    elementShouldBeEnabled('tho_c_070420');
    elementShouldBeEnabled('tho_c_070421');

    elementShouldBeEnabled('tho_c_070581');
    elementShouldBeEnabled('tho_c_070582');
    elementShouldBeEnabled('tho_c_070505');
    elementShouldBeEnabled('tho_c_070506');
  });
});
