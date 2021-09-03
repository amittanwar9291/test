import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 -> Bones/Tumor', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_080109', 'car_m_080106-');

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

  describe('Mass Tumor', () => {
    it('Mass Tumor -> Characterization II -> I describe', () => {
      // Go to Page 3 - CE - Yes
      NavigationPageObject.visitPageNumber(3);
      clickElement('uni_x_030104', true, 'radio');
      elementShouldHaveGivenState('true', 'uni_x_030104');

      // Go to Page 8
      NavigationPageObject.visitPageNumber(8);

      clickElement('car_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      cy.byRRID('car_m_080301').click();
      elementShouldBeEnabled('car_m_080209');
      elementShouldBeEnabled('car_m_080210');

      elementShouldBeEnabled('car_m_080310');
      elementShouldBeEnabled('car_m_080311');

      elementShouldBeEnabled('car_m_080410');
      elementShouldBeEnabled('car_m_080411');
      elementShouldBeEnabled('car_m_080412');
      elementShouldBeEnabled('car_m_080413');
      elementShouldBeEnabled('car_m_080414');
      elementShouldBeEnabled('car_m_080416');
      elementShouldBeEnabled('car_m_080417');

      elementShouldBeEnabled('car_m_080511');
      elementShouldBeEnabled('car_m_080513');
      elementShouldBeEnabled('car_m_080514');
      elementShouldBeEnabled('car_m_080516');
      elementShouldBeEnabled('car_m_080517');
      elementShouldBeEnabled('car_m_080518');

      clickElement('car_m_080209', true, 'radio');
      elementShouldBeEnabled('car_m_080212');
      elementShouldBeEnabled('car_m_080213');
      elementShouldBeEnabled('car_m_080223');
      elementShouldBeEnabled('car_m_080224');

      clickElement('car_m_080310', true, 'radio');
      elementShouldBeEnabled('car_m_080313');
      elementShouldBeEnabled('car_m_080314');
      elementShouldBeEnabled('car_m_080316');
      elementShouldBeEnabled('car_m_080317');

      clickElement('car_m_080511', true, 'checkbox');
      elementShouldBeEnabled('car_m_080512');
    });
  });
});
