import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Flaps', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_040223', 'car_m_040226-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Flaps.url + '/' + pageId);
        });
      });
    });
  });

  it('Congential heart disease - One chamber heart (single ventricle)', () => {
    clickElement('car_m_040105', true, 'radio');
    clickElement('car_m_040401');
    elementShouldBeEnabled('car_m_040226-1');

    findingColumn.selectFindingOptionByAppearance(4);
    cy.byRRID('car_m_040223').should('be.enabled');
    elementShouldBeEnabled('car_m_040349');
    elementShouldBeEnabled('car_m_040350');

    elementShouldBeEnabled('car_m_040507');
    elementShouldBeEnabled('car_m_040508');

    clickElement('car_m_040349', true, 'radio');
    elementShouldBeEnabled('car_m_040451');
    elementShouldBeEnabled('car_m_040452');

    clickElement('car_m_040451', true, 'radio');
    elementShouldBeEnabled('car_m_040453');
    elementShouldBeEnabled('car_m_040454');

    clickElement('car_m_040452', true, 'radio');
    elementShouldBeEnabled('car_m_040455');
    elementShouldBeEnabled('car_m_040456');

    clickElement('car_m_040350', true, 'radio');
    elementShouldBeEnabled('car_m_040457');
    elementShouldBeEnabled('car_m_040458');

    clickElement('car_m_040457', true, 'radio');
    elementShouldBeEnabled('car_m_040460');
    elementShouldBeEnabled('car_m_040461');
    elementShouldBeEnabled('car_m_040462');

    clickElement('car_m_040458', true, 'radio');
    elementShouldBeEnabled('car_m_040463');
    elementShouldBeEnabled('car_m_040461');
    elementShouldBeEnabled('car_m_040462');
  });
});
