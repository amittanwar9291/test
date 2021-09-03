import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - MammaMX', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_050107', 'mam_mx_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass I know', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('mam_mx_050105');
    elementShouldBeEnabled('mam_mx_050106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    cy.get(':nth-child(2) > .relative-container > .description-img').click();
    elementShouldBeEnabled('mam_mx_050203');
    elementShouldBeEnabled('mam_mx_050204');
    clickElement('mam_mx_050204');
    elementShouldBeEnabled('mam_mx_050205');
    elementShouldBeEnabled('mam_mx_050206');

    selectDropdownOptionOS('mam_mx_050203', 3, false, true);
    elementShouldBeEnabled('mam_mx_050506');

    selectDropdownOptionOS('mam_mx_050506', 6, false, true);
    elementShouldBeEnabled('mam_mx_050507');
  });
});
