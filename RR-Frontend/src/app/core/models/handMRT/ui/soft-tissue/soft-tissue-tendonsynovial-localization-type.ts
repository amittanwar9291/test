import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class TendonsynovialLocalizationType extends EnumBase {
  tendonMAbductorPollicisLongus: boolean;
  tendonMExtensorPollicisBrevis: boolean;
  tendonMExtensorCarpiRadialisLongus: boolean;
  tendonMExtensorCarpiRadialisBrevis: boolean;
  tendonMExtensorPollicisLongus: boolean;
  tendonsMmExtensoresDigitorumAndIndicis: boolean;
  tendonMExtensorDigitiMinimi: boolean;
  tendonMExtensorCarpiUlnaris: boolean;
  tendonsMFlexorDigitorumSuperficialis: boolean;
  tendonsMFlexorDigitorumProfundus: boolean;
  tendonMFlexorPollicisLongus: boolean;
  tendonMFlexorCarpiRadialis: boolean;
  tendonMFlexorCarpiUlnaris: boolean;

  constructor() {
    super();
    this.tendonMAbductorPollicisLongus = false;
    this.tendonMExtensorPollicisBrevis = false;
    this.tendonMExtensorCarpiRadialisLongus = false;
    this.tendonMExtensorCarpiRadialisBrevis = false;
    this.tendonMExtensorPollicisLongus = false;
    this.tendonsMmExtensoresDigitorumAndIndicis = false;
    this.tendonMExtensorDigitiMinimi = false;
    this.tendonMExtensorCarpiUlnaris = false;
    this.tendonsMFlexorDigitorumSuperficialis = false;
    this.tendonsMFlexorDigitorumProfundus = false;
    this.tendonMFlexorPollicisLongus = false;
    this.tendonMFlexorCarpiRadialis = false;
    this.tendonMFlexorCarpiUlnaris = false;
  }
}
