import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';

context('Page 04 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_040107', 'elb_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Fracture Distal Humerus', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040207');
    selectDropdownOptionOS('elb_m_040207', 5, true, true);

    elementShouldBeEnabled('elb_m_0403124');
    elementShouldBeEnabled('elb_m_0403125');
    elementShouldBeEnabled('elb_m_0403126');
    elementShouldBeEnabled('elb_m_0403127');

    clickElement('elb_m_0403124', true, 'radio');
    elementShouldBeEnabled('elb_m_040418');
    elementShouldBeEnabled('elb_m_040419');
    elementShouldBeEnabled('elb_m_040420');

    clickElement('elb_m_040418', true, 'radio');
    elementShouldBeEnabled('elb_m_0405100');
    elementShouldBeEnabled('elb_m_0405101');

    clickElement('elb_m_040419', true, 'radio');
    elementShouldBeEnabled('elb_m_0405102');
    elementShouldBeEnabled('elb_m_0405103');
    elementShouldBeEnabled('elb_m_0405104');

    clickElement('elb_m_040420', true, 'radio');
    elementShouldBeEnabled('elb_m_0405105');
    elementShouldBeEnabled('elb_m_0405106');
    elementShouldBeEnabled('elb_m_0405107');

    clickElement('elb_m_0405106', true, 'radio');
    elementShouldBeEnabled('elb_m_0405108');
    elementShouldBeEnabled('elb_m_0405109');

    clickElement('elb_m_0405105', true, 'radio');
    elementShouldBeEnabled('elb_m_0405108');
    elementShouldBeEnabled('elb_m_0405109');

    clickElement('elb_m_0403125', true, 'radio');
    elementShouldBeEnabled('elb_m_040421');
    elementShouldBeEnabled('elb_m_040422');
    elementShouldBeEnabled('elb_m_040423');

    clickElement('elb_m_040421', true, 'radio');
    elementShouldBeEnabled('elb_m_040525');
    elementShouldBeEnabled('elb_m_040526');
    elementShouldBeEnabled('elb_m_040527');

    clickElement('elb_m_040526', true, 'radio');
    elementShouldBeEnabled('elb_m_040519');
    elementShouldBeEnabled('elb_m_040520');

    clickElement('elb_m_040422', true, 'radio');
    elementShouldBeEnabled('elb_m_0405110');
    elementShouldBeEnabled('elb_m_0405111');
    elementShouldBeEnabled('elb_m_0405112');

    clickElement('elb_m_040423', true, 'radio');
    elementShouldBeEnabled('elb_m_0405150');
    elementShouldBeEnabled('elb_m_0405151');
    elementShouldBeEnabled('elb_m_0405152');

    clickElement('elb_m_0403126', true, 'radio');
    elementShouldBeEnabled('elb_m_040424');
    elementShouldBeEnabled('elb_m_040425');
    elementShouldBeEnabled('elb_m_040426');

    clickElement('elb_m_040424', true, 'radio');
    elementShouldBeEnabled('elb_m_0405113');
    elementShouldBeEnabled('elb_m_0405114');

    clickElement('elb_m_040425', true, 'radio');
    elementShouldBeEnabled('elb_m_0405115');
    elementShouldBeEnabled('elb_m_0405116');
    elementShouldBeEnabled('elb_m_0405117');

    clickElement('elb_m_0405115', true, 'radio');
    elementShouldBeEnabled('elb_m_0405118');
    elementShouldBeEnabled('elb_m_0405119');
    elementShouldBeEnabled('elb_m_0405120');

    clickElement('elb_m_0405116', true, 'radio');
    elementShouldBeEnabled('elb_m_0405118');
    elementShouldBeEnabled('elb_m_0405119');
    elementShouldBeEnabled('elb_m_0405120');

    clickElement('elb_m_040426', true, 'radio');
    elementShouldBeEnabled('elb_m_0405121');
    elementShouldBeEnabled('elb_m_0405124');
    elementShouldBeEnabled('elb_m_0405129');

    clickElement('elb_m_0405121', true, 'radio');
    elementShouldBeEnabled('elb_m_0405122');
    elementShouldBeEnabled('elb_m_0405123');

    clickElement('elb_m_0405124', true, 'radio');
    elementShouldBeEnabled('elb_m_0405125');
    elementShouldBeEnabled('elb_m_0405126');
    elementShouldBeEnabled('elb_m_0405127');
    elementShouldBeEnabled('elb_m_0405128');

    clickElement('elb_m_0403127', true, 'radio');
    elementShouldBeEnabled('elb_m_0403128');
    elementShouldBeEnabled('elb_m_0403129');
  });
});
