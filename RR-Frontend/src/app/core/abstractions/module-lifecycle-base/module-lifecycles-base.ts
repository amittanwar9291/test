import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';

export abstract class ModuleLifecyclesBase {
  constructor(private moduleLifecycles: ModuleLifecycleService) {
    this.buildInit();
    this.buildDestroy();
  }

  abstract moduleOnDestroy();
  abstract moduleOnInit();

  private buildInit() {
    this.moduleLifecycles.getOnInitStream().subscribe(() => {
      this.moduleOnInit();
    });
  }

  private buildDestroy() {
    this.moduleLifecycles.getOnDestroyStream().subscribe(() => {
      this.moduleOnDestroy();
    });
  }
}
