import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 09 -> Pericardium Vessels', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_090108', 'car_m_090107-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_PericardiumVessels.url + '/' + pageId);
        });
      });
    });
  });
  describe('Osseous lesion', () => {
    it('Osseous lesion -> Humerus -> Clavicle -> Sternum -> Ribs -> Vertebral body', () => {
      clickElement('car_m_090106', true, 'radio');
      elementShouldBeEnabled('car_m_090107-1');
      findingColumn.selectFindingOptionByAppearance(7);
      elementShouldBeEnabled('car_m_090108');
      elementShouldBeEnabled('car_m_0902167');
      elementShouldBeEnabled('car_m_0902168');
      elementShouldBeEnabled('car_m_0902169');
      elementShouldBeEnabled('car_m_0902170');
      elementShouldBeEnabled('car_m_0902171');

      clickElement('car_m_0902167', true, 'radio');
      elementShouldBeEnabled('car_m_090371');
      elementShouldBeEnabled('car_m_090372');
      elementShouldBeEnabled('car_m_090374');

      elementShouldBeEnabled('car_m_090468');
      elementShouldBeEnabled('car_m_090472');
      elementShouldBeEnabled('car_m_090473');

      clickElement('car_m_090468', true, 'radio');
      elementShouldBeEnabled('car_m_090469');
      elementShouldBeEnabled('car_m_090470');
      elementShouldBeEnabled('car_m_090471');

      clickElement('car_m_0902168', true, 'radio');
      elementShouldBeEnabled('car_m_090371');
      elementShouldBeEnabled('car_m_090372');
      elementShouldBeEnabled('car_m_090374');

      elementShouldBeEnabled('car_m_090468');
      elementShouldBeEnabled('car_m_090472');
      elementShouldBeEnabled('car_m_090473');

      clickElement('car_m_090468', true, 'radio');
      elementShouldBeEnabled('car_m_090469');
      elementShouldBeEnabled('car_m_090470');
      elementShouldBeEnabled('car_m_090471');

      clickElement('car_m_0902169', true, 'radio');
      elementShouldBeEnabled('car_m_090374');

      elementShouldBeEnabled('car_m_090468');
      elementShouldBeEnabled('car_m_090472');
      elementShouldBeEnabled('car_m_090473');

      clickElement('car_m_090468', true, 'radio');
      elementShouldBeEnabled('car_m_090469');
      elementShouldBeEnabled('car_m_090470');
      elementShouldBeEnabled('car_m_090471');

      clickElement('car_m_0902170', true, 'radio');
      elementShouldBeEnabled('car_m_090371');
      elementShouldBeEnabled('car_m_090372');
      elementShouldBeEnabled('car_m_090377');
      elementShouldBeEnabled('car_m_090374');

      elementShouldBeEnabled('car_m_090468');
      elementShouldBeEnabled('car_m_090472');
      elementShouldBeEnabled('car_m_090473');

      clickElement('car_m_090468', true, 'radio');
      elementShouldBeEnabled('car_m_090469');
      elementShouldBeEnabled('car_m_090470');
      elementShouldBeEnabled('car_m_090471');

      clickElement('car_m_0902171', true, 'radio');
      elementShouldBeEnabled('car_m_090378');

      elementShouldBeEnabled('car_m_090468');
      elementShouldBeEnabled('car_m_090472');
      elementShouldBeEnabled('car_m_090473');

      clickElement('car_m_090468', true, 'radio');
      elementShouldBeEnabled('car_m_090469');
      elementShouldBeEnabled('car_m_090470');
      elementShouldBeEnabled('car_m_090471');
    });
  });
});
