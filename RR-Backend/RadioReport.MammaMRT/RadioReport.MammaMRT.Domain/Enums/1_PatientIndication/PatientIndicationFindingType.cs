namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum PatientIndicationFindingType : byte
    {
        None = 0,
        LumpsHardeningInBreastDetected = 1,
        NippleDischarge = 2,
        ChestPain = 3,
        AbnormalScreeningMammography = 4,
        PreoperativeStageClassification = 5,
        PostTherapeuticAftercare = 6,
        BRCACarrier = 7,
        BreastImplants = 8,
        MonitoringNeoadjuvantChemotherapy = 9,
        CUP = 10,
        AdditionalExaminationVeryDenseParenchyma = 11,
        Mastitis = 12
    }
}
