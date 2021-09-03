import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 07 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_070107', 'han_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_NerveCompression.url + '/' + pageId);
        });
      });
    });
  });

  it('Carpal tunnel syndrome', () => {
    clickElement('han_m_070105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('han_m_070107');

    elementShouldBeEnabled('han_m_070203');
    elementShouldBeEnabled('han_m_070204');
    elementShouldBeEnabled('han_m_070205');
    elementShouldBeEnabled('han_m_070206');
    elementShouldBeEnabled('han_m_070207');
    elementShouldBeEnabled('han_m_070208');

    elementShouldBeEnabled('han_m_070302');
    elementShouldBeEnabled('han_m_070303');

    clickElement('han_m_070303', true, 'radio');

    elementShouldBeEnabled('han_m_070304');
    elementShouldBeEnabled('han_m_070305');
    elementShouldBeEnabled('han_m_070306');
    elementShouldBeEnabled('han_m_070307');
    elementShouldBeEnabled('han_m_070308');

    clickElement('han_m_070304', true, 'radio');
    elementShouldBeEnabled('han_m_070402');
    elementShouldBeEnabled('han_m_070403');
    elementShouldBeEnabled('han_m_070404');
    elementShouldBeEnabled('han_m_070405');

    elementShouldBeEnabled('han_m_070501');
    elementShouldBeEnabled('han_m_070502');
    elementShouldBeEnabled('han_m_070503');
    elementShouldBeEnabled('han_m_070505');

    clickElement('han_m_070503', true, 'radio');
    elementShouldBeEnabled('han_m_070504');

    clickElement('han_m_070305', true, 'radio');
    elementShouldBeEnabled('han_m_070406');
    elementShouldBeEnabled('han_m_070407');
    elementShouldBeEnabled('han_m_070408');
    elementShouldBeEnabled('han_m_070409');

    clickElement('han_m_070306', true, 'radio');
    elementShouldBeEnabled('han_m_070410');
    elementShouldBeEnabled('han_m_070411');

    clickElement('han_m_070307', true, 'radio');
    elementShouldBeEnabled('han_m_070412');
    elementShouldBeEnabled('han_m_070413');
    elementShouldBeEnabled('han_m_070414');

    clickElement('han_m_070308', true, 'radio');
    elementShouldBeEnabled('han_m_070415');
    elementShouldBeEnabled('han_m_070416');
    elementShouldBeEnabled('han_m_070418');

    clickElement('han_m_070416', true, 'radio');
    elementShouldBeEnabled('han_m_070417');
  });
});
