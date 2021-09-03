import { ErrorMessage } from '../../enums/error-message.enum';

export class CmoveWithoutStudyIdError extends Error {
  constructor() {
    super(ErrorMessage.CMOVE_WITHOUT_STUDYID);
  }
}
