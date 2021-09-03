import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_040107', 'han_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Char I', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('han_m_040107');

    clickElement('han_m_0403146');

    elementShouldBeEnabled('han_m_040266');
    elementShouldBeEnabled('han_m_040267');
    elementShouldBeEnabled('han_m_040268');
    elementShouldBeEnabled('han_m_040270');
    elementShouldBeEnabled('han_m_040271');
    elementShouldBeEnabled('han_m_040273');
    elementShouldBeEnabled('han_m_040274');
    elementShouldBeEnabled('han_m_040275');
    elementShouldBeEnabled('han_m_040276');

    elementShouldBeEnabled('han_m_0403157');
    elementShouldBeEnabled('han_m_0403160');

    elementShouldBeEnabled('han_m_040487');
    elementShouldBeEnabled('han_m_040488');
    elementShouldBeEnabled('han_m_040489');
    elementShouldBeEnabled('han_m_040493');
    elementShouldBeEnabled('han_m_040494');
    elementShouldBeEnabled('han_m_040495');
    elementShouldBeEnabled('han_m_040496');
    elementShouldBeEnabled('han_m_040497');

    elementShouldBeEnabled('han_m_040593');
    elementShouldBeEnabled('han_m_040594');
    elementShouldBeEnabled('han_m_040595');
    elementShouldBeEnabled('han_m_040596');
    elementShouldBeEnabled('han_m_040597');
    elementShouldBeEnabled('han_m_040598');

    clickElement('han_m_040488', true, 'radio');
    elementShouldBeEnabled('han_m_040490');
    elementShouldBeEnabled('han_m_040491');

    clickElement('han_m_040489', true, 'radio');
    elementShouldBeEnabled('han_m_040490');
    elementShouldBeEnabled('han_m_040491');
  });
});
