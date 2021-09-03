using System;
using System.Collections.Generic;
using Dicom;
using Dicom.Network;
using RadioReport.DicomCommandlineParser.Enums;
using RadioReport.DicomCommandlineParser.Models;

namespace RadioReport.DicomCommandlineParser.Services
{
    public static class DicomRequestFactory
    {
        public static DicomRequest CreateRequest(
            QueryRequest queryRequest,
            DicomQueryRetrieveLevel retrieveLevel,
            QueryData queryData,
            PacsConfig pacsConfig,
            IEnumerable<string> requestedFields
        )
        {
            DicomRequest request;
            switch (queryRequest)
            {
                case QueryRequest.CFind:
                    request = CreateCFindRequest(retrieveLevel, queryData);
                    break;
                case QueryRequest.CGet:
                    request = CreateCGetRequest(queryData);
                    break;
                case QueryRequest.CMove:
                    request = CreateCMoveRequest(queryData, pacsConfig);
                    break;
                default:
                    throw new ApplicationException("Dicom request couldn't be created");
            }

            request!.Dataset.AddOrUpdate(new DicomTag(0x8, 0x5), "ISO_IR 100");
            Helper.AddRequestedFields(request, requestedFields);

            return request;
        }

        private static DicomRequest CreateCFindRequest(DicomQueryRetrieveLevel retrieveLevel, QueryData queryData)
        {
            var request = new DicomCFindRequest(retrieveLevel);
            switch (retrieveLevel)
            {
                case DicomQueryRetrieveLevel.Patient:
                    request.Dataset.AddOrUpdate(DicomTag.PatientID, queryData.PatientId ?? string.Empty);
                    break;
                case DicomQueryRetrieveLevel.Study:
                    request.Dataset.AddOrUpdate(DicomTag.PatientID, queryData.PatientId ?? string.Empty);
                    request.Dataset.AddOrUpdate(DicomTag.StudyInstanceUID, queryData.StudyInstanceUid ?? string.Empty);
                    request.Dataset.AddOrUpdate(DicomTag.AccessionNumber, queryData.AccessionNumber ?? string.Empty);
                    break;
                case DicomQueryRetrieveLevel.Series:
                    request.Dataset.AddOrUpdate(DicomTag.StudyInstanceUID, queryData.StudyInstanceUid ?? string.Empty);
                    break;
                default:
                    Console.Error.WriteLine("No valid Retrieve Level selected");
                    Environment.Exit(1);
                    break;
            }

            request.OnResponseReceived = (request, response) =>
            {
                if (response.Dataset == null || !response.HasDataset) return;

                Program.ResultDatasets.Add(response.Dataset);
            };

            return request;
        }

        private static DicomRequest CreateCGetRequest(QueryData queryData)
        {
            var request = new DicomCGetRequest(queryData.StudyInstanceUid);
            request.Dataset.AddOrUpdate(DicomTag.PatientID, queryData.PatientId ?? string.Empty);
            request.Dataset.AddOrUpdate(DicomTag.StudyInstanceUID, queryData.StudyInstanceUid ?? string.Empty);
            request.Dataset.AddOrUpdate(DicomTag.AccessionNumber, queryData.AccessionNumber ?? string.Empty);

            request.OnResponseReceived = (request, response) =>
            {
                if (response.Dataset == null || !response.HasDataset) return;

                Program.ResultDatasets.Add(response.Dataset);
            };

            return request;
        }

        private static DicomRequest CreateCMoveRequest(QueryData queryData, PacsConfig pacsConfig)
        {
            var callingAe = string.IsNullOrEmpty(pacsConfig.CallingAe) ? Consts.StoreScp : pacsConfig.CallingAe;
            var request = new DicomCMoveRequest(callingAe, queryData.StudyInstanceUid);
            request.Dataset.AddOrUpdate(DicomTag.PatientID, queryData.PatientId ?? string.Empty);
            request.Dataset.AddOrUpdate(DicomTag.StudyInstanceUID, queryData.StudyInstanceUid ?? string.Empty);
            request.Dataset.AddOrUpdate(DicomTag.AccessionNumber, queryData.AccessionNumber ?? string.Empty);

            request.OnResponseReceived = (request, response) =>
            {
                if (response.Dataset == null || !response.HasDataset) return;

                Program.ResultDatasets.Add(response.Dataset);
            };

            return request;
        }
    }
}
