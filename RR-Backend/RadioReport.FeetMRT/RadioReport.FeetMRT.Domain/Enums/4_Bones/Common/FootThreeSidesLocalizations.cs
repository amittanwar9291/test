using System;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
    [Flags]
    public enum FootThreeSidesLocalizations
    {
        None = 0,
        OSSupranaviculare = 1, 
        OSPeroneum = 1 << 1, 
        OSSustentaculi = 1 << 2,
        OSTrigonum = 1 << 3,
        OSVesalinum = 1 << 4,
        OSTibialeExternum = 1 << 5,
        ParsLateralisOssisWetatarsalisOne = 1 << 6,
        OSIntercuneiforme = 1 << 7,
        OSIntermetatarsale = 1 << 8,
        SecundariusCalcaneus = 1 << 9,
        TalusAccessorius = 1 << 10,
        OSCuboideumSecundarium = 1 << 11
    }
}
