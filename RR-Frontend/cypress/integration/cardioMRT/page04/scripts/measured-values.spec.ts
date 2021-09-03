import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Flaps', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030211', 'uni_x_030210-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Measured values', () => {
    clickElement('uni_x_030110', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    selectFindingsDropdownOption('car_m_030302', '.ui-dropdown-label', 9, true, true);
    cy.get('rr-top-navigation')
      .find('a')
      .contains('4')
      .click({ force: true });
    clickElement('car_m_040105', true, 'radio');
    elementShouldBeEnabled('car_m_040204');
    elementShouldBeEnabled('car_m_040302');
    elementShouldBeEnabled('car_m_040402');

    clickElement('car_m_040204');
    elementShouldBeEnabled('car_m_040205');
    elementShouldBeEnabled('car_m_040207');
    elementShouldBeEnabled('car_m_040209');
    elementShouldBeEnabled('car_m_040212');
    elementShouldBeEnabled('car_m_040214');
    elementShouldBeEnabled('car_m_040217');
    elementShouldBeEnabled('car_m_040219');

    clickElement('car_m_040302');
    elementShouldBeEnabled('car_m_040303');
    elementShouldBeEnabled('car_m_040305');
    elementShouldBeEnabled('car_m_040307');
    elementShouldBeEnabled('car_m_040309');
    elementShouldBeEnabled('car_m_040311');
    elementShouldBeEnabled('car_m_040314');
    elementShouldBeEnabled('car_m_040316');

    clickElement('car_m_040402', true, 'checkbox');
    elementShouldBeEnabled('car_m_040403');
    elementShouldBeEnabled('car_m_040405');
    elementShouldBeEnabled('car_m_040407');
    elementShouldBeEnabled('car_m_040409');
    elementShouldBeEnabled('car_m_040411');
    elementShouldBeEnabled('car_m_040414');
    elementShouldBeEnabled('car_m_040416');
  });
});
