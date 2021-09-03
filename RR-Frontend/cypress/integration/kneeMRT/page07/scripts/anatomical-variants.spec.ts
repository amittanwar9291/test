import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Patella', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_070107', 'kne_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Patella.url + '/' + pageId);
        });
      });
    });
  });

  it('Anatomical variants', () => {
    clickElement('kne_m_070105');
    elementShouldBeEnabled('kne_m_070105');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('kne_m_070107');
    elementShouldBeEnabled('kne_m_070202');
    elementShouldBeEnabled('kne_m_070205');
    elementShouldBeEnabled('kne_m_070301');
    elementShouldBeEnabled('kne_m_070306');
    elementShouldBeEnabled('kne_m_070401');
    elementShouldBeEnabled('kne_m_070501');
    elementShouldBeEnabled('kne_m_070508');

    clickElement('kne_m_070202', true, 'checkbox');
    elementShouldBeEnabled('kne_m_070203');
    elementShouldBeEnabled('kne_m_070204');

    clickElement('kne_m_070205');
    elementShouldBeEnabled('kne_m_070206');
    elementShouldBeEnabled('kne_m_070210');

    clickElement('kne_m_070206');
    elementShouldBeEnabled('kne_m_070207');
    elementShouldBeEnabled('kne_m_070208');

    clickElement('kne_m_070210');
    elementShouldBeEnabled('kne_m_070211');
    elementShouldBeEnabled('kne_m_070212');
    cy.byRRID('kne_m_070213').should('be.visible');
    elementShouldBeEnabled('kne_m_070214');
    elementShouldBeEnabled('kne_m_070215');
    elementShouldBeEnabled('kne_m_070216');

    clickElement('kne_m_070301');
    elementShouldBeEnabled('kne_m_070303');
    elementShouldBeEnabled('kne_m_070305');

    clickElement('kne_m_070306');
    elementShouldBeEnabled('kne_m_070308');
    elementShouldBeEnabled('kne_m_070309');
    elementShouldBeEnabled('kne_m_070310');
    elementShouldBeEnabled('kne_m_070311');

    clickElement('kne_m_070401');
    elementShouldBeEnabled('kne_m_070402');
    elementShouldBeEnabled('kne_m_070404');
    elementShouldBeEnabled('kne_m_070405');
    elementShouldBeEnabled('kne_m_070406');

    clickElement('kne_m_070501');
    elementShouldBeEnabled('kne_m_070503');
    elementShouldBeEnabled('kne_m_070504');
    elementShouldBeEnabled('kne_m_070506');
    elementShouldBeEnabled('kne_m_070507');

    clickElement('kne_m_070508');
    elementShouldBeEnabled('kne_m_070509');
    elementShouldBeEnabled('kne_m_070511');
    elementShouldBeEnabled('kne_m_070513');
    elementShouldBeEnabled('kne_m_070514');
  });
});
