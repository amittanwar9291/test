import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { getTokenFromSessionStorage } from './requests';
import { ITestUser, testUser } from './test-usert';
import { PatientApiModel } from '@models/shared/patient/patient-api.model';

export function ensureUserExist(name: string, config: IAppConfig): Cypress.Chainable<ITestUser> {
  const token = getTokenFromSessionStorage();
  let userId = new PatientApiModel();
  userId.id = Guid.EMPTY;

  return cy
    .request({
      method: 'GET',
      url: config.baseUrl + '/' + config.patientManager + '/GetBySubStringOfFirstName/' + name,
      headers: {
        Authorization: 'Bearer ' + token.accessToken
      }
    })
    .then(response => {
      if (response.body.length > 0) {
        const user = response.body.pop();
        userId = user;
      }
      return userId;
    });
}

export function createUser(user: ITestUser, config: IAppConfig): Cypress.Chainable<ITestUser> {
  const token = getTokenFromSessionStorage();
  return cy
    .request({
      method: 'POST',
      url: config.baseUrl + '/' + config.patientManager,
      headers: {
        Authorization: 'Bearer ' + token.accessToken
      },
      body: {
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        externalIdentifier: user.externalIdentifier,
        id: user.id,
        gender: user.gender
      }
    })
    .then(response => {
      return response.body;
    });
}

export function reportRequest(patient: ITestUser, moduleName: string, config: IAppConfig): Cypress.Chainable<Guid> {
  const token = getTokenFromSessionStorage();
  const lowerCaseModuleName = moduleName[0].toLowerCase() + moduleName.substr(1);
  const dateOfBirth = new Date(patient.birthDate);

  const today = new Date();
  const currentYear = today.getFullYear();
  const userYears = dateOfBirth.getFullYear();
  const age = currentYear - userYears;
  return cy
    .request({
      url: config.baseUrl + '/' + config.servicesUrls[lowerCaseModuleName].report,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token.accessToken
      },
      body: {
        evaluation: '',
        examinationDate: 'Thu Jan 14 2021',
        examinationType: moduleName,
        findingsDate: 'Thu Jan 14 2021',
        id: Guid.EMPTY,
        language: '',
        pages: [],
        patientAge: age,
        patientId: patient.id,
        presetCode: '',
        status: 'Open',
        studyInstanceUID: '',
        totalPageCount: 0,
        userId: Guid.EMPTY,
        userName: ''
      }
    })
    .then(response => {
      return response.body.id;
    });
}

export function createReport(username: string, moduleName: string, config: IAppConfig): Cypress.Chainable<Guid> {
  return ensureUserExist(username, config).then((userID: ITestUser) => {
    if (userID.id === Guid.EMPTY) {
      return createUser(testUser, config).then((userId: ITestUser) => {
        return reportRequest(userId, moduleName, config);
      });
    } else {
      return reportRequest(userID, moduleName, config);
    }
  });
}
