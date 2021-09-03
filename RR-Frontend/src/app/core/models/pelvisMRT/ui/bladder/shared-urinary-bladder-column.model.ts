export class SharedUrinaryBladderColumnModel {
  isArtifacts: boolean;
  isNotSufficientBladderFilling: boolean;
  isInsertedBladderCatheter: boolean;
  isDoubleJCatheterRight: boolean;
  isDoubleJCatheterLeft: boolean;

  constructor(
    isArtifacts?: boolean,
    isNotSufficientBladderFilling?: boolean,
    isInsertedBladderCatheter?: boolean,
    isDoubleJCatheterRight?: boolean,
    isDoubleJCatheterLeft?: boolean
  ) {
    this.isArtifacts = isArtifacts || false;
    this.isNotSufficientBladderFilling = isNotSufficientBladderFilling || false;
    this.isInsertedBladderCatheter = isInsertedBladderCatheter || false;
    this.isDoubleJCatheterRight = isDoubleJCatheterRight || false;
    this.isDoubleJCatheterLeft = isDoubleJCatheterLeft || false;
  }
}
