using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    [Flags]
    public enum HandJointLocations : int
    {
        None = 0,
        PtJoint = 1 << 0,
        SttJoint = 1 << 1,
        SlJoint = 1 << 2,
        RadioCarpalJoint = 1 << 3,
        UlnocarpalJoint = 1 << 4,
        Drug = 1 << 5,
        DipJoints = 1 << 6,
        Dip2 = 1 << 7,
        Dip3 = 1 << 8,
        Dip4 = 1 << 9,
        Dip5 = 1 << 10,
        PipJoints = 1 << 11,
        Pip2 = 1 << 12,
        Pip3 = 1 << 13,
        Pip4 = 1 << 14,
        Pip5 = 1 << 15,
        Ip = 1 << 16,
        McpJoints = 1 << 17,
        Mcp1 = 1 << 18,
        Mcp2 = 1 << 19,
        Mcp3 = 1 << 20,
        Mcp4 = 1 << 21,
        Mcp5 = 1 << 22,
        CmcJoints = 1 << 23,
        Cmc1 = 1 << 24,
        Cmc2 = 1 << 25,
        Cmc3 = 1 << 26,
        Cmc4 = 1 << 27,
        Cmc5 = 1 << 28
    }
}