import { Guid } from '@models/shared/guid/guid';

export const testUser: ITestUser = {
  firstName: 'TestE2E',
  lastName: 'NewTest',
  birthDate: '1990-01-14T00:00:00',
  externalIdentifier: '',
  id: Guid.EMPTY,
  gender: 'Male'
};

export interface ITestUser {
  firstName: string;
  lastName: string;
  birthDate: string;
  externalIdentifier: string;
  id: Guid;
  gender: string;
}
