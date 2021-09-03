import { FindingBase } from '@models/shared/finding/finding.base';
import { SlacWristTypeEnum } from '@enums/handMRT/capsule-and-ribbons/slac-wrist-type.enum';
import { LesionOfExtrinsicLigamentsTypeEnum } from '@enums/handMRT/capsule-and-ribbons/lesion-of-extrinsic-ligaments-type.enum';
import { DorsalTypeEnum } from '@enums/handMRT/capsule-and-ribbons/dorsal-type.enum';
import { PalmarTypeEnum } from '@enums/handMRT/capsule-and-ribbons/palmar-type.enum';
import { ClassificationPalmerTypeEnum } from '@enums/handMRT/capsule-and-ribbons/classification-palmer-type.enum';
import { DegenerativeTypeEnum } from '@enums/handMRT/capsule-and-ribbons/degenerative-type.enum';
import { DigitusDTypeEnum } from '@enums/handMRT/capsule-and-ribbons/digitus-d-type.enum';
import { SectionTypeEnum } from '@enums/handMRT/capsule-and-ribbons/section-type.enum';
import { CollateralLigamentInjuryTypeEnum } from '@enums/handMRT/capsule-and-ribbons/collateral-ligament-injury-type.enum';
import { LigamentumCollateraleUlnareTypeEnum } from '@enums/handMRT/capsule-and-ribbons/ligamentum-collaterale-ulnare-type.enum';
import { CapsuleAndRibbonsTypeEnum } from '@enums/handMRT/capsule-and-ribbons/capsule-and-ribbons-type.enum';

export class CapsuleAndRibbonsFindingUiModel extends FindingBase {
  findingType: string;
  isDorsal: boolean;
  isCentrally: boolean;
  isPalmar: boolean;
  isStaticSlDissociation: boolean;
  isSecondaryArthrosis: boolean;
  isDISIDeformity: boolean;
  classificationPalmerType: ClassificationPalmerTypeEnum;
  localizationType: DigitusDTypeEnum;
  isRuptureOfCollateralLigament: boolean;
  isAvulsionInjury: boolean;
  isAnnularPulleyRupture: boolean;
  isTenosynovitisStenosans: boolean;
  isRuptureOfTheExtensorTendon: boolean;
  isAvulsionFracture: boolean;
  isSuspicionOf: boolean;
  isMcp: boolean;
  isPip: boolean;
  isDip: boolean;
  ruptureOfCollateralLigamentSideType: CapsuleAndRibbonsTypeEnum;
  annularPulleyRupturType: SectionTypeEnum;
  tenosynovitisStenosansType: SectionTypeEnum;
  slacWristType: SlacWristTypeEnum;
  lesionOfExtrinsicLigamentsType: LesionOfExtrinsicLigamentsTypeEnum;
  dorsalType: DorsalTypeEnum;
  palmarType: PalmarTypeEnum;
  classificationPalmerSubType: DegenerativeTypeEnum;
  collateralLigamentInjuryType: CollateralLigamentInjuryTypeEnum;
  ruptureOfTheLigamentInjurySubType: LigamentumCollateraleUlnareTypeEnum;

  constructor() {
    super();
    this.findingType = 'None';

    this.isDorsal = false;
    this.isCentrally = false;
    this.isPalmar = false;
    this.isStaticSlDissociation = false;
    this.isSecondaryArthrosis = false;
    this.isDISIDeformity = false;
    this.classificationPalmerType = ClassificationPalmerTypeEnum.None;
    this.localizationType = DigitusDTypeEnum.None;
    this.isRuptureOfCollateralLigament = false;
    this.isAvulsionInjury = false;
    this.isAnnularPulleyRupture = false;
    this.isTenosynovitisStenosans = false;
    this.isRuptureOfTheExtensorTendon = false;
    this.isAvulsionFracture = false;
    this.isSuspicionOf = false;
    this.isMcp = false;
    this.isPip = false;
    this.isDip = false;
    this.ruptureOfCollateralLigamentSideType = CapsuleAndRibbonsTypeEnum.None;
    this.annularPulleyRupturType = SectionTypeEnum.None;
    this.tenosynovitisStenosansType = SectionTypeEnum.None;
    this.slacWristType = SlacWristTypeEnum.None;
    this.lesionOfExtrinsicLigamentsType = LesionOfExtrinsicLigamentsTypeEnum.None;
    this.dorsalType = DorsalTypeEnum.None;
    this.palmarType = PalmarTypeEnum.None;
    this.classificationPalmerSubType = DegenerativeTypeEnum.None;
    this.collateralLigamentInjuryType = CollateralLigamentInjuryTypeEnum.None;
    this.ruptureOfTheLigamentInjurySubType = LigamentumCollateraleUlnareTypeEnum.None;
  }
}
