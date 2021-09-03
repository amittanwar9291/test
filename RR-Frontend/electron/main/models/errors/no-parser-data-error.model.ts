import { ErrorMessage } from '../../enums/error-message.enum';

export class NoParserDataError extends Error {
  constructor() {
    super(ErrorMessage.NO_PARSER_DATA);
  }
}
