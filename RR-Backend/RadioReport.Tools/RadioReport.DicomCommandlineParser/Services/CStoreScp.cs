using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dicom;
using Dicom.Log;
using Dicom.Network;

namespace RadioReport.DicomCommandlineParser.Services
{
    public class CStoreScp : DicomService, IDicomServiceProvider, IDicomCStoreProvider, IDicomCEchoProvider
    {
        private static readonly DicomTransferSyntax[] AcceptedTransferSyntaxes =
        {
            DicomTransferSyntax.ExplicitVRLittleEndian,
            DicomTransferSyntax.ExplicitVRBigEndian,
            DicomTransferSyntax.ImplicitVRLittleEndian,
        };

        private static readonly DicomTransferSyntax[] AcceptedImageTransferSyntaxes =
        {
            // Lossless
            DicomTransferSyntax.JPEGLSLossless,
            DicomTransferSyntax.JPEG2000Lossless,
            DicomTransferSyntax.JPEGProcess14SV1,
            DicomTransferSyntax.JPEGProcess14,
            DicomTransferSyntax.RLELossless,
            // Lossy
            DicomTransferSyntax.JPEGLSNearLossless,
            DicomTransferSyntax.JPEG2000Lossy,
            DicomTransferSyntax.JPEGProcess1,
            DicomTransferSyntax.JPEGProcess2_4,
            // Uncompressed
            DicomTransferSyntax.ExplicitVRLittleEndian,
            DicomTransferSyntax.ExplicitVRBigEndian,
            DicomTransferSyntax.ImplicitVRLittleEndian
        };

        private static readonly List<DicomTag> TagsToKeep = new List<DicomTag>
            { DicomTag.PatientID, DicomTag.StudyInstanceUID, DicomTag.AccessionNumber, DicomTag.SeriesInstanceUID };

        private readonly HashSet<string> _distinctSeriesIds = new HashSet<string>();

        public CStoreScp(INetworkStream stream, Encoding fallbackEncoding, Logger log) : base(stream, fallbackEncoding, log)
        {
            TagsToKeep.AddRange(Program.RequestedDicomTags);
        }

        public void OnReceiveAbort(DicomAbortSource source, DicomAbortReason reason)
        {
            Console.Error.WriteLine($"Scp connection has been aborted. Source: {source}, reason: {reason}");
            Environment.Exit(1);
        }

        public void OnConnectionClosed(Exception exception)
        {
            Helper.PrintAndExit();
        }

        public Task OnReceiveAssociationRequestAsync(DicomAssociation association)
        {
            foreach (var context in association.PresentationContexts)
            {
                if (context.AbstractSyntax == DicomUID.Verification)
                {
                    context.AcceptTransferSyntaxes(AcceptedTransferSyntaxes);
                }
                else if (context.AbstractSyntax.StorageCategory != DicomStorageCategory.None)
                {
                    context.AcceptTransferSyntaxes(AcceptedImageTransferSyntaxes);
                }
            }

            return SendAssociationAcceptAsync(association);
        }

        public Task OnReceiveAssociationReleaseRequestAsync() => SendAssociationReleaseResponseAsync();

        public DicomCStoreResponse OnCStoreRequest(DicomCStoreRequest request)
        {
            if (request?.Dataset == null || !request.HasDataset) return new DicomCStoreResponse(request, DicomStatus.Success);

            var seriesInstanceUid = request.Dataset.GetString(DicomTag.SeriesInstanceUID);
            if (string.IsNullOrEmpty(seriesInstanceUid) || _distinctSeriesIds.Contains(seriesInstanceUid))
                return new DicomCStoreResponse(request, DicomStatus.Success);

            _distinctSeriesIds.Add(seriesInstanceUid);
            request.Dataset.Remove(i => !TagsToKeep.Contains(i.Tag));
            Program.ResultDatasets.Add(request.Dataset);

            return new DicomCStoreResponse(request, DicomStatus.Success);
        }

        public void OnCStoreRequestException(string tempFileName, Exception e)
        {
        }

        public DicomCEchoResponse OnCEchoRequest(DicomCEchoRequest request) => new DicomCEchoResponse(request, DicomStatus.Success);
    }
}
