import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { IntervertebalDiscJointsApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-api.model';
import { IntervertebralDiscJointsUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-ui.model';
import { IntervertebalDiscJointsFindingMapper } from '@mappings/spineMRT/intervertebal-disc-joints/intervertebal-disc-joints-finding.mapper';
import { IntervertebralDiscJointsFindingApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-finding-api.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class IntervertebalDiscJointsMapper implements IMapper<IntervertebalDiscJointsApiModel, IntervertebralDiscJointsUiModel> {
  constructor(private intervertebalDiscJointsFindingMapper: IntervertebalDiscJointsFindingMapper) {
    automapper
      .createMap('IntervertebalDiscJoints_SpineMRT_ApiModel', 'IntervertebalDiscJoints_SpineMRT_UiModel')
      .convertToType(IntervertebralDiscJointsUiModel);
    automapper
      .createMap('IntervertebalDiscJoints_SpineMRT_UiModel', 'IntervertebalDiscJoints_SpineMRT_ApiModel')
      .convertToType(IntervertebalDiscJointsApiModel);
  }

  mapToAPI(source: IntervertebralDiscJointsUiModel, out: IntervertebalDiscJointsApiModel): IntervertebalDiscJointsApiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.intervertebalDiscJointsFindingMapper.mapToAPI(finding, new IntervertebralDiscJointsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: IntervertebalDiscJointsApiModel, out: IntervertebralDiscJointsUiModel): IntervertebralDiscJointsUiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.intervertebalDiscJointsFindingMapper.mapToUI(finding, new IntervertebralDiscJointsFindingUiModel()));
    });
    return out;
  }
}
