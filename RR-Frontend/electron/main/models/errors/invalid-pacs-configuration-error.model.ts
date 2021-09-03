import { ErrorMessage } from '../../enums/error-message.enum';

export class InvalidPacsConfigurationError extends Error {
  constructor(details: string) {
    super(ErrorMessage.INVALID_PACS_CONFIG + `: ${details}`);
  }
}
