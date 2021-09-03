using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System;
using System.Collections.Generic;

namespace RadioReport.KneeMRT.Repo.Seeds
{
    internal static class FindingLocalizerSeed
    {
        internal static List<FindingLocalizer> GetPreconfiguredFindingLocalizers()
        {
            return new List<FindingLocalizer>()
            {
                new FindingLocalizer
                {
                    Id = Guid.NewGuid(),
                    Code = "kne_m_L002",
                    Mapping = "AHLM,IPLM,PHLM,AHMM,IPMM,PHMM",
                    Content = "<svg width='312' height='200' viewBox='0 0 315 205' class=\"white-background\"> <defs> <pattern id='pattern-knee-cross' width='1' height='1' viewBox='-10 43.539 277 192' patternTransform='matrix(1, 0, 0, -1, 0, 586)'> <image preserveAspectRatio='xMidYMid slice' width='277' height='277' xlink:href='assets/img/kneeMRT/knee-cross.png' /> </pattern> </defs> <style> .white-background { background-color: white } .background { stroke: #dfdfdf; stroke-width: 3px; fill: url(#pattern-knee-cross); } .no-stroke { stroke: none; } .transparent-background { fill: none; } .knee-cross-area { fill: #999; opacity: 0.7; } .knee-cross-area__text { fill: #fff; font-size: 12px; font-family: BentonSans; font-weight: 700; } .knee-cross-area-inactive { fill: #cacaca; } text.checked { fill: #ffffff !important; } :not(text).checked { fill: #fe0000 !important; opacity: 1 !important; } </style> <g transform='translate(-541 -306)'> <g class='background' transform='translate(538 306)' > <rect class='no-stroke' width='277' height='192' /> <rect class='transparent-background' x='1.5' y='1.5' width='318' height='202' /> </g> <g class='knee-cross-area CHK00' > <path d='M-19891.133-16216.518c-.408-.754-.809-.783-.49-2.945s.563-1.881,1.609-5.393c.6-1.645,1.406-4.066,2.055-6.1,1.52-5.164,1.611-5.4,2.008-7.9a22.5,22.5,0,0,1,2.2-8.135,12.954,12.954,0,0,1,3.344-3.84,21.489,21.489,0,0,1,6.176-3.3,33.494,33.494,0,0,1,5.535-1.264,64.19,64.19,0,0,1,8.68-.75,67.137,67.137,0,0,1,11,1.051c9.637,1.471,24.313,6.3,24.313,6.3s4.3,1.417,8.145,2.947,7.211,3.174,7.211,3.174l-13.52,28.838s-2.527-1.775-3.178-2.174a22.894,22.894,0,0,0-5.387-2.486,23.865,23.865,0,0,0-4.518-1.031,23.4,23.4,0,0,0-3.254-.285,34,34,0,0,0-7.545.447c-3.389.679-2.879.851-6.9,2.217a70.134,70.134,0,0,1-9.541,2.668c-5.369,1.266-7.609,1.1-12.424,2.357a30.537,30.537,0,0,0-5.068,1.629s-2.145,1.105-3.42.764-3.25-2.648-3.25-2.648A50.128,50.128,0,0,1-19891.133-16216.518Z' transform='translate(20568.192 16592.6)' /> <text class='knee-cross-area__text' transform='translate(698 361.5)' > <tspan x='0' y='0'>%%%AHLM%%%</tspan> </text> </g> <g class='knee-cross-area CHK01' > <path d='M-15773.932-16256.518l13.729-29.174a88.676,88.676,0,0,1,12.08,7.254,102.547,102.547,0,0,1,9.078,7.482,68.427,68.427,0,0,1,8.553,10.246,45.663,45.663,0,0,1,7.43,17.535,58.642,58.642,0,0,1,1.16,8.811,66.032,66.032,0,0,1-.463,13.717c-.937,6.541-2,10.621-6.225,16.738-5.869,7.3-10.812,10.243-17.5,13.537-2.166,1.068-5.439,2.333-7.326,3.014-1.252.453-2.268.8-2.268.8l-17.588-27.336s-.28.051.457-.391a17.547,17.547,0,0,0,4.816-4.365,16.362,16.362,0,0,0,2.375-4.959,40.264,40.264,0,0,0,1.576-8.2,38.143,38.143,0,0,0-.545-9.047,28.043,28.043,0,0,0-3.029-8.076c-.917-1.4-1.723-2.643-2.674-3.871C-15773.025-16255.986-15773.932-16256.518-15773.932-16256.518Z' transform='translate(16520.800 16636.219)' /> <text class='knee-cross-area__text' transform='translate(763.5 405.5)' > <tspan x='0' y='0'>%%%IPLM%%%</tspan> </text> </g> <g class='knee-cross-area CHK02' > <path d='M-15781.943-16204.1l17.568,27.123s-4.4,1.512-9.4,2.85c-2.328.622-6.223,1.571-10.863,2.365a104.631,104.631,0,0,1-14.473,1.418c-2.966.08-9.568-.188-15.834-.43-3.149-.121-2.623-.115-8.547-.672a15.131,15.131,0,0,1-10.7-5.281c-2.02-2.17-5.518-8.865-6.2-11.055s-1.692-4.378,2.016-5.937,13.746-2.964,18.6-3.2c2.349-.112,3.826-.4,8.621-.424,2.873-.043,5.819-.03,7.775-.2a57.4,57.4,0,0,0,14.426-3.3A63.587,63.587,0,0,0-15781.943-16204.1Z' transform='translate(16527.700 16627.143)' /> <text class='knee-cross-area__text' transform='translate(705 445.5)' > <tspan x='0' y='0'>%%%PHLM%%%</tspan> </text> </g> <g class='knee-cross-area CHK03' > <path d='M-5810.443-16286.055c4.48.063,4.283-.033,9.551,1.2,2.708.635,7.219,1.726,11.5,3.1a71.855,71.855,0,0,1,8.295,2.865c4.078,1.7,6.666,2.813,8.018,3.924s2.877,5.127,2.377,6.15-1.279,1.344-4.414,2.646-4.887,2.137-6.453,2.938a30.324,30.324,0,0,0-3.16,1.844c-1.336.888-3.087,2.249-4.105,3.092a26.127,26.127,0,0,1-5.432,3.174c-1.752.865-8.423,2.064-11.408,3.035-1.508.491-3.3.812-5.2,1.453a18.6,18.6,0,0,0-3.9,1.756,18.444,18.444,0,0,0-4.033,3.289,24.068,24.068,0,0,0-3.218,4.191c-1.169,2.072-1.7,3.025-1.7,3.025l-24.285-17.764a69.62,69.62,0,0,1,4.551-6.654c1.805-2.325,3.869-4.687,5.453-6.492a82.635,82.635,0,0,1,8.869-8.369c2.949-2.4,3.635-3.254,7.086-5.256A21.727,21.727,0,0,1-5810.443-16286.055Z' transform='translate(6439.244 16636.512)' /> <text class='knee-cross-area__text' transform='translate(608 374.5)' > <tspan x='0' y='0'>%%%AHMM%%%</tspan> </text> </g> <g class='knee-cross-area CHK04' > <path d='M-5850.107-16251.328l24.438,17.994a54.446,54.446,0,0,0-1.854,5.273,45.291,45.291,0,0,0-1.645,7.686c-.361,4.146-.375,10.105.506,13.889s1.786,7.494,3.7,10.6a46.129,46.129,0,0,0,2.75,4.145l-24.279,25.885a54.639,54.639,0,0,1-6.354-8.865,58.529,58.529,0,0,1-5.129-12.645,55.354,55.354,0,0,1-1.631-7.881,89.293,89.293,0,0,1-1.344-13.8,92.5,92.5,0,0,1,.605-11.416,100.045,100.045,0,0,1,3.059-14.94,76.98,76.98,0,0,1,5.219-12.376C-5851.066-16249.752-5850.107-16251.328-5850.107-16251.328Z' transform='translate(6440.500 16632.967)' /> <text class='knee-cross-area__text' transform='translate(580.0 426.5)' > <tspan x='0' y='0'>%%%IPMM%%%</tspan> </text> </g> <g class='knee-cross-area CHK05' > <path d='M-5844.762-16156.58l24.223-25.867a26.409,26.409,0,0,0,4.91,3.67,14.241,14.241,0,0,0,6.213,1.631,73.31,73.31,0,0,0,10.049-1.012c2.556-.317,6.2-.718,9.381-1.285,1.862-.333,3.092-.879,3.795-.719a15.632,15.632,0,0,1,3.313,1.164,14.22,14.22,0,0,0,3.01,1.625c2.9.841,3.8,1.168,5.715,1s2.344-.7,2.918-.467.34.8.293,2.309.27,2.98,0,3.924c-.643,1.722-1.287,2.369-3.359,6.115s-4.93,8.869-4.93,8.869l-4.186-.732s-.078,1.7-.277,3.1-.561,2.889-.561,2.889l1.627-.238a47,47,0,0,1-5.205,5.91,20.571,20.571,0,0,1-7.26,3.93,34.778,34.778,0,0,1-8.441,1.715,53.008,53.008,0,0,1-9.057-.389c-7.268-.77-18.332-5.278-25.115-10.76S-5844.762-16156.58-5844.762-16156.58Z' transform='translate(6439.857 16625.22)' /> <text class='knee-cross-area__text' transform='translate(612 468.5)' > <tspan x='0' y='0'>%%%PHMM%%%</tspan> </text> </g </g> </svg>"
                },
                new FindingLocalizer
                {
                    Id = Guid.NewGuid(),
                    Code = "kne_m_L003",
                    Mapping = "FibulaHead,Patella,FibulaMetaphyseal,FemurMetaphyseal,FemurLatCondyle,FemurMedCondyle,TibiaMetaphyseal,TibiaLatPlateau,TibiaMedPlateau",
                    Content = "<svg width='312' height='200' viewBox='0 0 312 200' class=\"white-background\"> <defs> <pattern id='pattern-knee-detailed-small' width='1' height='1' viewBox='158 0 1 425'> <image preserveAspectRatio='xMidYMid slice' width='312' height='520' xlink:href='assets/img/kneeMRT/knee-single.png' /> </pattern> </defs> <style> .white-background { background-color: white } .knee-single-detailed-small { stroke: #dfdfdf; stroke-width: 3px; fill: url(#pattern-knee-detailed-small); } .knee-part { opacity: 0; } .knee-part-checked { opacity: 0.6; fill: #f80202; } </style> <g class='knee-clickable' transform='translate(-127 -439)'> <g transform='translate(-335 -63)'> <g class='knee-single-detailed-small' transform='translate(462 502)'> <rect style='stroke: none;' width='312' height='200' /> <rect style='fill: none;' x='1.5' y='1.5' width='309' height='197' /> </g> </g> <path class='knee-part knee-part-CHK00' d='M2762.952-17312.371c.059-.062-.108-.66,1.678-.2s2.672.52,4.8,2.908a25.305,25.305,0,0,1,4.717,8.652c.865,2.773.8,4.273,1.316,7.727s-.162,3.191-.615,5.07c-1.108,2.4-1.467,2.111-2.781,3.922-1.477,2.1-2.155,3.559-2.823,3.861s-6.338.406-11.619.359-9.555-.592-9.5-.553a17.174,17.174,0,0,0-.862-3.08c-.2-.1,6.658-9.154,6.658-9.154s2.3-2.83,4.067-5.373,1.893-2.273,3-4.793.927-2.945,1.419-5.281A36.928,36.928,0,0,0,2762.952-17312.371Z' transform='translate(-2435.172 17877.846)' /> <path class='knee-part knee-part-CHK01' d='M2347.289-17517.289a30.115,30.115,0,0,1,10.211,0,51.375,51.375,0,0,1,6.719,1.912c2.906,1.24,2.118.932,4.267,2.658,1.117,1.293,1.147.941,3.136,3.006,0,0,1.435,2.213,1.5,2.33.477.764.986,1.85,1.723,5.215.47,3.732.448,4.322-.317,8.553-1.088,3.777-1.405,3.447-3.182,6.314a25.823,25.823,0,0,1-3.84,5.113c-2.184,2.529-3.018,3.355-5.4,6.256s-2.1,4.539-3.355,6.436a10.135,10.135,0,0,1-2.831,3.225c-1.614,1.383-3.706,1.42-6.223,1.389s-2.158.043-4.591-1.389a28.6,28.6,0,0,1-5.59-4.361,21.551,21.551,0,0,1-1.431-1.8,11.653,11.653,0,0,1-1.448-1.922s-.591-.807-.666-.926c-1.7-3.129-1.761-3.822-3.7-7.414s-2.8-3.76-4.75-7.506a21.407,21.407,0,0,1-2.788-7.877,15.325,15.325,0,0,1-.007-6.211s.132-2.764,4.033-5.428,4.7-2.2,9.995-4.936C2344.015-17516.99,2342.666-17516.549,2347.289-17517.289Z' transform='translate(-2076.658 18009.482)' /> <path class='knee-part knee-part-CHK02' d='M2770.635-17240.8c-1.049,1.631-3.136,6.852-4.643,11.256a68.667,68.667,0,0,0-1.779,7.811c-.106,0-14.032-.088-14.034,0,.328-7.459,0-9.141,0-9.141s-.645-9.451-.978-9.926c.64.061.727.07,3.268.258,2.853.277,6.148.3,9.512.3,1.561,0,3.181-.041,4.713-.07C2768.556-17240.387,2770.321-17240.432,2770.635-17240.8Z' transform='translate(-2436.25 17838.027)' /> <path class='knee-part knee-part-CHK03' d='M2937.595,1816.01c-4.674-13.027-5.288-30.961-5.288-30.961H2882.3s-3.074,19.789-10.385,30.961C2872.089,1816.2,2937.989,1816.2,2937.595,1816.01Z' transform='translate(-2624.086 -1343.057)' /> <path class='knee-part knee-part-CHK04' d='M2963.082,1900.707a12.734,12.734,0,0,1,3.119,3.467,7.369,7.369,0,0,1,1.065,2.042,21.292,21.292,0,0,1,1.021,11.39c-.979,3.79-1.124,4.035-2.086,5.387a50.282,50.282,0,0,1-4.865,6.823c-2.412,2.9-4.088,4.436-6.306,7.406,4.813,2.176,9.675,4.243,12.28,4.786s5.492,1.256,9.273,2.394a28.968,28.968,0,0,0,7.135.693c2.525.047,5.825-.469,8.99-.485,4.33-.749,4.08-1.555,5.309-2.6,1.823-2.578,1.6-3.233,1.98-7.709s-.093-4.218-.473-10.2c.538-2.088,1.366-4.521,1.874-6.844.792-3.627,1.128-6.755,1.128-6.755a30.042,30.042,0,0,0-.583-7.642,8.694,8.694,0,0,0-1.91-4.71s-1.078-2.114-4.759-4.77a10.244,10.244,0,0,0-7.371-2.435c-2.288.187-4.795,1.778-7.6,2.435s-7.114,1.18-10.216,1.828C2967.977,1896.319,2962,1899.68,2963.082,1900.707Z' transform='translate(-2670.199 -1402.876)' /> <path class='knee-part knee-part-CHK05' d='M2825.5,1940.415c.464.913,5.071,1.725,8.552,2.79a86.23,86.23,0,0,1,8.384-2.132c2.683-.28,2.756-.229,5.268-.475,3.151-.13,4.216-.361,5-.761a24.2,24.2,0,0,1,3.543-1.829,19.036,19.036,0,0,1-2.976-3.175,23.093,23.093,0,0,1-3.726-6.288,39.149,39.149,0,0,0-5.078-8.551,40.6,40.6,0,0,1-3.692-7.26c-.805-4.022-1.263-5.013-.98-8.235a7.716,7.716,0,0,1,3.038-5.945,23.188,23.188,0,0,1,7.224-4.022c-2.328-4.771-1.3-5.868-7.224-8.732-6.526-3.155-15.552-4.643-17.029-4.23a6.062,6.062,0,0,0-4.351,2.4,52.859,52.859,0,0,0-3.5,5.238,26.448,26.448,0,0,0-3.688,9.948s-1.4,8.454,1.566,16.27c.759,2.147.765,1.957,1.581,4.137a14.229,14.229,0,0,1,.9,2.108c1.031,3.053,3,6.088,4.866,12.038C2824.037,1936.017,2824.539,1938.214,2825.5,1940.415Z' transform='translate(-2591.912 -1397.83)' /> <path class='knee-part knee-part-CHK06' d='M2877.405,2173.48c-3.013-15.838-6.291-27-8.958-33.453-.016.006,62.209.2,62.349,0s1.535-2.549-1.557,3.235c-3.79,7.133-5.8,15.146-8.816,30.218C2920.335,2173.585,2877.5,2173.457,2877.405,2173.48Z' transform='translate(-2622.162 -1540.742)' /> <path class='knee-part knee-part-CHK07' d='M2940.436,2009.421a13.726,13.726,0,0,0,2.436-2.048,19.607,19.607,0,0,0,2.3-3.674c2.327.114,6.94,2.321,7.794,2.921,2.781,1.751,3.939,3.07,6.929,4.065,1.506.487,3.207.77,4.686,1.105,5.175.883,6.614-.139,14.4,0s7.88,1.516,8.311,1.934c2.547,3.422,1.724,3.374,2.865,8.368.667,3.254-.146,8.41-.7,12.7-.594,3.441-.437,2.893-1.011,4.453a17.64,17.64,0,0,1-2.75,4.947c-1.842,2.677-3.477,4.673-5,6.586a40.953,40.953,0,0,1-3.272,4.332c-.822,1.238-19.509,1.162-21.962,0-2.522-1.635-6.443-9.427-9.443-15.865-2.506-4.729-4.663-13.866-4.663-13.866v-10.437' transform='translate(-2662.104 -1465.578)' /> <path class='knee-part knee-part-CHK08' d='M2834.618,2055.459s-5.354-6.426-6.789-12.324c-1.776-7.756-3.033-15-2.718-16.952-.008-1.817.147-4.309.885-5.628,1.108-2.019,2.2-1.75,3.886-2.889,1.029-.619,1.357-1.773,5.832-2.369,7.764-2.244,10.528-3.035,13.577-3.51a82.182,82.182,0,0,0,8.975-.829s2.81-1.667,4.641-1.609c.244.21.883.642,2.192,1.609,1.4.872,2.646,1.644,3.353,2.051,1.029.288.841.207,2.925.243.341-.01-3.094,20-4.447,21.754-2.654,4.15-1.968,2.978-6.65,8.129-3.094,3.405-6.943,7.546-9.734,9.217C2846.113,2055.115,2834.618,2055.459,2834.618,2055.459Z' transform='translate(-2598.09 -1468.671)' /> </g> </svg>"
                },
                new FindingLocalizer
                {
                    Id = Guid.NewGuid(),
                    Code = "kne_m_L004",
                    Mapping = "Patella,Fibula,Femur,Tibia",
                    Content = "<svg width='312' height='200' viewBox='0 0 312 200' class=\"white-background\"> <defs> <pattern id='pattern-knee-simple-small' width='1' height='1' viewBox='158 0 1 425'> <image preserveAspectRatio='xMidYMid slice' width='312' height='520' xlink:href='assets/img/kneeMRT/knee-single.png' /> </pattern> </defs> <style> .white-background { background-color: white } .knee-single-detailed-small { stroke: #dfdfdf; stroke-width: 3px; fill: url(#pattern-knee-simple-small); } .knee-part { opacity: 0; } .knee-part-checked { opacity: 0.6; fill: #f80202; } </style> <g class='knee-clickable' transform='translate(-462 -500)'> <g transform='translate(0 -2)'> <g class='knee-single-detailed-small' transform='translate(462 502)'> <rect style='stroke: none;' width='312' height='200' /> <rect style='fill: none;' x='1.5' y='1.5' width='309' height='197' /> </g> </g> <path class='knee-part knee-part-CHK00' d='M2347.291-17517.281a29.773,29.773,0,0,1,10.214,0,50.429,50.429,0,0,1,6.719,1.908c2.906,1.246,2.118.934,4.267,2.66,1.117,1.289,1.148.939,3.136,3,0,0,1.436,2.217,1.5,2.334.477.764.986,1.85,1.724,5.215.47,3.734.448,4.328-.317,8.555-1.088,3.785-1.405,3.447-3.183,6.316a25.7,25.7,0,0,1-3.841,5.119c-2.185,2.531-3.019,3.354-5.4,6.258s-2.1,4.539-3.355,6.438a10.248,10.248,0,0,1-2.831,3.23c-1.615,1.379-3.707,1.418-6.224,1.387s-2.159.039-4.592-1.387a28.9,28.9,0,0,1-5.592-4.367,21.071,21.071,0,0,1-1.431-1.8,11.587,11.587,0,0,1-1.448-1.924s-.592-.807-.667-.924c-1.7-3.133-1.761-3.824-3.7-7.418s-2.8-3.762-4.75-7.51a21.385,21.385,0,0,1-2.788-7.877,15.325,15.325,0,0,1-.006-6.213s.132-2.768,4.033-5.434,4.7-2.2,10-4.937C2344.017-17516.988,2342.668-17516.545,2347.291-17517.281Z' transform='translate(-1741.566 18070.236)' /> <path class='knee-part knee-part-CHK01' d='M2761.083-17312.186c.058-.059.113-.105,1.621.193s2.327.535,4.666,2.576a24.979,24.979,0,0,1,4.747,8.547c.864,2.77.8,4.572,1.321,8.023a11.994,11.994,0,0,1-.167,4.184,8.991,8.991,0,0,1-1.88,3.121c-1.676,1.613-2.844,3.814-4.893,7.127a92.088,92.088,0,0,0-3.456,9.205,68.873,68.873,0,0,0-1.777,7.807c-.416,2.979-.015-.689-1.431,10.719s-.781,9.289-.74,9.285h-12.828s.521-3.836.681-18.412c.327-7.459.3-10.727.3-10.727l-.977-9.916a17.159,17.159,0,0,0-.861-3.082c-.2-.1,6.653-9.146,6.653-9.146s2.3-2.828,4.064-5.365,1.892-2.275,3-4.793.927-2.939,1.418-5.275A36.974,36.974,0,0,0,2761.083-17312.186Z' transform='translate(-2098.273 17938.416)' /> <path class='knee-part knee-part-CHK02' d='M2825.386,1886.7c.464.911,5.1,1.909,8.571,2.972,3.452-.972,5.136-1.707,8.554-2.372,2.677-.28,3.456-.354,5.963-.6,3.144-.13,3.921-.632,4.705-1.032a16.886,16.886,0,0,1,2.969-1.553,18.99,18.99,0,0,1-2.969-3.169,23.061,23.061,0,0,1-3.719-6.275,39.064,39.064,0,0,0-5.066-8.533,40.594,40.594,0,0,1-3.685-7.245c-.8-4.014-1.259-5-.977-8.218a7.7,7.7,0,0,1,3.031-5.933,23.114,23.114,0,0,1,7.207-4.014c5.914-2.59,7.684-3.894,10.262-4.116.887-.232,2.507-.379,3.634-.564a41.385,41.385,0,0,1,4.3-.254c3.807.321,3.724.08,9.415,1.8,3.919,1.249,4.2,1.557,7.045,4.261a12.718,12.718,0,0,1,3.112,3.46,7.351,7.351,0,0,1,1.063,2.038,21.25,21.25,0,0,1,1.019,11.366c-.977,3.782-1.121,4.027-2.081,5.375a50.243,50.243,0,0,1-4.854,6.809c-2.407,2.894-3.924,4.015-6.08,7.213,4.8,2.171,9.66,4.12,12,4.6s5.157,1.259,8.93,2.4a36.237,36.237,0,0,0,7.909.914c2.519.047,5.14-.342,8.3-.358,3.394-.547,4.292-1.42,5.542-2.6s2.714-5.277,2.132-11.06c-.433-4.186.006-4.583-.628-6.81.537-2.083,1.363-4.511,1.869-6.83.79-3.619,1.126-6.741,1.126-6.741a28.14,28.14,0,0,0,0-7.418,9.7,9.7,0,0,0-2-4.931s-1.113-2.261-4.785-4.911c-7.741-7.095-8.837-11.614-11.56-17.035-5-13.583-5.419-31.222-5.419-31.222h-49.881s-3.791,19.324-10.613,30.373a33.085,33.085,0,0,1-5.777,7.108c-2.772,2.414-3.814,2.415-6.533,3.741-.752.423-3.33.336-5.308,2.2s-2.163,3.271-4.719,6.259a20.019,20.019,0,0,0-3.141,9.554s-1.4,8.436,1.563,16.236c.758,2.143.763,1.953,1.578,4.128a14.249,14.249,0,0,1,.9,2.1c1.028,3.047,3,6.076,4.855,12.014C2824.014,1882.125,2824.432,1884.5,2825.386,1886.7Z' transform='translate(-2256.699 -1283.111)' /> <path class='knee-part knee-part-CHK03' d='M2853.894,2102.029c-.031,0-.175-2.167-1.154-7.3-.493-2.586-1.833-8.791-3.391-15.248a83.4,83.4,0,0,0-4.947-14.491c-5.18-8.431-6.085-7.743-9.99-12.552-2.3-3.077-5.131-6.472-6.572-12.374-1.782-7.76-3.044-15.005-2.728-16.963a11.278,11.278,0,0,1,1-5.174c1.112-2.02,2.383-1.935,4.076-3.075,1.032-.62,1.738-1.779,6.229-2.376,8.056-2.1,7.168-2.054,12.617-3.38,2.893-.2,7.009-.357,9.478-.836a20.4,20.4,0,0,1,4.792-1.659c1.457,1.051.449.386,1.763,1.353a28.5,28.5,0,0,0,3.142,1.853c.967.584,1.367.66,4.065.62a12.2,12.2,0,0,0,3.819-.476,6.368,6.368,0,0,0,2.631-2,12.406,12.406,0,0,0,2.609-4,30.432,30.432,0,0,1,7.934,3.118c2.792,1.752,3.746,3.082,6.747,4.079a37.335,37.335,0,0,0,3.918.842c5.193.884,7.813.039,15.624.179s7.216,1.214,8.915,3.675c1.174,1.831.675,2.812,1.9,6.333.611,2.97.294,4.727-.262,9.062-.01.078-.214,2.41-.553,4.023-.6,3.443-.508,2.955-1.084,4.515a15.131,15.131,0,0,1-2.582,4.544c-1.849,2.679-3.347,4.573-4.874,6.487-2.106,2.994-4.521,5.919-6.5,8.892-.48.741-1.945,3.067-1.945,3.067s0-.417-3.1,5.37c-3.8,7.138-5.818,15.155-8.848,30.237-.728,3.619-.315,2.182-.365,2.2s-.153,1.459-.153,1.459Z' transform='translate(-2263.238 -1405.055)' /> </g> </svg>"
                },
                new FindingLocalizer
                {
                    Id = Guid.NewGuid(),
                    Code = "kne_m_L006",
                    Mapping = "FEMCONLAT,FEMCONMED,TIBCONLAT,TIBEMIN,TIBCONMED",
                    Content = "<svg width='312' height='440' viewBox='0 0 312 440'> <style> .rectangle { fill: #fff; stroke: #dfdfdf; stroke-width: 3px; } .rectangle__outer { stroke: none; } .rectangle__inner { fill: none; } .section--light { stroke-width: 3px; fill: none; stroke: #888585; stroke-miterlimit: 10; } .section--dark { stroke-width: 3px; fill: none; stroke: #87837c; stroke-miterlimit: 10; } .text { fill: #fff; font-size: 18px; font-family: BentonSansBold, BentonSans; font-weight: 700; } .light-grey { fill: #dfdfdf; } .dark-grey { fill: #b2b2b2; } .element { fill: #bdbdbd; } .element__selected { fill: #f80202; } text.checked { fill: #ffffff !important; } :not(text).checked { fill: #fe0000 !important; opacity: 1 !important; } </style> <g transform='translate(-129 -321)'> <g class='rectangle' transform='translate(129 321)'> <rect class='rectangle__outer' width='312' height='440' /> <rect class='rectangle__inner' x='1.5' y='1.5' width='309' height='437' /> </g> <g transform='translate(-332.999 -177)'> <path class='light-grey' d='M270.758,225.059c-6.739-26.076-35.31-15.383-36.628.879-1.161,14.319,3.955,40.434-38.085,41.9-32.6,1.136-33.141-16.58-31.739-24.593a7.049,7.049,0,0,0-2.154-6.4,45.794,45.794,0,0,1-13.279-22.922c-4.1-23.439,2.344-32.521,10.254-66.51,6.739-50.1,21.845-55.554,31.644-56.611,10.854-1.17,25.8,3.116,37.8,10.612,12.192,7.617,21.389,5.133,43.364-1.466s34.051,3.047,41.308,11.28c5.586,6.339,22.668,14.095,31.355,64.02,9.278,53.324-8.2,86.433-14.357,91.414s-27.469,9.143-46-2.637c-15.673-9.961-7.278-15.023-13.478-38.968' transform='translate(370.399 438.291)' /> <path class='section--light' d='M270.758,225.059c-6.739-26.076-35.31-15.383-36.628.879-1.161,14.319,3.955,40.434-38.085,41.9-32.6,1.136-33.141-16.58-31.739-24.593a7.049,7.049,0,0,0-2.154-6.4,45.794,45.794,0,0,1-13.279-22.922c-4.1-23.439,2.344-32.521,10.254-66.51,6.739-50.1,21.845-55.554,31.644-56.611,10.854-1.17,25.8,3.116,37.8,10.612,12.192,7.617,21.389,5.133,43.364-1.466s34.051,3.047,41.308,11.28c5.586,6.339,22.668,14.095,31.355,64.02,9.278,53.324-8.2,86.433-14.357,91.414s-27.469,9.143-46-2.637C268.563,254.066,276.959,249,270.758,225.059Z' transform='translate(370.399 438.291)' /> </g> <g> <path class='light-grey' d='M192.426,542.132a19.562,19.562,0,0,0-6.4-8.206c-4.168-2.858-8.915-8.882-26.624-7.81s-20.343.328-26.148,4.159c-5.761,3.8-4.614,10.053-4.258,13.117.411,3.554-1.444,11.657-5.444,22.008-2.365,6.123-1.047,19.4-.222,21.534,6.446,16.669,15.86,8.187,15.86,8.187l30.163-16.749Z' transform='translate(32.787 40.429)' /> <path class='light-grey' d='M306.788,733.281S296.07,746.02,291.2,748.3c-7.679,3.588-7.078,1.427-13.405,3.925a24.561,24.561,0,0,1-17.961.822c-9.694-3.428-18.435-17.872-18.435-17.872l30.987-13.3Z' transform='translate(-1.001 -15.103)' /> <path class='section--light' d='M192.426,542.132a19.562,19.562,0,0,0-6.4-8.206c-4.168-2.858-8.915-8.882-26.624-7.81s-20.343.328-26.148,4.159c-5.761,3.8-4.614,10.053-4.258,13.117.411,3.554-1.444,11.657-5.444,22.008-2.365,6.123-1.047,19.4-.222,21.534,6.446,16.669,15.86,8.187,15.86,8.187l30.163-16.749Z' transform='translate(32.787 40.429)' /> <path class='dark-grey' d='M189.136,540.644s-.139-5.761-2.85-7.621c-2.547-1.748-7.024-.793-17.868-.8s-10.878,1.53-14.828,3.1c-6.844,2.721-12.807,5.091-13.674,11.5-2.251,16.634,3.941,26.124,8.045,30.605.345.377.438-12.344,2.963-15.108,7.985-8.743,12.492-10.562,12.492-10.562l13.743-6.161Z' transform='translate(27.904 38.734)' /> <path class='section--dark' d='M306.788,733.281S296.07,746.02,291.2,748.3c-7.679,3.588-7.078,1.427-13.405,3.925a24.561,24.561,0,0,1-17.961.822c-9.694-3.428-18.435-17.872-18.435-17.872l30.987-13.3Z' transform='translate(-1.001 -15.103)' /> <path class='dark-grey' d='M255.692,748.932c2.84,4.048,11.013,8,14.751,7.786,9.7-.568,21.122-5.238,21.122-5.238l-9.7-6.921s-29.664-.6-26.172,4.374' transform='translate(-4.973 -21.528)' /> <path class='light-grey' d='M148.446,624.065c-7.336-9.466-7.941-20.278-8.41-26.824s.006-38.289,5.317-50.073c4.829-10.719,5.895-8.554,15.589-13.3s29.276-6.647,29.276-6.647,22.068-2.622,33.457.2c11.222,2.776,20.72,1.715,25.662-.184s22.05-2.658,28.7-6.268c13.688-6.461,31.74-8.529,37.474-7.171,7.1,1.681,31.338,11.365,31.338,11.365s47.937,20.581,38.944,70.986c-9.466,56.795-42.833,62.237-52.043,69.6-3.643,2.868-12.466,6.461-22.667,10.343-28.705,11.78-53.037,11.776-53.037,11.776s-29.845.565-43.909-11.033-30.673,2.42-65.7-52.758' transform='translate(27.773 44)' /> <path class='section--light' d='M148.446,624.065c-7.336-9.466-7.941-20.278-8.41-26.824s.006-38.289,5.317-50.073c4.829-10.719,5.895-8.554,15.589-13.3s29.276-6.647,29.276-6.647,22.068-2.622,33.457.2c11.222,2.776,20.72,1.715,25.662-.184s22.05-2.658,28.7-6.268c13.688-6.461,31.74-8.529,37.474-7.171,7.1,1.681,31.338,11.365,31.338,11.365s47.937,20.581,38.944,70.986c-9.466,56.795-42.833,62.237-52.043,69.6-3.643,2.868-12.466,6.461-22.667,10.343-28.705,11.78-53.037,11.776-53.037,11.776s-29.845.565-43.909-11.033S183.468,679.244,148.446,624.065Z' transform='translate(27.773 44)' /> </g> <g transform='translate(-332.999 -177)'> <g transform='translate(530.678 527)'> <g transform='translate(0)'> <path class='element CHK00' d='M254.09,193.759c-10.159.507-18.234,5.389-18.436,13.264-.269,10.475,2.844,27.519,2.662,36.061-.384,18-10.049,23.413-35.392,24.3-32.6,1.136-34.814-16.331-34.768-24.465.034-6.033,0-34.573,1.361-41.762,1-5.262,7.185-22.975,4.4-34.71-4.1-23.44.15-56.46,6.3-65.552,9.522-15.167,27.981-12.53,39.408-8.575,10.316,3.571,17.359,8.813,31.167,13.648a11.49,11.49,0,0,0,3.3.951' transform='translate(-167.158 -88.253)' /> </g> </g> <text class='text' transform='translate(566 574)'> <tspan x='0' y='0'>FEM</tspan> <tspan x='0' y='21'>CON</tspan> <tspan x='0' y='42'>LAT</tspan> </text> </g> <g transform='translate(-332.999 -177)'> <g transform='translate(619.365 541.911)'> <path class='element CHK01' d='M300.1,114.718c11.1,1.1,23.262-3.4,32.245-3.035,22.926.917,21.541,12.009,29,20.948,5.415,6.486,22.863,14.65,28.137,59.039,1.683,14.157-1.665,28.645-1.325,38.675.951,28.051,1.181,38.6-6.888,43.362-15.634,9.23-37.168,3.876-48.3-4.1-6.763-6.723-.893-25.2-4.589-49.369-3.642-14.095-16.331-19.514-28.282-18.918' transform='translate(-300 -110.664)' /> </g> <text class='text' transform='translate(630 574)'> <tspan x='0' y='0'>FEM</tspan> <tspan x='0' y='21'>CON</tspan> <tspan x='0' y='42'>MED</tspan> </text> </g> <g> <g transform='translate(172.427 574.615)'> <g transform='translate(0 0)'> <path class='element CHK02' d='M161.792,624.044c4.5,3.313,27.135,8.045,33.13,13.093,14.514,9.151,30.709-9.381,35.97-19.877,1-2,19.563-34.392,34.032-35.97,10.457-2.042,1.4-16.149-1.073-19.218-2.756-3.423-7.251-18.732-14.264-20.371-4.532-1.059-14.672,0-22.717-2.139-8.608-2.29-17.985-2.13-30.527-2.13s-26.225,6.39-32.494,7.809S152.8,552.88,151.38,556.515s-6.153,29.971-4.5,37.238,10.412,26.978,14.908,30.291' transform='translate(-146.536 -537.43)' /> </g> </g> <text class='text' transform='translate(208 607)'> <tspan x='0' y='0'>TIB</tspan> <tspan x='0' y='21'>CON</tspan> <tspan x='0' y='42'>LAT</tspan> </text> </g> <g> <g transform='translate(223.224 562.582)'> <path class='element CHK03' d='M219.42,662.246c9.357,6.683,29.353,15.064,41.877,15.7,11.823.6,37.3.441,42.122-.709,5.205-1.244,16.646-7.905,9.3-15.087-6.942-6.784-5.995-19.8-5.68-24.453,1.211-10.823,2.288-20.231,5.522-29.817,4.417-13.094,5.035-24.789,3.236-27.529-6.46-9.84-3.709-14.435-.869-18.38,3.509-4.874,15.678-10.346,8.958-27.7-2.175-5.615,3.219-13.638-3.474-13.638s-15.346,5.534-21.433,8.24c-7.1,3.155-20.326,1.783-18.266,5.4,3.057,5.364,1.716,15.309,7.625,23.493,4.642,6.433,4.186,9.252,4.186,9.252s1.894,9.781-5.809,11.99c-16.8,3.757-31.456,33.594-31.456,33.594S250,625.419,244.64,629.9a63.672,63.672,0,0,1-18.366,10.886c-5.185,3.408-12.375,17.511-6.853,21.456' transform='translate(-217.432 -520.635)' /> </g> <text class='text' transform='translate(278 681)'> <tspan x='-15.219' y='0'>TIB</tspan> <tspan x='-23.832' y='21'>EMIN</tspan> </text> </g> <g> <g transform='translate(316.857 561.565)'> <g transform='translate(0)'> <path class='element CHK04' d='M355.619,661.844c-9.782-6.469-9.623-30.921-1.735-55.216,4.767-17.827,4.891-25.084,0-31.868s2.041-12.471,4.417-15.045,10.571-12.248,7.573-19.5-2.013-18.135.631-19.8c3.261-2.052,5.74-1.112,11.6.237,4.887,1.126,23.7,8.985,28.4,11.357,10.562,5.329,33.607,27.711,33.6,48.751,0,14.6.348,49.221-30.053,71.7-35.733,24.848-54.428,9.388-54.428,9.388' transform='translate(-348.112 -519.216)' /> </g> </g> <text class='text' transform='translate(347 607)'> <tspan x='0' y='0'>TIB</tspan> <tspan x='0' y='21'>CON</tspan> <tspan x='0' y='42'>MED</tspan> </text> </g> </g> </svg>"
                },
                new FindingLocalizer
                {
                    Id = Guid.NewGuid(),
                    Code = "kne_m_L007",
                    Mapping = "PSU,PIN,ASU,AIN",
                    Content = "<svg width='312' height='200' viewBox='0 0 312 200.001' class=\"white-background\"> <defs> <pattern id='pattern-knee-compartment' width='1' height='1' viewBox='-98.418 28.667 508.642 326.256'> <image preserveAspectRatio='xMidYMid slice' width='311.806' height='447.95' xlink:href='assets/img/kneeMRT/knee-compartment.png' /> </pattern> </defs> <style> .white-background { background-color: white } .knee-compartment-area { fill: transparent; opacity: 0.7; font-size: 18px; font-family: BentonSansBold, BentonSans; font-weight: 700; } .knee-compartment-area__text { fill: #000; } .background-pattern { fill: url(#pattern-knee-compartment); } .stroke-width-3-and-fill-none, .background-visibility, .line-visibility { stroke-width: 3px; fill: none; } .line-visibility { stroke: #000; } .background-visibility { stroke: #e7e7e7; } text.red-checked { fill: #fe0000 !important; } :not(text).knee-part-checked { fill: #f80202 !important; opacity: 0.6 !important; } </style> <g transform='translate(-827 -312.999)'> <g transform='translate(350)'> <g class='background-pattern' transform='translate(477 301.999)'> <path d='M 310.3056945800781 209.5 L 1.500013947486877 209.5 L 1.500013947486877 12.49999237060547 L 310.3056945800781 12.49999237060547 L 310.3056945800781 209.5 Z' /> <path d='M 3 13.99998474121094 L 3 208 L 308.8056945800781 208 L 308.8056945800781 13.99998474121094 L 3 13.99998474121094 M 0 10.99998474121094 L 311.8056945800781 10.99998474121094 L 311.8056945800781 211 L 0 211 L 0 10.99998474121094 Z' /> </g> <g> <path class='line-visibility' d='M24.5,194.746-.524-2.642' transform='translate(609.5 316.5)' /> <line class='line-visibility' x2='309' y2='9' transform='translate(478.5 397.5)' /> </g> <g class='background-visibility' transform='translate(477 313)'> <rect width='312' height='200' /> <rect x='1.5' y='1.5' width='309' height='197' /> </g> </g> <g class='knee-compartment-area knee-part-CHK00'> <path d='M-19582.643-10579.763l10.576,84.15,56.029,1.733s1.008-.959,1.008-5.483.791-5.49-1.314-10.631-3.322-6.035-5.77-9.425a16.089,16.089,0,0,0-4.023-4.13c-.213-.335-11.381-2.859-12.572-3.984-.574-.546-3.8-4.269-6.078-6.211s-3.043-1.559-3.043-1.559a58.129,58.129,0,0,0-4.021-7.384c-3.439-5.771-6.273-8.375-8.828-15.276a60.432,60.432,0,0,1-3.191-12.615c-.238-1.075-1.551-9.186-1.551-9.186Z' transform='translate(20543.449 10895.76)' /> <text transform='translate(1060 365.5)' class='knee-compartment-area__text red-CHK00'> <tspan x='0' y='0'>P-SU</tspan> </text> </g> <g class='knee-compartment-area knee-part-CHK01'> <path d='M-13817.253-10755l54.776,1.685a38.316,38.316,0,0,1-6.834,9.121c-4.749,4.81-12.255,7.459-12.255,7.459a34.755,34.755,0,0,1,5.441,4.917c2.479,2.836,4.733,5.895,4.733,5.895a6.764,6.764,0,0,1,4.29,1.969c1.628,1.84,1.589,2.379,2.174,5.174a25.793,25.793,0,0,1,.128,6.87c-.022-.017,1.327.478,2.212,11.33s.035,12.016,0,14.312-1.106,8.013,0,15.441,2.156,22.844,2.156,22.844h-18.449l-.986-9.812a90.787,90.787,0,0,0-3.148-14.491c-2.046-5.992-4.63-8.39-4.63-8.39a76.143,76.143,0,0,0-1.864,7.906,47.55,47.55,0,0,0-1.3,10.853,137.881,137.881,0,0,0,.478,13.934h-13.253Z' transform='translate(14789 11158)' /> <text transform='translate(1063 469.5)' class='knee-compartment-area__text red-CHK01'> <tspan x='0' y='0'>P-IN</tspan> </text> </g> <g class='knee-compartment-area knee-part-CHK02'> <path d='M-13831.283-10842h-19.33a157.4,157.4,0,0,1,.58,19.46c-.4,9.71-.693,14.493-2.479,19.388s-2.39,6.089-3.544,9.322-1.05,3.3-1,3.411-.795-.467-4.554,1.4-4.295,1.177-7,3.6-2.9,3.532-3.828,6.1-.842,7.979-.752,9.239.069,2.266.4,4.876.883,5.79.883,5.79l51.28,1.48Z' transform='translate(14789 11158)' /> <text transform='translate(860 365.5)' class='knee-compartment-area__text red-CHK02'> <tspan x='0' y='0'>A-SU</tspan> </text> </g> <g class='knee-compartment-area knee-part-CHK03'> <path d='M14470.64,11266.374s-.687-3.421-3.2-11.178-6.694-19.849-6.694-19.849-2.1-9.181-2.234-10.586.178-2.689,1.256-5.507.877-1.587,2.46-6.039,2.25-7.225,3.134-9.18,2.01-3.349,3.276-6.956a44.468,44.468,0,0,0,1.81-7.546s.906-4.273,3.123-6.57a10.839,10.839,0,0,1,5.368-2.686,22.051,22.051,0,0,1,3.822-2.865,2.764,2.764,0,0,1,1.816-.524,3.772,3.772,0,0,0,.855-.036,11.888,11.888,0,0,1,1.9-.16l3.673-1.361-3.561-1.518a53,53,0,0,0-7.334-3.812c-4.943-2.2-6.108-3.218-10.076-6.282a51.545,51.545,0,0,1-5.736-4.973l25.866.772,13.664,106.854Zm-22.841-88.942c-1.646-1.18-1.412-1.07-3.094-3.854a43.119,43.119,0,0,1-3.633-7.276,27.931,27.931,0,0,1-2.071-8.3s22.35.528,22.036.67a13.435,13.435,0,0,0-1.987,3.119,30.806,30.806,0,0,1-.731,3.946,38.5,38.5,0,0,0-2.271,7.614c-.561,1.78-.582,2.188-1.646,3.451s-1.241,1.558-2.8,1.715c-.372.037-.689.062-.979.062A4.411,4.411,0,0,1,14447.8,11177.432Z' transform='translate(-13521.49 -10756.414)' /> <text transform='translate(860 469.5)' class='knee-compartment-area__text red-CHK03'> <tspan x='0' y='0'>A-IN</tspan> </text> </g> </g> </svg>"
                },
            };
        }
    }
}